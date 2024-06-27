'use client';

import { Button } from '@/components/ui/button';
import { createClient } from '@/utils/supabase/client';
import Link from 'next/link';
import {
  usePathname,
  useRouter,
  useSelectedLayoutSegment,
} from 'next/navigation';
import { useEffect } from 'react';

interface NavlinksProps {
  user?: any;
}

export default function Navlinks({ user }: NavlinksProps) {
  const router = useRouter();
  const supabase = createClient();

  const pathname = usePathname();

  console.log('dddd  ', pathname);

  const handleLogOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log('로그아웃 에러 발생');
      return;
    }

    router.replace('/');
  };

  // const isActive = (href: string) => {
  //   return ttt === href ? 'active' : '';
  // };

  return (
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
  );
}
