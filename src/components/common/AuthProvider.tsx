'use client';

import { useEffect, useState } from 'react';

import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

interface SupabaseProviderProp {
  children: React.ReactNode;
}

const AuthProvider: React.FC<SupabaseProviderProp> = ({ children }) => {
  const [supabaseClient] = useState(() => createClientComponentClient());

  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      {children}
    </SessionContextProvider>
  );
};

export default AuthProvider;
