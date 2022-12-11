import React from 'react'
import { Link } from 'react-router-dom'
import'./main.css'

export default function Main() {
  return (
    <div className='main_container'>
      <Link className='link_calend' to={'/calendar'}>Перейти в каледарь</Link>
    </div>
  )
}
