import React from 'react'
import { useSelector } from 'react-redux'

import './calendarGrid.css'

export default function GridSearch({ inputVal }) {
  const usersEvent = useSelector((e) => e.user.event)

  /*  */


  // e.nameEvent.find(inputVal)
  // e.descriptionEvent
  // e.dateEvent

  const gridValue = () => {
    const arrData = usersEvent.filter((e) => e.nameEvent.includes(inputVal) || e.descriptionEvent.includes(inputVal) || e.dateEvent.includes(inputVal))
    if (arrData.length === 0)
      return <div className='not_found'>Ничего не найдено</div>
    else {
      return arrData.map((e,i) => {
        return <div key={i} className='gridItem active' >
           {e.dateEvent.split('-').reverse().join('.')}
          <div className='name_event'>
            {e.nameEvent}
          </div>
          <div className='guess'>
            {e.descriptionEvent}
          </div>
        </div>

      })
    }







  }
  return (
    <div className='grid_container'>

      {gridValue()}




    </div>
  )
}
