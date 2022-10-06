import React from 'react'
import '../App.css';
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <>
    <ul className='navbar'>
        <div className='navbarLeft'>
         <p className='text-2xl font-bold'>ideART</p> 
        <li><Link to="/">Home</Link></li>
        <li><Link to="gallery">Gallery</Link></li>
        <li><Link to="challenges">Challenges</Link></li>
        <li><Link to="about">About</Link></li>

        </div>
        <Link to="login"><button className='loginButton'>Log In</button></Link>
    </ul> 
    </>
  )
}

export default Navbar