'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBarLeft() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col items-left flex-1">
      <div className="header pb-4">
        <p className="text-sm text-slate-400">주최자 회원</p>
        <div className="text-2xl pt-1 pb-2">마켓연리지</div>
        <div className="divider border border-b-2"></div>
      </div>
      <nav className="flex flex-col gap-2">
        <Link
          href="/org/market/reg"
          className="inline-flex items-center leading-6 font-medium transition ease-in-out duration-75 cursor-pointer text-slate-950 rounded-md p-1"
          style={{
            textDecorationLine:
              pathname === '/org/market/reg' ? 'underline' : 'none',
          }}
        >
          마켓등록
        </Link>
        <Link
          href="/org/market/list"
          className="inline-flex items-center leading-6 font-medium transition ease-in-out duration-75 cursor-pointer text--slate-950 rounded-md p-1"
          style={{
            textDecorationLine:
              pathname === '/org/market/list' ? 'underline' : 'none',
          }}
        >
          마켓관리
        </Link>
        <Link
          href="/org/setting"
          className="inline-flex items-center leading-6 font-medium transition ease-in-out duration-75 cursor-pointer text--slate-950 rounded-md p-1"
          style={{
            textDecorationLine: pathname.includes('/org/setting')
              ? 'underline'
              : 'none',
          }}
        >
          정보관리
        </Link>
        <Link
          href="/org"
          className="inline-flex items-center leading-6 font-medium transition ease-in-out duration-75 cursor-pointer text--slate-950 rounded-md p-1"
          style={{
            textDecorationLine:
              pathname === '/org/support' ? 'underline' : 'none',
          }}
        >
          1:1문의
        </Link>
        <Link
          href="/org/"
          className="inline-flex items-center leading-6 font-medium transition ease-in-out duration-75 cursor-pointer text--slate-950 rounded-md p-1"
          style={{
            textDecorationLine:
              pathname === '/org/notice' ? 'underline' : 'none',
          }}
        >
          공지사항
        </Link>
        <Link
          href=""
          className="inline-flex items-center leading-6 font-medium transition ease-in-out duration-75 cursor-pointer text--slate-950 rounded-md p-1"
          onClick={() => {
            alert('로그아웃 하시겠습니까');
          }}
        >
          로그아웃
        </Link>
      </nav>
    </div>
  );
}
