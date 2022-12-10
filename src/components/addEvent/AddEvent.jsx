import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addEvent } from '../../store/userStore'
import './AddEvent.css'

export default function AddEvent({setModalActive}) {
    const [nameEvent,setNameEvent]=useState('')
    const [descriptionEvent,setDescriptionEvent]=useState('')
    const [dateEvent,setDateEvent]=useState('')
    
   
    const dispatch=useDispatch ()
    
    const addNewEvent=()=>{
      dispatch(addEvent({nameEvent:nameEvent,descriptionEvent:descriptionEvent,dateEvent:dateEvent}))
    }
    // console.log(dateEvent,descriptionEvent,nameEvent)
    const setClear=(e)=>{
      e.preventDefault()
      setNameEvent('')
      setDescriptionEvent('')
      setDateEvent('')
    }

  return (
    
    <div className='add_event_container'>
        <span> Название события</span>
        <input className='input_add_event' value={nameEvent} onChange={(e)=>{setNameEvent(e.target.value )}}/>
        <span>Участник</span>
        <input className='input_add_event'   value={descriptionEvent} onChange={(e)=>{setDescriptionEvent(e.target.value )}}/>
        <span>Выберете дату</span>
        <input className='input_add_event'  value={dateEvent}  type="date"  onChange={(e)=>{setDateEvent(e.target.value)}}/>
        <button className='add_event_butt' onClick={(e)=>{addNewEvent(); setModalActive(false);setClear(e)}}>Добавить событие</button>
    </div>
  )
}
