'use client';

import { SocialLoginKakao } from './socialLoginKakao';
import { Auth } from '@supabase/auth-ui-react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { Container } from '@/components/layout/container';

export default function Page() {
  const supabaseClient = useSupabaseClient();

  // URL 확인 - 추후에 중복 코드 제거
  const getURL = () => {
    let url =
      process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
      process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
      'http://localhost:3000/';
    // Make sure to include `https://` when not localhost.
    url = url.startsWith('http') ? url : `https://${url}`;
    // Make sure to include a trailing `/`.
    url = url.endsWith('/') ? url : `${url}/`;

    console.log('URL ::: ', url);
    return url;
  };

  return (
    <Container variant={'pcLayout'}>
      <main className="flex min-h-screen flex-col items-center justify-start">
        <Auth
          supabaseClient={supabaseClient}
          appearance={{
            theme: ThemeSupa,
            style: { container: { width: '286px' } },
          }}
          providers={['kakao']}
          redirectTo={getURL()}
          localization={{
            variables: {
              sign_in: {
                social_provider_text: '카카오',
              },
            },
          }}
        />
        {/* 커스텀 인풋 라벨 */}
        {/* <InputWithLabel></InputWithLabel> */}
        {/* 커스텀 소셜 로그인 */}
        {/* <SocialLoginKakao /> */}
      </main>
    </Container>
  );
}
