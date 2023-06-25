import React, { useState } from 'react'
import api from '../../API/api'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [user, setUser] = useState({ username: "", password: "" })
    const navigate = useNavigate()
    const loginUser = async () => {
        try {
            const response = await api.post("/login", {
                username: user.username,
                password: user.password
            })
            if (response.data.result) {
                console.log(response.data)
                localStorage.setItem("token", response.data.token)
                navigate("/home")
            }
        } catch (e) {
            console.log(e.message)
        }
    }
    return (
        <div className='w-full h-3/4  bg-primary'>
            <div>
                <header className='text-3xl text-white p-3 text-center pt-16 font-Inter'>
                    LOGIN
                </header>
                <section className='mt-5'>
                    <div className='text-center'>
                        <input className="p-3 m-4 rounded-lg w-3/4 shadow-md" type="text" placeholder='Username' value={user.username} onChange={e => setUser({ ...user, username: e.target.value })}></input>
                    </div>
                    <div className='text-center'>
                        <input className="p-3 m-4 rounded-lg w-3/4 shadow-md" type="password" placeholder='Password' value={user.password} onChange={e => setUser({ ...user, password: e.target.value })}></input>

                    </div>
                    <div className='text-center'>
                        <div className='text-left w-3/4 inline-block cursor-pointer'>
                            Forgot Password?
                        </div>
                    </div>
                    <div className='text-center m-4'>
                        <button className='bg-secondary p-3 m-3 w-3/4 rounded-lg shadow-md text-white cursor-pointer' onClick={loginUser}>
                            Login
                        </button>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Login