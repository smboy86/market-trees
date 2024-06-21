'use client';

import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { useUser } from '@supabase/auth-helpers-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function App() {
  const user = useUser();
  const router = useRouter();

  return (
    <Container className="border">
      <main className="flex min-h-screen flex-col items-center justify-start">
        View - Navigatator
        <nav>
          {user ? (
            <div className="flex items-center gap-2 p-10">
              <div className="relative w-[66px] h-[66px] rounded-full border overflow-hidden">
                <Image
                  src={user.user_metadata.avatar_url}
                  alt="user avatar"
                  fill
                ></Image>
              </div>
              <div className="">{user.user_metadata.full_name}</div>
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
            </div>
          ) : (
            <Button onClick={() => router.push('/auth/login')}>
              로그인이 필요합니다.
            </Button>
          )}
        </nav>
        View - Footer
      </main>
      {/* 세션 체크 처리 */}
    </Container>
  );
}
