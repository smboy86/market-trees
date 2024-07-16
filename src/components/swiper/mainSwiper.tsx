'use client';

import { useRouter } from 'next/navigation';
import { Card, CardContent } from '../ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';

export default function MainSwiper() {
  const router = useRouter();

  const handleMovePage = (id: string) => {
    router.push(`/market/${id}`);
  };

  return (
    <Carousel className="w-full mt-1">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 basis-1/5">
            <div className="p-1">
              <Card
                onClick={() => handleMovePage((index + 1).toString())}
                className="cursor-pointer"
              >
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">
                    Img {index + 1}
                  </span>
                </CardContent>
              </Card>
              <p className="pt-1.5 text-overflow">
                마켓 이름 {index + 1} <br /> 최대 2줄 -- 최대 2줄 -- 최대 2줄 --
                최대 2줄 -- 최대 2줄 -- 최대 2줄 --
              </p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
