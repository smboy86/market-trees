'use client';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { Fragment, useEffect, useState } from 'react';
// import { Dialog, Transition } from '@headlessui/react'
// import { CheckIcon, ExclamationTriangleIcon } from '@heroicons/react/20/solid'
import { EventSourceInput } from '@fullcalendar/core/index.js';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Button } from '../ui/button';

interface Event {
  title: string;
  start: Date | string;
  allDay: boolean;
  id: number;
}

export default function Calendar() {
  const [allEvents, setAllEvents] = useState<Event[]>([]);

  //   const [newEvent, setNewEvent] = useState<Event>({
  //     title: '',
  //     start: '',
  //     allDay: false,
  //     id: 0,
  //   });

  //   function handleDateClick(arg: { date: Date; allDay: boolean }) {
  //     setNewEvent({
  //       ...newEvent,
  //       start: arg.date,
  //       allDay: arg.allDay,
  //       id: new Date().getTime(),
  //     });
  //     setShowModal(true);
  //   }

  return (
    <div className="">
      <div className="flex justify-between py-1">
        <div className="left flex gap-2">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="지역 전체" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>지역을 선택하세요.</SelectLabel>
                <SelectItem value="r1">경기 북부</SelectItem>
                <SelectItem value="r2">경기 남부</SelectItem>
                <SelectItem value="r3">서울 강북</SelectItem>
                <SelectItem value="r4">서울 강남</SelectItem>
                <SelectItem value="r5">전라남도</SelectItem>
                <SelectItem value="etc">...</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="마켓 유형" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>마켓 유형을 선택하세요.</SelectLabel>
                <SelectItem value="m1">아파트</SelectItem>
                <SelectItem value="m2">주상복합 아파트</SelectItem>
                <SelectItem value="m3">복합 쇼핑몰</SelectItem>
                <SelectItem value="m4">백화점</SelectItem>
                <SelectItem value="m5">축제</SelectItem>
                <SelectItem value="etc">...</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="right flex gap-2">
          <Button onClick={() => alert('마켓 리뷰 등록 화면으로 이동')}>
            마켓 리뷰 등록
          </Button>
          <Button onClick={() => alert('(주최자)마켓 일정 등록 화면으로 이동')}>
            마켓 일정 등록
          </Button>
        </div>
      </div>
      <FullCalendar
        locale={'ko'}
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,',
        }}
        events={allEvents as EventSourceInput}
        nowIndicator={true}
        // editable={true}
        // droppable={true}
        selectable={true}
        selectMirror={true}
        // dateClick={handleDateClick}
        // drop={(data) => addEvent(data)}
        eventClick={(data) => () => alert('click event')}
      />
    </div>
  );
}
