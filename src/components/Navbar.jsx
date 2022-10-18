import React, {useState} from 'react'
import '../App.css';
import {Link} from "react-router-dom"
import { Auth } from 'aws-amplify';
import { useAuthenticator } from "@aws-amplify/ui-react";


async function signOut() {
  try {
      await Auth.signOut();
  } catch (error) {
      console.log('error signing out: ', error);
  }
}

function Navbar() {
  const { authStatus } = useAuthenticator((context) => [context.authStatus ]);

  return (
    <>
    <ul className='navbar shadow-md'>
        <div className='navbarLeft'>
         <p className='text-2xl font-bold'>ideART</p> 
        <li><Link to="/">Home</Link></li>
        <li><Link to="gallery">Gallery</Link></li>
        <li><Link to="challenges">Challenges</Link></li>
        <li><Link to="about">About</Link></li>

        </div>
          {authStatus !== 'authenticated' ? <Link to="login"><button className='loginButton' data-testid="loginButton" >Log In</button></Link> :
           <button className='loginButton' onClick={signOut} data-testid="signOutButton">Sign out</button>}
    </ul> 
    </>
  )
}

export default Navbar