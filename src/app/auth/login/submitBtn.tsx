'use client';

import { type ComponentProps } from 'react';
import { Button } from '@/components/ui/button';
import { createClient } from '@/utils/supabase/client';
import { redirect } from 'next/navigation';

type Props = ComponentProps<'button'> & {
  pendingText?: string;
};

export function SubmitButton({ children, pendingText, ...props }: Props) {
  const getURL = () => {
    let url =
      process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
      process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
      'http://localhost:3000/';
    // Make sure to include `https://` when not localhost.
    url = url.startsWith('http') ? url : `https://${url}`;
    // Make sure to include a trailing `/`.
    url = url.endsWith('/') ? url : `${url}/`;
    return url;
  };

  async function signInWithKakao() {
    const supabase = createClient();

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'kakao',
      options: {
        redirectTo: getURL(),
      },
    });
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
