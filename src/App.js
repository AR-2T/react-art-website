import '@aws-amplify/ui-react/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Pages/Home';
import TopicPage from './components/Pages/TopicPage';
import Gallery from './components/Pages/Gallery';
import GalleryImage from './components/GalleryImage';
import ChallengePage from './components/Pages/ChallengePage';
import About from './components/Pages/About';
import Login from './components/Pages/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Profile from './components/Pages/Profile';
import CreatePost from './components/Pages/CreatePost';
import ChallengeDetailsPage from './components/Pages/ChallengeDetailsPage';
import './App.css';

import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App() {

  function onClick(){

  }

  useEffect(()=> {
  }, [])

  return (
    <>
    <div className="App">
    <ToastContainer />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="gallery" element={<Gallery/>} >
          <Route path=":postID" element={<GalleryImage />} />
        </Route>
        <Route path="topic" element={<TopicPage/>} />
        <Route path="challenges" element={<ChallengePage/>} />
        <Route path="about" element={<About/>} />
        <Route path="login" element={<Login/>} />
        <Route path="profile" element={<Profile/>} />
        <Route path="create-post" element={<CreatePost/>} />
        <Route path= 'challenges/:challengeID' element=
        {<ChallengeDetailsPage/>} />
      </Routes>
      <Footer/>

    </div>
    </>
  );
}

export default App;
