'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface NavlinksProps {
  user?: any;
}

export default function Navlinks({ user }: NavlinksProps) {
  const router = useRouter();

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
          >
            마켓
          </Link>
          <Link
            href="/"
            className="inline-flex items-center leading-6 font-medium transition ease-in-out duration-75 cursor-pointer text--slate-950 rounded-md p-1"
          >
            창업
          </Link>
          {/* {user && (
            <Link
              href="/account"
              className="inline-flex items-center leading-6 font-medium transition ease-in-out duration-75 cursor-pointer text--slate-950 rounded-md p-1"
            >
              Account
            </Link>
          )} */}
        </nav>
      </div>
      <div className="flex justify-end space-x-8">
        {user ? (
          <div>마이페이지</div>
        ) : (
          //   <form onSubmit={(e) => handnavleRequest(e, SignOut, router)}>
          //     <input type="hidden" name="pathName" value={usePathname()} />
          //     <button type="submit" className={s.link}>
          //       Sign out
          //     </button>
          //   </form>
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
