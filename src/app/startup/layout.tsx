import { Container } from '@/components/layout/container';
import Navbar from '@/components/layout/navigator/navbar';
import Wrap from '@/components/layout/wrap';
import { useSelectedLayoutSegment } from 'next/navigation';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* 네비게이션 서버 컴포넌트 */}
      <Navbar />
      <Container>
        <Wrap>{children}</Wrap>
      </Container>
    </>
  );
}
