import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { setAuth } from '../../store/authStore'
import'./login.css'
export default function Login() {
const log= useRef()
const password= useRef()
const navigate= useNavigate()
const [errMess,setErrMess]=useState(' ')
const dispatch=useDispatch()
const isAuth=useSelector((e)=>e.auth.isAuth)
useEffect(()=>{
  if(isAuth){
    navigate('/')
  }
})


    const checkOption=()=>{
        if( log.current.value==='Admin'&&  password.current.value==='12345678'){
        navigate('/profile')
        dispatch(setAuth(true))
      }
        else {setErrMess('Имя пользователя или пароль введены неверно')}
      
    }
  return (
        
    <div className='login_container'>
        <form className='form_login'>
            <h1 className='tittle_form'>Авторизация</h1>
            <label className='span_login'>Введите логин</label>
            <input ref={log} className='input_login' placeholder='Введите логин...'/>
            <label className='span_login'>Введите пароль</label>
            <input ref={password} type='password' className='input_login' placeholder='Введите пароль...'/>
            <section className='sub_pan'>
            <div className='unc_data' >{errMess}</div>
            <button type='button' className='sub_butt' onClick={checkOption}>Войти</button>
            </section>
           
        </form>
        </div>
  )
}
