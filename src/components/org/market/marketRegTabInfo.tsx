'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { ko } from 'date-fns/locale';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { CalendarIcon, TimerIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { useState } from 'react';
import { format } from 'date-fns';
import { Label } from '@/components/ui/label';

const FormSchema = z.object({
  name: z.string().min(4, {
    message: '최소 4글자 이상 입력해주세요.',
  }),
  description: z.string().min(4, {
    message: '최소 4글자 이상 입력해주세요.',
  }),
  organizer: z.string().min(4, {
    message: '최소 4글자 이상 입력해주세요.',
  }),
  place: z.string().min(4, {
    message: '최소 4글자 이상 입력해주세요.',
  }),
  placeDetail: z.string().optional(),
  startDate: z.string({
    message: '입력 필수',
  }),
  endDate: z.string({
    message: '입력 필수',
  }),
  startTime: z.string({
    message: '입력 필수',
  }),
  endTime: z.string({
    message: '입력 필수',
  }),
  telA: z.string({
    message: '입력 필수',
  }),
  telB: z.string({
    message: '입력 필수',
  }),
  telC: z.string({
    message: '입력 필수',
  }),
  image: z.string({
    message: '사진 업로드가 필요합니다.',
  }),
});

export default function MarketRegTabInfo() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      description: '',
      organizer: '',
      place: '',
      placeDetail: '',
      startDate: '',
      endDate: '',
      startTime: '',
      endTime: '',
    },
  });

  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(new Date());

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    alert('마켓정보 저장 ::: ' + JSON.stringify(data, null, 2));
    // console.log(data);
    // toast({
    //   title: 'You submitted the following values:',
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>마켓명 *</FormLabel>
              <FormControl>
                <Input placeholder="마켓명을 입력해주세요." {...field} />
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
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>설명 *</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="마켓 주제 및 설명을 입력해주세요."
                  maxLength={100}
                  {...field}
                />
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
              <FormLabel>주최/주관사 *</FormLabel>
              <FormControl>
                <Input placeholder="주최/주관사를 입력해주세요." {...field} />
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
              <FormLabel>장소 *</FormLabel>
              <FormControl>
                {/* <Input placeholder="주최/주관사를 입력해주세요." {...field} /> */}
                <div className="flex flex-col">
                  <div className="flex space-x-4">
                    <Button onClick={() => alert('주소 찾기 API')}>
                      주소 찾기
                    </Button>
                    <Input
                      placeholder="주소 찾기를 해주세요."
                      // disabled
                      {...field}
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
          name="placeDetail"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="상세주소를 입력해주세요." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* 날짜 */}
        <div className="flex items-end">
          <FormField
            control={form.control}
            name="startDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>날짜 *</FormLabel>
                <FormControl>
                  <Popover>
                    <PopoverTrigger asChild>
                      <div className="flex gap-2">
                        <Input placeholder="YYYY. MM. DD" {...field} />
                        <Button type="button" variant={'outline'}>
                          <CalendarIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        locale={ko}
                        mode="single"
                        selected={startDate}
                        onSelect={(date) => {
                          if (date !== undefined) {
                            field.onChange(format(date, 'PPP', { locale: ko }));
                          }
                        }}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="h-8 px-8">~</div>
          <FormField
            control={form.control}
            name="endDate"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Popover>
                    <PopoverTrigger asChild>
                      <div className="flex gap-2">
                        <Input placeholder="YYYY. MM. DD" {...field} />
                        <Button type="button" variant={'outline'}>
                          <CalendarIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        locale={ko}
                        mode="single"
                        selected={startDate}
                        onSelect={(date) => {
                          if (date !== undefined) {
                            field.onChange(format(date, 'PPP', { locale: ko }));
                          }
                        }}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* 시간 */}
        <div className="flex items-end">
          <FormField
            control={form.control}
            name="startTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>시간 *</FormLabel>
                <FormControl>
                  <Popover>
                    <PopoverTrigger asChild>
                      <div className="flex gap-2">
                        <Input placeholder="YYYY. MM. DD" {...field} />
                        <Button type="button" variant={'outline'}>
                          <TimerIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        locale={ko}
                        mode="single"
                        selected={startDate}
                        onSelect={(date) => {
                          if (date !== undefined) {
                            field.onChange(format(date, 'PPP', { locale: ko }));
                          }
                        }}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="h-8 px-8">~</div>
          <FormField
            control={form.control}
            name="endTime"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Popover>
                    <PopoverTrigger asChild>
                      <div className="flex gap-2">
                        <Input placeholder="YYYY. MM. DD" {...field} />
                        <Button type="button" variant={'outline'}>
                          <TimerIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        locale={ko}
                        mode="single"
                        selected={startDate}
                        onSelect={(date) => {
                          if (date !== undefined) {
                            field.onChange(format(date, 'PPP', { locale: ko }));
                          }
                        }}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex items-end">
          <FormField
            control={form.control}
            name="telA"
            render={({ field }) => (
              <FormItem>
                <FormLabel>담당자 연락처 *</FormLabel>
                <FormControl>
                  <Input placeholder="" maxLength={3} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="h-8 px-2">-</div>
          <FormField
            control={form.control}
            name="telB"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="" maxLength={4} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="h-8 px-2">-</div>
          <FormField
            control={form.control}
            name="telC"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="" maxLength={4} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>사진 *</FormLabel>
              <FormControl>
                <>
                  <Input type="file" {...field} />
                </>
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
