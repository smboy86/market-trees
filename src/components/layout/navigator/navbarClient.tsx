'use client';

import { Button } from '@/components/ui/button';
import { createClient } from '@/utils/supabase/client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function NavbarClient() {
  const router = useRouter();
  const supabase = createClient();
  // const user = supabase.auth.getUser();
  const [user, setUser] = useState(null);

  const pathname = usePathname();

  const handleLogOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log('로그아웃 에러 발생');
      return;
    }

    router.replace('/');
  };

  useEffect(() => {
    async function getUser() {
      console.log('1111');
      // const ttt = await supabase.auth.getUser();
      // console.log('2222  ', ttt.data.user);
      const session = await supabase.auth.getSession();
      console.log('3333  ', session);
    }

    getUser();
  });

  return (
    <nav className="sticky top-0 z-40 bg-white transition-all duration-150 h-16 md:h-20">
      <div className="max-w-6xl px-6 mx-auto">
        <div className="relative flex flex-row justify-between py-4 align-center md:py-6">
          <div className="flex items-center flex-1">
            <Link
              href="/"
              className="cursor-pointer rounded-full transform duration-100 ease-in-out"
              aria-label="Logo"
            >
              {/* <Logo /> */}
              (로고)
            </Link>
            <nav className="ml-6 space-x-2 lg:block">
              <Link
                href="/"
                className="inline-flex items-center leading-6 font-medium transition ease-in-out duration-75 cursor-pointer text-slate-950 rounded-md p-1"
                style={{
                  textDecorationLine: pathname === '/' ? 'underline' : 'none',
                }}
              >
                마켓
              </Link>
              <Link
                href="/startup"
                className="inline-flex items-center leading-6 font-medium transition ease-in-out duration-75 cursor-pointer text--slate-950 rounded-md p-1"
                style={{
                  textDecorationLine:
                    pathname === '/startup' ? 'underline' : 'none',
                }}
              >
                창업
              </Link>
              <Link
                href="/org"
                className="inline-flex items-center leading-6 font-medium transition ease-in-out duration-75 cursor-pointer text--slate-950 rounded-md p-1 text-slate-500"
              >
                (임시) 주최자 메인
              </Link>
            </nav>
          </div>
          <div className="flex justify-end space-x-8">
            {user ? (
              <>
                <Button
                  variant={'ghost'}
                  onClick={() => {
                    router.push('/mypage');
                  }}
                >
                  마이페이지
                </Button>
                <form onSubmit={handleLogOut}>
                  <Button variant={'ghost'} onClick={handleLogOut}>
                    로그아웃
                  </Button>
                </form>
              </>
            ) : (
              <Link
                href="/auth/login"
                className="inline-flex items-center leading-6 font-medium transition ease-in-out duration-75 cursor-pointer text--slate-950 rounded-md p-1"
              >
                로그인
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
