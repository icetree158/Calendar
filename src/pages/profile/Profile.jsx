import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import './Profile.css'
export default function Profile() {
    const isAuth = useSelector((e) => e.auth.isAuth)
    const navigate = useNavigate()
    const eventData=useSelector((e)=>e.user.event)
 
    useEffect(() => {   
        if (!isAuth) {
            navigate('/login')
        }
    })


    return (
        <div className='profile_container'>
            <img src='https://seeding.com.ua/wp-content/uploads/2017/04/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0-%D0%B4%D0%BB%D1%8F-%D0%BE%D1%82%D0%B7%D1%8B%D0%B2%D0%BE%D0%B2.jpg'
            className='avatar_img'
            alt='avatar_user'
            />
            <span className='nick_name'>Admin</span>
            <div className='events_container'>
                {eventData.length===0?<Link className='link_calendar' to={'/calendar'}>У вас нету событий.  Хотите что-то добавить? </Link>
                :eventData.map((e,i)=>{
                    return <div key={e.dateEvent} className='event_item'>
                        <span className='span_event'>{i+1}</span>
                        <span className='span_event'>{e.nameEvent}</span>
                        <span className='span_event'>{e.descriptionEvent}</span>
                        <span className='span_event'>{e.dateEvent.split('-').reverse().join('.')}</span>
                        
                    </div>
                })}
            </div>

        </div>
    )
}
