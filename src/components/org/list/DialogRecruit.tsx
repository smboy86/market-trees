import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function DialogRecruit() {
  const handleCancel = () => {
    alert('취소 되었습니다.');
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="default">모집관리</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="min-w-[90%]">
        <AlertDialogHeader>
          <AlertDialogTitle>모집관리</AlertDialogTitle>
          <div className="flex flex-col">
            <div className="font-bold">전체현황</div>
            <Table>
              <TableHeader>
                {/* 1 */}
                <TableRow>
                  <TableHead>목표 모집규모</TableHead>
                  <TableHead>전체 참여신청</TableHead>
                  <TableHead>응답대기</TableHead>
                  <TableHead>참여확정</TableHead>
                  <TableHead>참여불가</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>300</TableCell>
                  <TableCell>154</TableCell>
                  <TableCell>3</TableCell>
                  <TableCell>10</TableCell>
                  <TableCell>2</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <div className="w-full border-b border-slate-300 my-4"></div>
            <div className="font-bold">셀러 관리</div>
            <Tabs defaultValue="t1" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="t1">마켓정보</TabsTrigger>
                <TabsTrigger value="t2">모집정보</TabsTrigger>
                <TabsTrigger value="t3">결제</TabsTrigger>
              </TabsList>
              <TabsContent value="t1">
                <Table>
                  <TableHeader>
                    {/* 1 */}
                    <TableRow>
                      <TableHead className="w-[120px]">신청일시</TableHead>
                      <TableHead>업체명</TableHead>
                      <TableHead>품목</TableHead>
                      <TableHead>품목 상세</TableHead>
                      <TableHead>신청 매대 수</TableHead>
                      <TableHead>결제금액</TableHead>
                      <TableHead>결제수단</TableHead>
                      <TableHead>사진</TableHead>
                      <TableHead>상태</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>2024. 05. 03 13:40:33</TableCell>
                      <TableCell>쪼물쪼물</TableCell>
                      <TableCell>F/B</TableCell>
                      <TableCell>솜사탕</TableCell>
                      <TableCell>1</TableCell>
                      <TableCell>50,000</TableCell>
                      <TableCell>카드</TableCell>
                      <TableCell>
                        <Button variant={'ghost'}>보기</Button>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant={'default'}>수락</Button>
                          <Button variant={'secondary'}>거절</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    {/* 2 */}
                    <TableRow>
                      <TableCell>2024. 05. 03 13:40:33</TableCell>
                      <TableCell>구워먹는 치즈</TableCell>
                      <TableCell>F/B</TableCell>
                      <TableCell>치즈</TableCell>
                      <TableCell>2</TableCell>
                      <TableCell>100,000</TableCell>
                      <TableCell>계좌이체</TableCell>
                      <TableCell>
                        <Button variant={'ghost'}>보기</Button>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant={'default'}>수락</Button>
                          <Button variant={'secondary'}>거절</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TabsContent>
              <TabsContent value="t2">
                <div className="">참여확정</div>
              </TabsContent>
              <TabsContent value="t3">
                <div className="">참여불가</div>
              </TabsContent>
            </Tabs>
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>취소</AlertDialogCancel>
          <AlertDialogAction onClick={handleCancel}>확인</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
