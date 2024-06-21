'use client';

import { SocialLoginKakao } from './socialLoginKakao';
import { Auth } from '@supabase/auth-ui-react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { InputWithLabel } from '@/components/form/InputWithLabel';
import { Container } from '@/components/layout/container';

export default function Page() {
  const supabaseClient = useSupabaseClient();

  return (
    <Container variant={'pcLayout'} className="border max-w-[1080px]">
      <main className="flex min-h-screen flex-col items-center justify-start">
        {/* <InputWithLabel></InputWithLabel> */}
        <Auth
          supabaseClient={supabaseClient}
          appearance={{
            theme: ThemeSupa,
            style: { container: { width: '286px' } },
          }}
          providers={['kakao']}
          localization={{
            variables: {
              sign_in: {
                social_provider_text: '카카오',
              },
            },
          }}
        />
        {/* <SocialLoginKakao /> */}
      </main>
    </Container>
  );
}
