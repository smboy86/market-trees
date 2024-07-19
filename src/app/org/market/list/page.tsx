import Header from '@/components/layout/Header';
import MarketManageTabs from '@/components/org/list/marketManageTabs';

export default function Page() {
  return (
    <div className="">
      <Header title="마켓 관리" />
      <MarketManageTabs />
    </div>
  );
}
