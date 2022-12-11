import React from 'react'
import { Route, Routes } from "react-router-dom";
import Login from '../pages/login/Login';
import NavBar from '../components/navBar/NavBar';
import Calendar from '../pages/Calendar/Calendar';

import Profile from '../pages/profile/Profile';
import Main from '../pages/main/Main';



export default function RouterNav() {
    return (
        <>
        
            <Routes>
                
                <Route path='/login' element={<Login />} />
                <Route path='/calendar' element={<Calendar/>}/>      
                <Route path='/' element= {<NavBar/>} >
                <Route index element={<Main/>}/>
                    <Route path='profile' element={<Profile/>}/>
                    
                
                </Route>
            </Routes>
        </>


    )
}
