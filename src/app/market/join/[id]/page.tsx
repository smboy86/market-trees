'use client';
import { useSearchParams } from 'next/navigation';

interface Props {
  params: {
    id: string;
  };
}

export default function Page(props: Props) {
  // console.log('aaaa  ', props.params.id);
  const searchParams = useSearchParams();
  const paramDate = searchParams.get('date');
  const paramTableCnt = searchParams.get('tableCnt');

  return (
    <>
      <div className="">참가 신청</div>
      <div className="">{paramDate}</div>
      <div className="">{paramTableCnt}</div>
    </>
  );
}
