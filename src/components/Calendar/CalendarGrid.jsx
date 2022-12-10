import moment from 'moment'
import React from 'react'
import { useSelector } from 'react-redux'
import './calendarGrid.css'
export default function CalendarGrid({ allDays }) {
    const MonthDay = (e) => {
        return e.format('dddd, D')[0].toUpperCase() + e.format('dddd, D').substring(1)
    }
    const event = useSelector((e) => e.user.event)
    const activeDays = (e) => {
        return event.find(item => item.dateEvent === e.format('YYYY-MM-DD'))
    }




    const GridData = () => {
        return allDays.map((e, i) => {
            const activeDaysRend = activeDays(e)

            //проверка наличия события 
            if (activeDaysRend) {

                return <div key={i} className='gridItem active' >
                    {i < 7 ? MonthDay(e) : e.format('D')}
                    <div className='name_event'>
                        {activeDaysRend.nameEvent}
                    </div>
                    <div className='guess'>
                        {activeDaysRend.descriptionEvent}
                    </div>

                </div>
            }
            //проверка текущего дня 
            if (moment().isSame(e, 'D') && i < 7) {
                return <div key={i} className='gridItem today' >{MonthDay(e)}</div>
            }
            if (moment().isSame(e, 'D') && i > 7) {
                return <div key={i} className='gridItem today' >{e.format('D')}</div>
            }
            // дефолт рендер
            if (i < 7) {

                return <div key={i} className='gridItem' >{MonthDay(e)}</div>
            } else {
                return <div key={i} className='gridItem'>{e.format('D')}</div>
            }



        })
    }



    return (

        <div className='grid_container'>
            {GridData()}
        </div>


    )
}
