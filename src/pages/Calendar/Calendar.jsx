import moment from 'moment/moment'
import 'moment/locale/ru';
import React, { useEffect, useMemo, useState } from 'react'
import CalendarGrid from '../../components/Calendar/CalendarGrid'
import SwitchMonth from '../../components/Calendar/SwitchMonth';
import ChangesPanel from '../../components/Calendar/ChangesPanel';
import GridSearch from '../../components/Calendar/GridSearch';
import './calendar.css'
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

moment.updateLocale('ru')



export default function Calendar() {

  const [calend, setCalen] = useState(moment())
  const startWeek = calend.clone().startOf('month').startOf('week')
  const endWeek = calend.clone().endOf('month').endOf('week')
  const [inputVal, setInputVal] = useState('')
  const isAuth = useSelector((e) => e.auth.isAuth)
  const navigate = useNavigate()

  useEffect(() => {

    if (!isAuth) {
      navigate('/login')
    }
  })

  const allDays = useMemo(() => {
    const allDays = []

    while (!startWeek.isAfter(endWeek)) {
      allDays.push(startWeek.clone());
      startWeek.add(1, 'day')


    }
    return allDays
  }, [startWeek, endWeek])

  const minusMonth = () => {
    setCalen(calend.clone().subtract(1, 'month'))
  }
  const addMonth = () => {
    setCalen(calend.clone().add(1, 'month'))
  }


  return (
    <div className='main_container_calendar'>
      <ChangesPanel inputVal={inputVal} setInputVal={setInputVal} />
      <SwitchMonth minusMonth={minusMonth} addMonth={addMonth} calend={calend} setCalen={setCalen} />
      {inputVal === '' ? <CalendarGrid allDays={allDays} /> : <GridSearch inputVal={inputVal} />}

    </div>


  )
}
