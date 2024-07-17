import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MarketRegTabInfo from './marketRegTabInfo';
import MarketRegTabRecruit from './marketRegTabRecruit';
import MarketRegTabPay from './marketRegTabPay';

export default function MarketRegTabs() {
  return (
    <Tabs defaultValue="t1" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="t1">마켓정보</TabsTrigger>
        <TabsTrigger value="t2">모집정보</TabsTrigger>
        <TabsTrigger value="t3">결제</TabsTrigger>
      </TabsList>
      <TabsContent value="t1">
        <MarketRegTabInfo />
      </TabsContent>
      <TabsContent value="t2">
        <MarketRegTabRecruit />
      </TabsContent>
      <TabsContent value="t3">
        <MarketRegTabPay />
      </TabsContent>
    </Tabs>
  );
}
