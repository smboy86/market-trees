import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function MarketRegTabs() {
  return (
    <Tabs defaultValue="t1" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="t1">Account</TabsTrigger>
        <TabsTrigger value="t2">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="t1">
        <div className="">11111</div>
      </TabsContent>
      <TabsContent value="t2">
        <div className="">222222</div>
      </TabsContent>
    </Tabs>
  );
}
