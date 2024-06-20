'use client';

import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

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
    </Container>
  );
}
