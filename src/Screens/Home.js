import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className='bg home'>
      <div className=" text-center">
      
      <h1 style = {{color : 'yellow'}}className="h1 display-5 fw-bold">QUANTUM PREDICTION MODEL</h1>
      
      <div className=" button-class d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button onClick={()=>navigate("/login")} type="button" className="btn btn-success btn-lg px-4 gap-3">Login</button>
        <button onClick={()=>navigate("/signup")} type="button" className="btn btn-secondary btn-lg px-4">Sign-Up</button>
    </div>
  </div>
    </div>
  );
}
