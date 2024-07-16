'use client';

import SelectBox from '@/components/select/SelectBox';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Heart, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface Props {
  params: {
    id: string;
  };
}

export default function Page({ params }: Props) {
  const router = useRouter();

  const [date, setDate] = useState('');
  const [tableCnt, setTableCnt] = useState('');
  const [selectedOptions, setSelectedOptions] = useState<{
    key: string;
    values: {
      date: string;
      tableCnt: string;
    };
  }>();

  const handleMovePage = () => {
    router.push(`/market/join/${params.id}?date=${date}&tableCnt=${tableCnt}`);
  };

  return (
    <>
      {/* 1) 이미지, 옵션 선택 */}
      <div className="flex gap-2">
        <div className="img w-6/12 h-[280px] boder">
          <Skeleton className="w-full h-full rounded-xl flex justify-center items-center">
            img
          </Skeleton>
        </div>
        <div className="w-6/12">
          <div className="flex justify-between">
            <h2>동탄 레이크꼬모 송동길</h2>
            <Button variant={'outline'}>
              <Heart className="mr-2 h-4 w-4" />
              관심 등록
            </Button>
          </div>
          <ul className="list-disc [&>li]:mt-1 mt-4 ml-6">
            <li>
              <div className="">동탄 레이크꼬모 송동길 1F</div>
            </li>
            <li>
              <div className="">
                2024. 05. 07 (화) - 05. 08 (수) 10:00 ~ 18:00 (2일)
              </div>
            </li>
            <li>
              <div className="">모집기간</div>
            </li>
            <li>
              <div className="">모집규모</div>
            </li>
            <li>
              <div className="">비용</div>
            </li>
          </ul>
          <div className="flex flex-col gap-2 mt-2">
            <SelectBox
              onValueChange={(value) => {
                setDate(value);
              }}
              defaultText="날짜 선택"
              options={[
                {
                  key: '2024.07.01',
                  label: '2024.07.01',
                },
                {
                  key: '2024.07.02',
                  label: '2024.07.02',
                },
                {
                  key: '2024.07.03',
                  label: '2024.07.03',
                },
                {
                  key: '2024.07.04',
                  label: '2024.07.04',
                },
              ]}
            />
            <SelectBox
              onValueChange={(value) => {
                setTableCnt(value);
              }}
              defaultText="매대 개수 선택"
              options={[
                {
                  key: '1',
                  label: '1개',
                },
                {
                  key: '2',
                  label: '2개',
                },
                {
                  key: '3',
                  label: '3개',
                },
                {
                  key: '4',
                  label: '4개',
                },
              ]}
            />
            <div className="border">
              <div className="flex justify-between items-center p-2 bg-slate-200">
                <div className="">
                  2024년 5월 7일 (화) 10:00 ~ 18:00 | 매대 1개
                </div>
                <div className="flex items-center">
                  <div className="mr-1.5">50,000원</div>
                  <Button
                    variant={'ghost'}
                    className=""
                    onClick={() => alert('삭제')}
                  >
                    <X className="" />
                  </Button>
                </div>
              </div>
            </div>
            <Button className="w-full" onClick={() => handleMovePage()}>
              참가 신청하기
            </Button>
            {/* <Button asChild>
              <Link href="/market/join/1">참가 신청하기</Link>
            </Button> */}
          </div>
        </div>
      </div>
      {/* 2) 텍스트  */}
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          <div className="flex">
            <div className="w-2/12">마켓명</div>
            <div className="">동탄 레이크꼬모 송동실</div>
          </div>
        </li>
        <li>
          <div className="flex">
            <div className="w-2/12">설명</div>
            <div className="">설명</div>
          </div>
        </li>
        <li>
          <div className="flex">
            <div className="w-2/12">주최/주관사</div>
            <div className="">소녀마켓</div>
          </div>
        </li>
        <li>
          <div className="flex">
            <div className="w-2/12">사업자명</div>
            <div className="">(주)1961 하우스</div>
          </div>
        </li>
        <li>
          <div className="flex">
            <div className="w-2/12">사업자번호</div>
            <div className="">678-**-****</div>
          </div>
        </li>
        <li>
          <div className="flex">
            <div className="w-2/12">장소</div>
            <div className="">동탄 레이크꼬모 송동실</div>
          </div>
        </li>
        <li>
          <div className="flex">
            <div className="w-2/12">날짜</div>
            <div className="">2월16일 ~ 18일 송동길 1F (3일)</div>
          </div>
        </li>
        <li>
          <div className="flex">
            <div className="w-2/12">모집기간</div>
            <div className="">마감시까지</div>
          </div>
        </li>
        <li>
          <div className="flex">
            <div className="w-2/12">모집규모</div>
            <div className="">00팀</div>
          </div>
        </li>
        <li>
          <div className="flex">
            <div className="w-2/12">모집조건</div>
            <div className="">카테고리 문의주세요 (마감체크)</div>
          </div>
        </li>
        <li>
          <div className="flex">
            <div className="w-2/12">참가(입점)비용</div>
            <div className="">1일 1테이블 기준 10만원 (부가세별도) </div>
          </div>
        </li>
      </ul>
    </>
  );
}
