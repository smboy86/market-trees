import SelectBox from '@/components/select/SelectBox';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const FormSchema = z.object({
  size: z.string().min(4, {
    message: '최소 4글자 이상 입력해주세요.',
  }),
  text: z.string().min(4, {
    message: '최소 4글자 이상 입력해주세요.',
  }),
  organizer: z.string(),
  place: z.string(),
  radio: z.string({
    message: '선택 필수',
  }),
});

export default function MarketRegTabRecruit() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      size: '',
      text: '',
      organizer: '',
      place: '',
    },
  });

  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(new Date());

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    alert('모집정보 저장 ::: ' + JSON.stringify(data, null, 2));
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
        <FormField
          control={form.control}
          name="size"
          render={({ field }) => (
            <FormItem>
              <FormLabel>모집규모 *</FormLabel>
              <FormControl>
                <div className="flex items-center gap-4">
                  <Input className="w-24" placeholder="숫자 입력" {...field} />
                  <div>팀</div>
                </div>
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem>
              <FormLabel>모집조건 *</FormLabel>
              <FormControl>
                <Input placeholder="모집조건을 입력해주세요" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="organizer"
          render={({ field }) => (
            <FormItem>
              <FormLabel>제외품목 *</FormLabel>
              <FormControl>
                <Input placeholder="제외품목을 입력해주세요" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="organizer"
          render={({ field }) => (
            <FormItem>
              <FormLabel>참가비용 *</FormLabel>
              <FormControl>
                <div className="flex items-center gap-4">
                  <span>1일</span>
                  <Input
                    className="w-48"
                    placeholder="참가비용을 입력해주세요"
                    {...field}
                  />
                  <span>원</span>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="place"
          render={({ field }) => (
            <FormItem>
              <FormLabel>참가비용 결제수단 *</FormLabel>
              <FormControl>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="c1"
                      onCheckedChange={(checked) => {
                        //TODO - 멀티 체크박스 이벤트 처리
                        field.onChange('c1');
                      }}
                    />
                    <label
                      htmlFor={'c1'}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      계좌이체
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id={'c2'}
                      onCheckedChange={(checked) => {
                        //TODO - 멀티 체크박스 이벤트 처리
                        field.onChange('c2');
                      }}
                    />
                    <label
                      htmlFor={'c2'}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      신용카드
                    </label>
                  </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem>
              <FormLabel>최대 신청가능 매대 수 *</FormLabel>
              <FormControl>
                <div className="flex items-center gap-4">
                  <span>1일</span>
                  <div className="w-28">
                    <SelectBox
                      onValueChange={(value) => {
                        alert('선택 ::: ' + value);
                      }}
                      defaultText="매대 선택"
                      options={[
                        {
                          key: '1',
                          label: '1',
                        },
                        {
                          key: '2',
                          label: '2',
                        },
                        {
                          key: '3',
                          label: '3',
                        },
                        {
                          key: '4',
                          label: '4',
                        },
                      ]}
                    />
                  </div>
                  <span>개</span>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem>
              <FormLabel>행사규정 *</FormLabel>
              <FormControl>
                <div className="flex items-center gap-4">
                  <div className="w-1/3">
                    <SelectBox
                      onValueChange={(value) => {
                        alert('선택 ::: ' + value);
                      }}
                      defaultText="규정 선택"
                      options={[
                        {
                          key: '1',
                          label: '주최측 취소',
                        },
                        {
                          key: '2',
                          label: '천재지변',
                        },
                      ]}
                    />
                  </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="radio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>주차지원여부 *</FormLabel>
              <FormControl>
                <div className="">
                  <RadioGroup
                    defaultValue=""
                    className="flex space-x-3"
                    onValueChange={(value) => {
                      field.onChange(value);
                    }}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="o1" id="o1" />
                      <Label htmlFor="o1">지원</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="o2" id="o2" />
                      <Label htmlFor="o2">미지원</Label>
                    </div>
                  </RadioGroup>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="organizer"
          render={({ field }) => (
            <FormItem>
              <FormLabel>현장지원 *</FormLabel>
              <FormControl>
                <Input
                  placeholder="현장지원 분야를 입력해주세요. (ex. 테이블)"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="radio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>판매아이템 중복여부 *</FormLabel>
              <FormControl>
                <div className="">
                  <RadioGroup
                    defaultValue=""
                    className="flex space-x-3"
                    onValueChange={(value) => {
                      field.onChange(value);
                    }}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="o1" id="o1" />
                      <Label htmlFor="o1">중복 없음</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="o2" id="o2" />
                      <Label htmlFor="o2">중복 가능</Label>
                    </div>
                    <div className="w-60">
                      <SelectBox
                        defaultText="카테고리별 중복 개수"
                        onValueChange={(value) => {
                          alert('선택 ::: ' + value);
                        }}
                        options={[
                          {
                            key: '1',
                            label: '1',
                          },
                          {
                            key: '2',
                            label: '2',
                          },
                          {
                            key: '3',
                            label: '3',
                          },
                          {
                            key: '4',
                            label: '4',
                          },
                        ]}
                      />
                    </div>
                  </RadioGroup>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="organizer"
          render={({ field }) => (
            <FormItem>
              <FormLabel>이벤트 *</FormLabel>
              <FormControl>
                <Input placeholder="이벤트가 있으면 등록해주세요" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* 99) 제출 */}
        <div className="text-center space-x-6">
          <Button
            type="button"
            variant={'outline'}
            onClick={() => alert('취소')}
          >
            취소
          </Button>
          <Button type="submit">다음</Button>
        </div>
      </form>
    </Form>
  );
}
