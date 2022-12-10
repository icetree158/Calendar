import moment from 'moment'
import React from 'react'

import './SwitchMonth.css'

export default function SwitchMonth({minusMonth,addMonth,calend,setCalen}) {
  

  return (
    <div className='swich_mont_container'>
    
        <button className='switch_month_butt left' onClick={()=>minusMonth()}></button>
        <span className='month_year'> {calend.format('MMM yyyy')}</span>
      
        <button className='switch_month_butt right' onClick={()=>addMonth()} >  </button>
        <button className='butt_day' onClick={()=>{setCalen(moment()) }}  > Сегодня </button>
       
    </div>
  )
}
