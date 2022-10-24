import React from 'react'
import './about.css'

import cardBackdrop from '../../assets/card-backdrop.jpg'
import defaultPFP from '../../assets/default_profile.png'


function About() {
  return (
    <>

    <div className="aboutPage min-h-screen">

      {/* About Us Info */}
      <div className="container">

        {/* Header */}
        <h1 className="heading">
          About Us
        </h1>

        <div className="sub-container">

          <div className="subtext">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, error <br />
            doloribus. Corporis, impedit nostrum. Est vel quo ipsa asperiores, quam ullam <br />
            ratione, quas quidem dolorum voluptatibus pariatur ut molestias labore.
          </div>
          
        </div>

      </div>

      {/* Team Members' About Us */}
      <div className="container">
        
        {/* Header */}
        <h1 className="heading">
          Our Team
        </h1>

        {/* About Us Cards Container */}
        <div className="sub-container">

          {/* Aaron's About Us Card */}
          <div className="card">
            <img src={require('../../assets/DSIrelia.jpg')} alt="Main Card" class="card-img"/>
            <img src={require('../../assets/DSIreliaFull.jpg')} alt="Hover Card" class="card-img-full"/>
            <img src={defaultPFP} alt="profile image" class="profile-img"/>
            <h1>
              Aaron Do
            </h1>
            <p className="job-title">
              Developer
            </p>
            <p className="about">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ipsa perspiciatis voluptas, maiores doloremque aperiam consectetur debitis
              nemo accusantium officia voluptatibus necessitatibus adipisci ex quo explicabo,
              ratione animi asperiores tempore delectus?
            </p>
            <ul className="social-links">
              <li><a href="#"><i className="fa fa-facebook-square"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter-square"></i></a></li>
              <li><a href="https://www.instagram.com/bigpusheen/"><i className="fa fa-instagram"></i></a></li>
              <li><a href="#"><i className="fa fa-github-square"></i></a></li>
              <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
            </ul>
          </div>

          {/* Robert's About Us Card */}
          <div className="card">
          <img src={require('../../assets/ArcanaHecarim.jpg')} alt="Main Card" class="card-img"/>
            <img src={require('../../assets/ArcanaHecarimFull.jpg')} alt="Hover Card" class="card-img-full"/>
            <img src={defaultPFP} alt="profile image" class="profile-img"/>
            <h1>
              Robert Balatbat
            </h1>
            <p className="job-title">
              Developer
            </p>
            <p className="about">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ipsa perspiciatis voluptas, maiores doloremque aperiam consectetur debitis
              nemo accusantium officia voluptatibus necessitatibus adipisci ex quo explicabo,
              ratione animi asperiores tempore delectus?
            </p>
            <ul className="social-links">
              <li><a href="#"><i className="fa fa-facebook-square"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter-square"></i></a></li>
              <li><a href="https://www.instagram.com/robjgb/"><i className="fa fa-instagram"></i></a></li>
              <li><a href="#"><i className="fa fa-github-square"></i></a></li>
              <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
            </ul>
          </div>

          {/* Theo's About Us Card */}
          <div className="card">
            <img src={require('../../assets/BALux.jpg')} alt="Main Card" class="card-img"/>
            <img src={require('../../assets/BALuxFull.jpg')} alt="Hover Card" class="card-img-full"/>
            <img src={require('../../assets/Theo.jpg')} alt="profile image" class="profile-img"/>
            <h1>
              Theodore Tran
            </h1>
            <p className="job-title">
              Developer
            </p>
            <p className="about">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ipsa perspiciatis voluptas, maiores doloremque aperiam consectetur debitis
              nemo accusantium officia voluptatibus necessitatibus adipisci ex quo explicabo,
              ratione animi asperiores tempore delectus?
            </p>
            <ul className="social-links">
              <li><a href="#"><i className="fa fa-facebook-square"></i></a></li>
              <li><a href="https://twitter.com/_theoshi_"><i className="fa fa-twitter-square"></i></a></li>
              <li><a href="https://www.instagram.com/_theoshi_"><i className="fa fa-instagram"></i></a></li>
              <li><a href="#"><i className="fa fa-github-square"></i></a></li>
              <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
            </ul>
          </div>

          {/* Ryan's About Us Card */}
          <div className="card">
            <img src={require('../../assets/CosmicVarus.jpg')} alt="Main Card" class="card-img"/>
            <img src={require('../../assets/CosmicVarusFull.jpg')} alt="Hover Card" class="card-img-full"/>
            <img src={defaultPFP} alt="profile image" class="profile-img"/>
            <h1>
              Ryan Yan
            </h1>
            <p className="job-title">
              Developer
            </p>
            <p className="about">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ipsa perspiciatis voluptas, maiores doloremque aperiam consectetur debitis
              nemo accusantium officia voluptatibus necessitatibus adipisci ex quo explicabo,
              ratione animi asperiores tempore delectus?
            </p>
            <ul class="social-links">
              <li><a href="#"><i className="fa fa-facebook-square"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter-square"></i></a></li>
              <li><a href="https://www.instagram.com/doozykiddo/"><i className="fa fa-instagram"></i></a></li>
              <li><a href="#"><i className="fa fa-github-square"></i></a></li>
              <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
            </ul>
          </div>

        </div>

      </div>

      {/* Mission Statement */}
      <div className="container">

        {/* Header */}
        <h1 className="heading">
          Mission Statement
        </h1>

        <div className="sub-container">

          <div className="subtext pb-32">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, error <br />
            doloribus. Corporis, impedit nostrum. Est vel quo ipsa asperiores, quam ullam <br />
            ratione, quas quidem dolorum voluptatibus pariatur ut molestias labore.
          </div>
          
        </div>

      </div>

    </div>

    </>
  )
}

export default About