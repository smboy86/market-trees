import Link from 'next/link';
import { cookies, headers } from 'next/headers';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import { SubmitButton } from './submitBtn';
import { Button } from '@/components/ui/button';
// import { SubmitButton } from './submit-button';

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <SubmitButton />
    </main>
  );
}
