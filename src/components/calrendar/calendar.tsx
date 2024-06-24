'use client';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { Fragment, useEffect, useState } from 'react';
// import { Dialog, Transition } from '@headlessui/react'
// import { CheckIcon, ExclamationTriangleIcon } from '@heroicons/react/20/solid'
import { EventSourceInput } from '@fullcalendar/core/index.js';

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
