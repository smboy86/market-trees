import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { Send, Users } from 'lucide-react';

interface Props {
  type: 'progress' | 'end' | 'cancel';
}

export default function MargetListItem(props: Props) {
  return (
    <li
      className={cn(
        'lex flex-col gap-2 p-4 border rounded-md ',
        props.type === 'cancel' && 'line-through',
      )}
    >
      <div className="">마켓명</div>
      <div className="">
        2024. 05. 07 (화) ~ 05. 08 (수) 10:00 ~ 18:00 (2일)
      </div>
      <div className="">동탄 레이크꼬모 송동길 1F</div>
      <div className="flex gap-2">
        <Users color="#4622c9" />
        <h3 className="">모집현황</h3>
        <span>10/20</span>
      </div>
      <div className="flex gap-2">
        <Send color="#4622c9" />
        <h3 className="">응답대기</h3>
        <span>3</span>
      </div>
      {props.type === 'progress' && (
        <div className="flex space-x-4 pt-4">
          <Button>모집관리</Button>
          <Button variant={'secondary'}>정보변경</Button>
          <Button variant={'outline'}>취소</Button>
        </div>
      )}
    </li>
  );
}
