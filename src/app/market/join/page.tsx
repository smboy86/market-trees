'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Skeleton } from '@/components/ui/skeleton';
import { useRouter, useSearchParams } from 'next/navigation';

interface Props {
  params: {
    id: string;
  };
}

export default function Page(props: Props) {
  // console.log('aaaa  ', props.params.id);
  const router = useRouter();
  const searchParams = useSearchParams();
  const paramDate = searchParams.get('date'); // 선택된 날짜
  const paramTableCnt = searchParams.get('tableCnt'); // 선택된 매대 갯수

  return (
    <>
      <div className="w-full text-center">
        <h1 className="">마켓 참가 신청하기</h1>
      </div>
      <div className="w-full flex gap-4 pt-4">
        <div className="left w-1/2 flex flex-col">
          <Skeleton className="w-full h-[280px] rounded-xl flex justify-center items-center">
            img
          </Skeleton>
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
            <div className="flex justify-between items-center p-2 bg-slate-200">
              <div className="">
                2024년 5월 7일 (화) 10:00 ~ 18:00 | 매대 1개
              </div>
              <div className="flex items-center">
                <div className="mr-1.5">50,000원</div>
              </div>
            </div>
            <div className="flex justify-between items-center p-2 bg-slate-200">
              <div className="">
                2024년 5월 8일 (수) 10:00 ~ 18:00 | 매대 1개
              </div>
              <div className="flex items-center">
                <div className="mr-1.5">100,000원</div>
              </div>
            </div>
            <div className="px-2 py-4 pr-10 text-right bg-slate-500">
              총 결제금액 150,000원
            </div>
          </div>
        </div>
        <div className="right w-1/2 flex flex-col gap-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="input1">상호명</Label>
            <Input
              type="input1"
              id="input1"
              placeholder="ex) 상호"
              value={'$나의 상호$'}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="input1">연락처</Label>
            <div className="flex items-center gap-3">
              <Input className="w-16" type="tel1" id="tel1" value={'010'} />
              -
              <Input className="w-16" type="tel2" id="tel2" value={'1234'} />
              -
              <Input className="w-16" type="tel3" id="tel3" value={'5678'} />
            </div>
          </div>
          <div className="gap-1.5">
            <Label className="font-bold">총 결제금액</Label>
            <div className="">150,000원</div>
          </div>
          <div className="border rounded-md bg-slate-200 p-10">
            결제정보 BOX - (개발필요)
          </div>
          <div className="">
            <Button
              className="w-full"
              onClick={() => {
                // alert('참가 신청을 위한 필수 사항에 모두 동의해주세요.')
                alert('참가 신청이 완료되었습니다.');
                router.replace('/');
              }}
            >
              결제하기
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
