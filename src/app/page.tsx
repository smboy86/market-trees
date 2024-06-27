'use client';

import Calendar from '@/components/calrendar/calendar';
import { Container } from '@/components/layout/container';
import Wrap from '@/components/layout/wrap';
import KakaoMap from '@/components/map/kakaoMap';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

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

        <div className="w-full text-center mb-10">
          <div className="flex justify-between py-1">
            <div className="left flex gap-2">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="지역 전체" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>지역을 선택하세요.</SelectLabel>
                    <SelectItem value="r1">경기 북부</SelectItem>
                    <SelectItem value="r2">경기 남부</SelectItem>
                    <SelectItem value="r3">서울 강북</SelectItem>
                    <SelectItem value="r4">서울 강남</SelectItem>
                    <SelectItem value="r5">전라남도</SelectItem>
                    <SelectItem value="etc">...</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="마켓 유형" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>마켓 유형을 선택하세요.</SelectLabel>
                    <SelectItem value="m1">아파트</SelectItem>
                    <SelectItem value="m2">주상복합 아파트</SelectItem>
                    <SelectItem value="m3">복합 쇼핑몰</SelectItem>
                    <SelectItem value="m4">백화점</SelectItem>
                    <SelectItem value="m5">축제</SelectItem>
                    <SelectItem value="etc">...</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="right flex gap-2">
              <Button onClick={() => alert('마켓 리뷰 등록 화면으로 이동')}>
                마켓 리뷰 등록
              </Button>
              <Button
                onClick={() => alert('(주최자)마켓 일정 등록 화면으로 이동')}
              >
                마켓 일정 등록
              </Button>
            </div>
          </div>
          <Calendar />
        </div>
        <div className="w-full border text-center">
          <KakaoMap markerPositions={[]} size={[100, 580]} />
        </div>
      </Wrap>
    </Container>
  );
}
