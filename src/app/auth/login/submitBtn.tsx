'use client';

import { type ComponentProps } from 'react';
import { Button } from '@/components/ui/button';
import { createClient } from '@/utils/supabase/client';
// import { headers } from 'next/headers';

type Props = ComponentProps<'button'> & {
  pendingText?: string;
};

export function SubmitButton({ children, pendingText, ...props }: Props) {
  async function signInWithKakao() {
    const supabase = createClient();
    // const origin = headers().get('origin');

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'kakao',
      options: {
        // redirectTo: `${origin}/auth/callback`,
      },
    });

    console.log('dddd   ', data, error);
  }

  return (
    <Button
      variant={'outline'}
      onClick={() => {
        signInWithKakao();
      }}
    >
      카카오 로그인
    </Button>
  );
}
