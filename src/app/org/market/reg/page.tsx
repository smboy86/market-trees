'use client';
import Header from '@/components/layout/Header';
import MarketRegTabs from '@/components/org/market/marketRegTabs';

export default function Page() {
  return (
    <div className="">
      <Header title="마켓 등록하기" />
      <MarketRegTabs />
    </div>
  );
}
