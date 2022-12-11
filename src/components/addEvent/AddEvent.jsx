import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addEvent } from '../../store/userStore'
import './AddEvent.css'

export default function AddEvent({ setModalActive }) {
  const [nameEvent, setNameEvent] = useState('')
  const [descriptionEvent, setDescriptionEvent] = useState('')
  const [dateEvent, setDateEvent] = useState('')
  const [errMess, setErrMess] = useState('')
  const events = useSelector((e) => e.user.event)



  const dispatch = useDispatch()

  const addNewEvent = () => {
    if (events.find(e => e.dateEvent === dateEvent)) {
      setErrMess('Эта дата занята')
      if (nameEvent.length === 0 || descriptionEvent.length === 0 || dateEvent.length === 0) {
        setErrMess('Есть пустые поля')


      }


    }
    else {
      dispatch(addEvent({ nameEvent: nameEvent, descriptionEvent: descriptionEvent, dateEvent: dateEvent }))
      setModalActive(false)
      setClear()
    }
  }

  const setClear = () => {
    setErrMess('')
    setNameEvent('')
    setDescriptionEvent('')
    setDateEvent('')
  }

  return (

    <div className='add_event_container'>
      <span> Название события</span>
      <input className='input_add_event' value={nameEvent} onChange={(e) => { setNameEvent(e.target.value) }} />
      <span>Участник</span>
      <input className='input_add_event' value={descriptionEvent} onChange={(e) => { setDescriptionEvent(e.target.value) }} />
      <span>Выберете дату</span>
      <input className='input_add_event' value={dateEvent} type="date" onChange={(e) => { setDateEvent(e.target.value) }} />
      <button className='add_event_butt' onClick={() => { addNewEvent() }}>Добавить событие</button>
      <span className='err_mes'>{errMess}</span>
    </div>
  )
}
