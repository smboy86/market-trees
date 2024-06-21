import { createClient } from '@/utils/supabase/client';
import Navlinks from './navLinks';

export default async function Navbar() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <nav className="sticky top-0 z-40 transition-all duration-150 h-16 md:h-20">
      <div className="max-w-6xl px-6 mx-auto">
        <Navlinks user={user} />
      </div>
    </nav>
  );
}
