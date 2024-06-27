import { Container } from '@/components/layout/container';
import Navbar from '@/components/layout/navigator/navbar';
import NavBarLeft from '@/components/layout/orgNavigator/navBarLeft';
import Wrap from '@/components/layout/wrap';

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
        <Wrap>
          <div className="flex w-full gap-4 ">
            <div className="left flex flex-col w-[160px]">
              <NavBarLeft />
            </div>
            <div className="right">{children}</div>
          </div>
        </Wrap>
      </Container>
    </>
  );
}
