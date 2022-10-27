import React from 'react'
import './about.css'

import cardBackdrop from '../../assets/card-backdrop.jpg'
import defaultPFP from '../../assets/default_profile.png'


function About() {
  return (
    <>

    <div className="aboutPageBackdrop min-h-screen">
      <section className="sectionContainer p-4">
        <h1 className="headerTitle lg:pt-12 md:pt-8 sm:pt-4">
          About Us
        </h1>
        <p className="headerSubText px-16 lg:pb-12 md:pb-8 sm:pb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi quo, aperiam nemo eligendi, esse non ipsam nesciunt iusto beatae quia ad libero, dolorum provident. Blanditiis incidunt ipsum soluta natus maiores.
        </p>
      </section>

      <section className="sectionContainer p-4 bg-[#000000] bg-opacity-25">
        <h1 className="headerTitle lg:pt-12 md:pt-8 sm:pt-4">
          Mission Statement
        </h1>
        <p className="headerSubText px-16 lg:pb-12 md:pb-8 sm:pb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi quo, aperiam nemo eligendi, esse non ipsam nesciunt iusto beatae quia ad libero, dolorum provident. Blanditiis incidunt ipsum soluta natus maiores.
        </p>
      </section>

      <section className="sectionContainer p-4 bg-[#000000] bg-opacity-50">
        <h1 className="headerTitle lg:pt-12 md:pt-8 sm:pt-4">
          Our Team
        </h1>

        <div className="cardContainer">
          {/* Aaron's Card */}
          <div className="card">
            <img src={require('../../assets/DSIrelia.jpg')} alt="Main Card" class="cardImg"/>
            <img src={require('../../assets/DSIreliaFull.jpg')} alt="Hover Card" class="cardImgFull"/>
            <img src={require('../../assets/AaronPFP.jpg')} alt="Profile Image" class="profileImg"/>
            <h2 className="name">
              Aaron Do
            </h2>
            <h3 className="jobTitle">
              Developer
            </h3>
            <p className="about">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ipsa perspiciatis voluptas, maiores doloremque aperiam consectetur debitis
              nemo accusantium officia voluptatibus necessitatibus adipisci ex quo explicabo,
              ratione animi asperiores tempore delectus?
            </p>
            <ul className="socialLinks">
              <li><a href="#"><i className="fa fa-facebook-square"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter-square"></i></a></li>
              <li><a href="https://www.instagram.com/bigpusheen/"><i className="fa fa-instagram"></i></a></li>
              <li><a href="#"><i className="fa fa-github-square"></i></a></li>
              <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
            </ul>
          </div>

          {/* Rob's Card */}
          <div className="card">
            <img src={require('../../assets/ArcanaHecarim.jpg')} alt="Main Card" class="cardImg"/>
            <img src={require('../../assets/ArcanaHecarimFull.jpg')} alt="Hover Card" class="cardImgFull"/>
            <img src={require('../../assets/RobPFP.jpg')} alt="Profile Image" class="profileImg"/>
            <h2 className="name">
              Robert Balatbat
            </h2>
            <h3 className="jobTitle">
              Developer
            </h3>
            <p className="about">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ipsa perspiciatis voluptas, maiores doloremque aperiam consectetur debitis
              nemo accusantium officia voluptatibus necessitatibus adipisci ex quo explicabo,
              ratione animi asperiores tempore delectus?
            </p>
            <ul className="socialLinks">
              <li><a href="#"><i className="fa fa-facebook-square"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter-square"></i></a></li>
              <li><a href="https://www.instagram.com/robjgb/"><i className="fa fa-instagram"></i></a></li>
              <li><a href="#"><i className="fa fa-github-square"></i></a></li>
              <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
            </ul>
          </div>

          {/* Theo's Card */}
          <div className="card">
            <img src={require('../../assets/BALux.jpg')} alt="Main Card" class="cardImg"/>
            <img src={require('../../assets/BALuxFull.jpg')}  alt="Hover Card" class="cardImgFull"/>
            <img src={require('../../assets/Theo.jpg')} alt="Profile Image" class="profileImg"/>
            <h2 className="name">
              Theodore Tran
            </h2>
            <h3 className="jobTitle">
              Developer
            </h3>
            <p className="about">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ipsa perspiciatis voluptas, maiores doloremque aperiam consectetur debitis
              nemo accusantium officia voluptatibus necessitatibus adipisci ex quo explicabo,
              ratione animi asperiores tempore delectus?
            </p>
            <ul className="socialLinks">
              <li><a href="#"><i className="fa fa-facebook-square"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter-square"></i></a></li>
              <li><a href="https://www.instagram.com/_theoshi_/"><i className="fa fa-instagram"></i></a></li>
              <li><a href="#"><i className="fa fa-github-square"></i></a></li>
              <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
            </ul>
          </div>

          {/* Ryan's Card */}
          <div className="card">
            <img src={require('../../assets/CosmicVarus.jpg')} alt="Main Card" class="cardImg"/>
            <img src={require('../../assets/CosmicVarusFull.jpg')}  alt="Hover Card" class="cardImgFull"/>
            <img src={require('../../assets/RyanPFP.jpg')} alt="Profile Image" class="profileImg"/>
            <h2 className="name">
              Ryan Yan
            </h2>
            <h3 className="jobTitle">
              Developer
            </h3>
            <p className="about">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ipsa perspiciatis voluptas, maiores doloremque aperiam consectetur debitis
              nemo accusantium officia voluptatibus necessitatibus adipisci ex quo explicabo,
              ratione animi asperiores tempore delectus?
            </p>
            <ul className="socialLinks">
              <li><a href="#"><i className="fa fa-facebook-square"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter-square"></i></a></li>
              <li><a href="https://www.instagram.com/doozykiddo/"><i className="fa fa-instagram"></i></a></li>
              <li><a href="#"><i className="fa fa-github-square"></i></a></li>
              <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
            </ul>
          </div>

        </div>
      </section>
    </div>

    </>
  )
}

export default About