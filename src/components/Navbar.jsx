import React, {useState} from 'react'
import './Navbar.css';
import {Link, useNavigate} from "react-router-dom"
import { Auth } from 'aws-amplify';
import { useAuthenticator } from "@aws-amplify/ui-react";

function Navbar() {
  const { authStatus } = useAuthenticator((context) => [context.authStatus ]);
  const navigate = useNavigate();

  async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
  }
  
  function profileLink(){
    navigate("/profile");
  }
  
  return (
    <>
    {/* <ul className='navbar shadow-md'>
        <div className='navbarLeft'>
          <p className='websiteName'>ideART</p> 
          <li><Link to="/">Home</Link></li>
          <li><Link to="gallery">Gallery</Link></li>
          <li><Link to="challenges">Challenges</Link></li>
          <li><Link to="about">About</Link></li>
        </div>
          {authStatus !== 'authenticated' ? <Link to="login"><button className='loginButton' data-testid="loginButton" >Log In</button></Link> :
            <div className='dropdown'>
              <button onClick={profileLink} className='loginButton' data-testid="signOutButton">Profile</button>

              <div class="dropdown-content">
                 <li><Link to="/user-settings"><i class="fa fa-gear"></i>Settings</Link></li>
                 <li><button onClick={signOut}><i class="fa fa-sign-out"></i>Sign Out</button></li>
              </div>
            </div>
           }
    </ul> */}

    <div className="navBar shadow-lg">
      <section className="navBarLeft w-[75%]">
        <p className="websiteName">ideART</p> 
        <li><Link to="/">Home</Link></li>
        <li><Link to="gallery">Gallery</Link></li>
        <li><Link to="challenges">Challenges</Link></li>
        <li><Link to="about">About</Link></li>
      </section>

      <section className="navBarRight w-[25%]">
        {
          authStatus !== 'authenticated' ? <Link to="login"><button className='loginButton' data-testid="loginButton" >Log In</button></Link> :
          <div className='dropdown'>
            <button onClick={profileLink} className='loginButton' data-testid="signOutButton">Profile</button>

            <div class="dropdown-content">
              <li><Link to="/user-settings"><i class="fa fa-gear"></i>Settings</Link></li>
              <li><button onClick={signOut}><i class="fa fa-sign-out"></i>Sign Out</button></li>
            </div>
          </div>
        }
      </section>


    </div>
    </>
  )
}

export default Navbar