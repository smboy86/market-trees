'use client';
import { createClient } from '@/utils/supabase/client';
import { useEffect } from 'react';

export default function CheckUserSession() {
  const supabase = createClient();

  useEffect(() => {
    // 세션 변경 이벤트 감지
    const channel = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('onAuthStateChange - event ::: ', event);
      if (event === 'INITIAL_SESSION' || event === 'SIGNED_IN') {
        if (!session) return;
        // # todo - 세션이 존재하면, 수파베이스 로그인 처리 진행
        const { data: currentUserInfo, error } = await supabase
          .from('users')
          .select(`*`)
          .eq('id', session.user.id!)
          .single();

        if (!error) {
          console.log('사용자 정보 조회 오류  :: ', error);
        }

        if (!currentUserInfo) {
          console.log('사용자 정보 조회 성공 :::  ', currentUserInfo);
          return;
        }

        // 기타 로그인 처리 (필요시 매뉴얼 하게)
      } else if (event === 'SIGNED_OUT') {
        // 로그 아웃 처리
      }
    });

    return () => {
      channel.data.subscription.unsubscribe();
    };
  }, [supabase]);

  return null;
}
