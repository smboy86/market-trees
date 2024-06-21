'use client';

import CheckUserSession from '@/components/auth/checkUserSession';
import { Container } from '@/components/layout/container';
import Wrap from '@/components/layout/wrap';
import { Button } from '@/components/ui/button';
import { createClient } from '@/utils/supabase/client';
import { useUser } from '@supabase/auth-helpers-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function App() {
  return (
    <Container>
      <Wrap>
        <div className="">1) 슬라이더 영역</div>
        <div className="">2) 캘런디 영역</div>
        <div className="">3) 지도 영역</div>
      </Wrap>
    </Container>
  );
}
