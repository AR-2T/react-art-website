import React from 'react'
import '../App.css';
import {Link} from "react-router-dom"

import { Auth } from 'aws-amplify';

async function signOut() {
  
  try {
      await Auth.signOut();
  } catch (error) {
      console.log('error signing out: ', error);
  }
}

function Navbar() {
  return (
    <>
    <ul className='navbar shadow-lg'>
        <div className='navbarLeft'>
         <p className='text-2xl font-bold'>ideART</p> 
        <li><Link to="/">Home</Link></li>
        <li><Link to="gallery">Gallery</Link></li>
        <li><Link to="challenges">Challenges</Link></li>
        <li><Link to="about">About</Link></li>

        </div>
        <Link to="login"><button className='loginButton'>Log In</button></Link>
        <button onClick={signOut}>Sign out</button>
    </ul> 
    </>
  )
}

export default Navbar