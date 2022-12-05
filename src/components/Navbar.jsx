import React, {useState, useEffect, useLayoutEffect} from 'react'
import './Navbar.css';
import {Link, useNavigate, useLocation} from "react-router-dom"
import { Auth } from 'aws-amplify';
import { useAuthenticator } from "@aws-amplify/ui-react";

function Navbar() {
  const { authStatus } = useAuthenticator((context) => [context.authStatus ]);
  const navigate = useNavigate();
  const location = useLocation();
  const [menu, setMenu] = useState(false);
  const [logoStyle, setLogoStyle] = useState({});
  const [menuStyle, setMenuStyle] = useState({});
  const [navStyle, setNavStyle] = useState({});
  const [size, setSize] = useState([0, 0]);

  useEffect(()=>{ 
    if(menu == true){
      setLogoStyle({display:"none"});
      setNavStyle({minHeight:"100vh"});
      setMenuStyle({display:"flex"});
    }
    if(menu == false){
      setLogoStyle({});
      setNavStyle({});
      setMenuStyle({});
    }

    if (!window.matchMedia('screen and (max-width: 1000px)').matches) {
      setMenu(false);
      setLogoStyle({});
      setNavStyle({});
      setMenuStyle({});
    }

  }, [menu])

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(()=> {
    if(size[0]>1000){
      setMenu(false);
      setLogoStyle({});
      setNavStyle({});
      setMenuStyle({});
    }
  }, [size])

  useEffect(()=>{
    setMenu(false);
    setLogoStyle({});
    setNavStyle({});
    setMenuStyle({});
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, [location])

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

  function enableMenu(){
    setMenu(!menu);
  }
  
  return (
    <>
    <nav className="navBar" style={navStyle}>
      <div className='mobileNavBar'>
        <section className="navBarLogo">
          <p className="websiteName" style={logoStyle}>ideART</p> 
        </section>

        <button className='navBarMenu' onClick={enableMenu}>
          {
          menu ?
            <i className='fa fa-close'></i>
          :
            <i className='fa fa-bars'></i>
          }
        </button>
      </div>

        <section className="navBarMiddle" style={menuStyle}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="testpage">TestPage</Link></li>
          <li><Link to="gallery">Gallery</Link></li>
          <li><Link to="challenges">Challenges</Link></li>
          <li><Link to="about">About</Link></li>
        </section>

        <section className="navBarRight" style={menuStyle}>
          {
            authStatus !== 'authenticated' ? 
            <Link to="login">
              <button className='loginButton' data-testid="loginButton" >
                Sign In          
                {!menu && <svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true" fill='white'>
                  <g fill-rule="evenodd">         
                      <path class="HoverArrow__linePath" d="M0 5h7" ></path>
                      <path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path>
                  </g>
                </svg>
                }
              </button>
            </Link> :
            <div className='dropdown'>
              <button onClick={profileLink} className='loginButton' data-testid="signOutButton">Profile</button>

              <div class="dropdown-content">
                <li><Link to="/user-settings"><i class="fa fa-gear"/>Settings</Link></li>
               <li><button onClick={signOut}><i class="fa fa-sign-out"/>Sign Out</button></li>
              </div>
              
            </div>
          }
        </section>
    </nav>
    </>
  )
}

export default Navbar