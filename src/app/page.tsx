'use client';

import CheckUserSession from '@/components/auth/checkUserSession';
import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { createClient } from '@/utils/supabase/client';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Home() {
  return (
    <Container variant={'pcLayout'} className="border">
      <main className="flex min-h-screen flex-col items-center justify-start">
        View - Navigatator
        <nav>
          <Button onClick={() => alert('안녕하세요, 마켓 연리지 입니다.')}>
            Hi
          </Button>
        </nav>
        View - Footer
      </main>
      {/* 세션 체크 처리 */}
      <CheckUserSession />
    </Container>
  );
}
