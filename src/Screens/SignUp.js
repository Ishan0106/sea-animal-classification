import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Log.css'



export default function SignUP() {
    const navigate = useNavigate();
    const [userRegistration,setuserRegistration] = useState({
        username:"",
        password:"",
        email:"",
        phone:""
    });

    const handleInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        console.log(name,value);
        setuserRegistration({ ...userRegistration, [name]:value});
    }
    return (
        <div>
            <div className="form1">
                <form action="" method='POST'>
                    <h2 className='text-center'>Sign-Up </h2>
                    <label htmlFor="username">Username</label>
                    <br />
                    <input type="text" autoComplete="off" 
                         value={userRegistration.username}
                         onChange={handleInput}
                         name="username" id="username"/>
                    <br />
                    <br />
                    <label htmlFor="password">Password</label>
                    <br />
                    <input type="password"  autoComplete="off" 
                        value={userRegistration.password}
                        onChange={handleInput}
                        name="password" id="password" />
                    <br />
                    <br />
                    <label htmlFor="email">Email</label>
                    <br />
                    <input type="email"  autoComplete="off"
                          value={userRegistration.email}
                          onChange={handleInput} 
                          name="email" id="email"/>
                    <br />
                    <br />
                    <label htmlFor="phone">Contact</label>
                    <br />
                    <input type="number"  autoComplete="off" 
                          value={userRegistration.phone}
                          onChange={handleInput}
                          name="phone" id="phone" />
                    <br />
                    <br />
                    <button onClick={()=>navigate("/login")} type="submit" className="btn btn-secondary btn-lg px-4">Submit</button>
                </form>
            </div>
        </div>
    )
}
