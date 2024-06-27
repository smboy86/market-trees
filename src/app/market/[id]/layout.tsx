import { Container } from '@/components/layout/container';
import Navbar from '@/components/layout/navigator/navbar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* 네비게이션 서버 컴포넌트 */}
      <Navbar />
      <Container>{children}</Container>
    </>
  );
}
