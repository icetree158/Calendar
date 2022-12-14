import React from 'react'
import { Route, Routes } from "react-router-dom";
import Login from '../pages/login/Login';
import NavBar from '../components/navBar/NavBar';
import Calendar from '../pages/Calendar/Calendar';

import Profile from '../pages/profile/Profile';
import Main from '../pages/main/Main';
import Info from '../pages/info/Info';



export default function RouterNav() {
    return (
        <>
        
            <Routes>
                
                <Route path='/login' element={<Login />} />
                  
                <Route path='/' element= {<NavBar/>} >
                <Route index element={<Main/>}/>
                    <Route path='profile' element={<Profile/>}/>
                    <Route path='calendar' element={<Calendar/>}/>  
                    <Route path='info' element={<Info/>}/>      
                                   
                </Route>
            </Routes>
        </>


    )
}
