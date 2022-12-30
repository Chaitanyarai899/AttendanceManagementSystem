import React, { useState } from 'react';
import Calendar from "react-calendar"
import Navbar from '../component/Navbar'
import "./../style.css"

const time = [
  {
    id: 1,
    name: 'Leslie Alexander',

    startDatetime: '2022-09-11T13:00',
    endDatetime: '2022-09-11T14:30',
  },
  {
    id: 2,
    name: 'Michael Foster',

    startDatetime: '2022-09-20T09:00',
    endDatetime: '2022-09-20T11:30',
  },
  {
    id: 'Fri Sep 30 2022',
    name: 'event is to make calender',

    startDatetime: '2022-09-20T17:00',
    endDatetime: '2022-09-20T18:30',
  },

]


const MonthlyCalendar = () => {

  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false)
  return (
    <div className='app'>
      <div className='calendar-container'>
      <Navbar/>
        <Calendar
          onChange={setDate}
          value={date}
          onClickDay={() => setShowTime(true)}

        />
      </div>
      <div>{date.toDateString()}</div>


      <div className="times">
        {time.map(times => {
          if (times.id === 2) {
            return <p > {times.name} </p>;
          }
          return (
            <div>




            </div>
          )
        })}

      </div>
    </div>
  );
}

export default MonthlyCalendar
