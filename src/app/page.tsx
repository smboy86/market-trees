'use client';

import Calendar from '@/components/calrendar/calendar';
import { Container } from '@/components/layout/container';
import Wrap from '@/components/layout/wrap';
import KakaoMap from '@/components/map/kakaoMap';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function App() {
  return (
    <Container>
      <Wrap>
        <div className="w-full mb-10">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-center">
            마켓 리뷰
          </h4>
          <Carousel className="w-full mt-1">
            <CarouselContent className="-ml-1">
              {Array.from({ length: 10 }).map((_, index) => (
                <CarouselItem key={index} className="pl-1 basis-1/5">
                  <div className="p-1">
                    <Card
                      onClick={() => alert(`마켓 ${index + 1}`)}
                      className="cursor-pointer"
                    >
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-2xl font-semibold">
                          Img {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="w-full border text-center mb-10">
          <Calendar />
        </div>
        <div className="w-full border text-center">
          <KakaoMap markerPositions={[]} size={[100, 580]} />
        </div>
      </Wrap>
    </Container>
  );
}
