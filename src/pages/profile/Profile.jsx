import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

export default function Profile() {
    const isAuth = useSelector((e) => e.auth.isAuth)
    const navigate = useNavigate()
    
    useEffect(() => {
        if (!isAuth) {
            navigate('/login')
        }
    })


    return (
        <div>Profile</div>
    )
}
