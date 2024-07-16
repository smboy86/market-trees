'use client';

import { Container } from '@/components/layout/container';
import Wrap from '@/components/layout/wrap';
import { Button } from '@/components/ui/button';
import { createClient } from '@/utils/supabase/client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface User {
  user_metadata: {
    avatar_url: string;
  };
}

export default function Page() {
  const router = useRouter();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    async function getUser() {
      const supabase = createClient();
      const { data } = await supabase.auth.getUser();

      if (data !== null && data.user !== null) {
        // setUser(data.user);
        setUser({
          user_metadata: { avatar_url: data.user.user_metadata.avatar_url },
        });
      }
    }

    getUser();
  }, []);

  return (
    <Container>
      <Wrap>
        {user ? (
          <div className="flex items-center gap-2 p-10">
            <div className="relative w-[66px] h-[66px] rounded-full border overflow-hidden">
              <p>이미지 부분</p>
              <Image
                // src={user.user_metadata.avatar_url}
                src={user.user_metadata.avatar_url}
                alt="user avatar"
                priority
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              ></Image>
            </div>
            {/* <div className="">{user.user_metadata.full_name}</div> */}
            <data value="">이름 부분</data>
            <Button
              onClick={() =>
                alert(
                  `안녕하세요, ${JSON.stringify(
                    user,
                    null,
                    2,
                  )}님 마켓 연리지 입니다.`,
                )
              }
            >
              Hi
            </Button>
            {/* <Button onClick={() => supabase.auth.signOut()}>Logout</Button> */}
          </div>
        ) : (
          <Button onClick={() => router.push('/auth/login')}>
            로그인이 필요합니다.
          </Button>
        )}
      </Wrap>
    </Container>
  );
}
