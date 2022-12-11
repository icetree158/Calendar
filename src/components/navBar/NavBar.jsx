import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router'
import {  NavLink } from 'react-router-dom'
import { setAuth } from '../../store/authStore'
import './navBar.css'


export default function NavBar() {
  const isAuth = useSelector((e) => e.auth.isAuth)
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const setNewAuth=()=>{
    console.log(isAuth)
   if (isAuth) {dispatch(setAuth(false))} 
   else  navigate('/login')
   
  }
  
  return (
    <div>
      <header className='header_nav'>
        <div className='name_user'>{isAuth?  'Админ':'' }</div>
        <NavLink className={'nav_link'} to={'/'}>Главная</NavLink>
        <NavLink className={'nav_link'} to={'profile'}>Профиль</NavLink>
        <NavLink className={'nav_link'} to={'info'}>Информация</NavLink>
        <button className={'nav_link'} onClick={(e)=>setNewAuth()}>{isAuth ? 'Выйти':'Войти'  }</button>
      </header>
      <Outlet />
    </div>

  )
}
