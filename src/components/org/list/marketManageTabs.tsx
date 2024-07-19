'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MargetListItem from './margetListItem';
import SelectBox from '@/components/select/SelectBox';

export default function MarketManageTabs() {
  return (
    <Tabs defaultValue="t1" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="t1">진행</TabsTrigger>
        <TabsTrigger value="t2">종료</TabsTrigger>
        <TabsTrigger value="t3">취소</TabsTrigger>
      </TabsList>
      <TabsContent value="t1">
        {/* 1) 검색 툴바 */}
        <div className="">
          <div className="flex justify-between">
            <div className=" w-1/3 flex space-x-2">
              <SelectBox
                onValueChange={(value) => {
                  console.log('선택 박스 :: ', value);
                }}
                defaultText="날짜"
                options={[
                  {
                    key: '1',
                    label: '최근 1년',
                  },
                  {
                    key: '2',
                    label: '최근 2년',
                  },
                  {
                    key: '3',
                    label: '최근 3년',
                  },
                  {
                    key: '4',
                    label: '최근 4년',
                  },
                ]}
              />
              <SelectBox
                onValueChange={(value) => {
                  console.log('선택 박스 :: ', value);
                }}
                defaultText="지역"
                options={[
                  {
                    key: '1',
                    label: '지역 전체',
                  },
                  {
                    key: '2',
                    label: '서울특별시',
                  },
                  {
                    key: '3',
                    label: '경기도',
                  },
                  {
                    key: '4',
                    label: 'etc...',
                  },
                ]}
              />
            </div>
            <div className="w-">
              <SelectBox
                onValueChange={(value) => {
                  console.log('선택 박스 :: ', value);
                }}
                defaultText="정렬"
                options={[
                  {
                    key: '1',
                    label: '날짜순',
                  },
                  {
                    key: '2',
                    label: '제목순',
                  },
                ]}
              />
            </div>
          </div>
        </div>
        {/* 2) 리스트 */}
        <ul className="p-1 mt-4 space-y-3">
          <MargetListItem type="progress" />
          <MargetListItem type="progress" />
          <MargetListItem type="progress" />
        </ul>
      </TabsContent>
      <TabsContent value="t2">
        {/* 1) 검색 툴바 */}
        <div className="">
          <div className="flex justify-between">
            <div className=" w-1/3 flex space-x-2">
              <SelectBox
                onValueChange={(value) => {
                  console.log('선택 박스 :: ', value);
                }}
                defaultText="날짜"
                options={[
                  {
                    key: '1',
                    label: '최근 1년',
                  },
                  {
                    key: '2',
                    label: '최근 2년',
                  },
                  {
                    key: '3',
                    label: '최근 3년',
                  },
                  {
                    key: '4',
                    label: '최근 4년',
                  },
                ]}
              />
              <SelectBox
                onValueChange={(value) => {
                  console.log('선택 박스 :: ', value);
                }}
                defaultText="지역"
                options={[
                  {
                    key: '1',
                    label: '지역 전체',
                  },
                  {
                    key: '2',
                    label: '서울특별시',
                  },
                  {
                    key: '3',
                    label: '경기도',
                  },
                  {
                    key: '4',
                    label: 'etc...',
                  },
                ]}
              />
            </div>
            <div className="w-">
              <SelectBox
                onValueChange={(value) => {
                  console.log('선택 박스 :: ', value);
                }}
                defaultText="정렬"
                options={[
                  {
                    key: '1',
                    label: '날짜순',
                  },
                  {
                    key: '2',
                    label: '제목순',
                  },
                ]}
              />
            </div>
          </div>
        </div>
        {/* 2) 리스트 */}
        <ul className="p-1 mt-4 space-y-3">
          <MargetListItem type="end" />
          <MargetListItem type="end" />
        </ul>
      </TabsContent>
      <TabsContent value="t3">
        {/* 1) 검색 툴바 */}
        <div className="">
          <div className="flex justify-between">
            <div className=" w-1/3 flex space-x-2">
              <SelectBox
                onValueChange={(value) => {
                  console.log('선택 박스 :: ', value);
                }}
                defaultText="날짜"
                options={[
                  {
                    key: '1',
                    label: '최근 1년',
                  },
                  {
                    key: '2',
                    label: '최근 2년',
                  },
                  {
                    key: '3',
                    label: '최근 3년',
                  },
                  {
                    key: '4',
                    label: '최근 4년',
                  },
                ]}
              />
              <SelectBox
                onValueChange={(value) => {
                  console.log('선택 박스 :: ', value);
                }}
                defaultText="지역"
                options={[
                  {
                    key: '1',
                    label: '지역 전체',
                  },
                  {
                    key: '2',
                    label: '서울특별시',
                  },
                  {
                    key: '3',
                    label: '경기도',
                  },
                  {
                    key: '4',
                    label: 'etc...',
                  },
                ]}
              />
            </div>
            <div className="w-">
              <SelectBox
                onValueChange={(value) => {
                  console.log('선택 박스 :: ', value);
                }}
                defaultText="정렬"
                options={[
                  {
                    key: '1',
                    label: '날짜순',
                  },
                  {
                    key: '2',
                    label: '제목순',
                  },
                ]}
              />
            </div>
          </div>
        </div>
        {/* 2) 리스트 */}
        <ul className="p-1 mt-4 space-y-3">
          <MargetListItem type="cancel" />
        </ul>
      </TabsContent>
    </Tabs>
  );
}
