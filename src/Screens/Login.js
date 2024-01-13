import React from 'react'
import './Log.css'
import { useNavigate } from 'react-router-dom';

export default function () {
    const navigate = useNavigate();
    return (
        <div className='bg1'>
            <div className="form">
                <form action="">
                    <h2 className='text-center'>Log-In </h2>
                    <label htmlFor="uname">Username</label>
                    <br />
                    <input type="text" />
                    <br />
                    <br />
                    <label htmlFor="password">Password</label>
                    <br />
                    <input type="password" />
                    <br />
                    <br />
                    <button className ="border border-2 p-3 mb-3 border-radius" onClick={()=>navigate("/predict")} type="submit" className="btn btn-secondary btn-lg px-4">Submit</button>
                </form>
            </div>
        </div>
    )
}
