import Calendar from '@/components/calrendar/calendar';
import { Container } from '@/components/layout/container';
import Navbar from '@/components/layout/navigator/navbar';
import Wrap from '@/components/layout/wrap';
import KakaoMap from '@/components/map/kakaoMap';
import MainSwiper from '@/components/swiper/mainSwiper';
export default function App() {
  return (
    <>
      {/* 네비게이션 서버 컴포넌트 */}
      <Navbar />
      <Container>
        <Wrap>
          <div className="w-full mb-10">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-center">
              마켓 리뷰
            </h4>
            <MainSwiper />
          </div>

          <div className="w-full text-center mb-10">
            <Calendar />
          </div>
          <div className="w-full border text-center">
            <KakaoMap markerPositions={[]} size={[100, 580]} />
          </div>
        </Wrap>
      </Container>
    </>
  );
}
