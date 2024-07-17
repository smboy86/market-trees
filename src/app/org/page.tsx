'use client';

import Calendar from '@/components/calrendar/calendar';
import { Button } from '@/components/ui/button';

export default function Page() {
  return (
    <div className="flex flex-col">
      {/* 1) 대시보드 */}
      <div className="flex justify-between border p-6 gap-6">
        <div className="w-6/12 min-h-[120px] flex flex-col justify-center items-center py-10 text-white bg-slate-800">
          <div className="text-lg pb-4">진행 마켓</div>
          <Button variant={'ghost'} onClick={() => alert('진행 마켓 클릭')}>
            <div className="text-4xl underline underline-offset-4">0</div>
          </Button>
        </div>
        <div className="w-3/12 min-h-[120px] flex flex-col justify-center items-center py-10 text-black border">
          <div className="text-lg pb-4">완료한 마켓</div>
          <Button variant={'ghost'} onClick={() => alert('완료한 마켓 클릭')}>
            <div className="text-4xl underline underline-offset-4">3</div>
          </Button>
        </div>
        <div className="w-3/12 min-h-[120px] flex flex-col justify-center items-center py-10 text-gray-500 bg-slate-100">
          <div className="text-lg pb-4">취소한 마켓</div>
          <Button variant={'ghost'} onClick={() => alert('취소한 마켓 클릭')}>
            <div className="text-4xl underline underline-offset-4">2</div>
          </Button>
        </div>
      </div>
      {/* 2) 캘린더 */}
      <div className="mt-10">
        <Calendar display="org" />
      </div>
    </div>
  );
}
