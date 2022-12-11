import React from 'react'
import { Link } from 'react-router-dom'

export default function Main() {
  return (
    <div>
      <Link to={'/calendar'}>Добавить событие </Link>
    </div>
  )
}
