import React from 'react'
import Navbar from '../Components/Navbar'
import ImageUpload from '../Components/ImageUpload'

export default function Predict() {
  return (
    <>
    <Navbar />
    <div style={{backgroundColor:'black' , textAlign:'center'}}>
      <h2 style={{color : 'white'}}>Hi User !!!</h2>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div style={{backgroundColor:'grey'}}>
      <h1>UPLOAD YOUR IMAGE</h1>
      <br />
      <ImageUpload />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <footer style={{textAlign:'center', color:'white' }}> Have a great experience on this application</footer>
    </div>
    </>
  )
}
