import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AuthProvider from '@/components/common/AuthProvider';
import Navbar from '@/components/layout/navigator/navbar';
import Footer from '@/components/layout/footer';
import CheckUserSession from '@/components/auth/checkUserSession';
import { Suspense } from 'react';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '마켓 연리지',
  description: '마켓 연리지와 함께, 더 나은 세상을',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        {/* 네비게이션 서버 컴포넌트 */}
        <Navbar />
        <AuthProvider>
          {children}
          {/* 세션 체크 처리 */}
          <CheckUserSession />
        </AuthProvider>
        <Footer />
        <Suspense>
          <Toaster />
        </Suspense>
      </body>
    </html>
  );
}
