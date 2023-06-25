import { useState } from 'react'
import Mask from './assets/mask2.svg'
import breakfast from './assets/breakfast.svg'
import './App.css'
import Login from './components/loginPage/Login.jsx'

const HomePage = () => {
    return (
        <div className='m-0 p-0 w-screen h-screen overflow-hidden'>
            <Login />
            <img src={Mask} className='relative bottom-24 bg-cover  w-screen p-0 m-0' />
            <img src={breakfast} className='absolute bottom-5 bg-cover  w-1/2 h-1/3 left-1/2 -translate-x-1/2  p-0 m-0' />
        </div>
    )
}

export default HomePage