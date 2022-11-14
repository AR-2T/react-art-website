import React from 'react';
import './about.css';

import cardBackdrop from '../../assets/card-backdrop.jpg'
import defaultPFP from '../../assets/default_profile.png'


function About() {
  return (
    <>

    <div className="defaultBackground min-h-screen">

    {/* USED VMAX */}
    <section className="sectionBlock px-[2vmax] pt-[4vmax] pb-[2vmax] flex flex-row justify-center">  
      <section className="blockAbout1 w-[50%] mr-[2vmax]">
        <section className="container rounded-[0.75vmax] p-[2vmax] z-[1] relative">
          <h1 className="subHeading text-[2vmax] text-start mb-[0.5vmax]">
            Our Story
          </h1>

          <p className="bodyText text-[1.1vmax] text-start mt-[0.5vmax]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit quo impedit quos, 
            consequatur aliquam, ratione corrupti cumque eius nemo accusamus maiores! Atque 
            error quam ullam dolores ducimus, reiciendis magnam unde.
          </p>
        </section>
      </section>
        
      <section className="blockAbout2 w-[50%] ml-[2vmax]">
      <section className="container rounded-[0.75vmax] p-[2vmax] z-[1] relative">
          <h1 className="subHeading text-[2vmax] text-start mb-[0.5vmax]">
            Mission Statement
          </h1>
          
          <p className="bodyText text-[1.1vmax] text-start mt-[0.5vmax]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit quo impedit quos, 
            consequatur aliquam, ratione corrupti cumque eius nemo accusamus maiores! Atque 
            error quam ullam dolores ducimus, reiciendis magnam unde.
          </p>
        </section>
      </section>
    </section>

    {/* USED EM */}
    {/* <section className="sectionBlock px-[2vmax] pt-[4vmax] pb-[2vmax] flex flex-row justify-center bg-green-500">  
      <section className="blockAbout1 w-[50%] mr-[2vmax] text-[2vmax]">
        <section className="container rounded-[0.75vmax] p-[2vmax] z-[1] relative">
          <h1 className="subHeading text-[1em] text-start mb-[0.5vmax]">
            About Us
          </h1>

          <p className="bodyText text-[0.6em] text-start mt-[0.5vmax]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit quo impedit quos, 
            consequatur aliquam, ratione corrupti cumque eius nemo accusamus maiores! Atque 
            error quam ullam dolores ducimus, reiciendis magnam unde.
          </p>
        </section>
      </section>
        
      <section className="blockAbout2 w-[50%] ml-[2vmax] text-[2vmax]">
      <section className="container rounded-[0.75vmax] p-[2vmax] z-[1] relative">
          <h1 className="subHeading text-[1em] text-start mb-[0.5vmax]">
            Mission Statement
          </h1>
          
          <p className="bodyText text-[0.6em] text-start mt-[0.5vmax]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit quo impedit quos, 
            consequatur aliquam, ratione corrupti cumque eius nemo accusamus maiores! Atque 
            error quam ullam dolores ducimus, reiciendis magnam unde.
          </p>
        </section>
      </section>
    </section> */}

    {/* About Cards */}
    <section className="sectionBlock py-[2vmax]">
      <div className="gridSystemAbout w-[100%] px-[1.5vmax]">

        <div className="text-[#2d2d2d] indivCard">
            <img src={require('../../assets/DSIrelia.jpg')} alt="About Card" class="cardImg"/>
            {/* <img src={require('../../assets/DSIreliaFull.jpg')} alt="Hover Card" class="cardImgFull"/> */}
            <img src={require('../../assets/AaronPFP.jpg')} alt="Profile Image" class="profileImg"/>
            <h1 className="subHeading text-[1.5vmax] mt-[6.5vmax] mx-[1vmax]">
              Aaron Do
            </h1>
            <h2 className="subHeading2 text-[1.25vmax]">
              Developer
            </h2>
            <p className="bodyText italic m-[1vmax]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat expedita aliquam exercitationem reprehenderit nam magni.
            </p>
            <ul className="socials mx-[1vmax] mb-[1vmax]">
              <li><a href="#"><i className="fa fa-facebook-square"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter-square"></i></a></li>
              <li><a href="https://www.instagram.com/bigpusheen/"><i className="fa fa-instagram"></i></a></li>
              <li><a href="#"><i className="fa fa-github-square"></i></a></li>
              <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
            </ul>
        </div>

        <div className="text-[#2d2d2d] indivCard">
          <img src={require('../../assets/ArcanaHecarim.jpg')} alt="About Card" class="cardImg"/>
          <img src={require('../../assets/RobPFP.jpg')} alt="Profile Image" class="profileImg"/>
          <h1 className="subHeading text-[1.5vmax] mt-[6.5vmax] mx-[1vmax]">
            Robert Balatbat
          </h1>
          <h2 className="subHeading2 text-[1.25vmax]">
            Developer
          </h2>
          <p className="bodyText italic m-[1vmax]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat expedita aliquam exercitationem reprehenderit nam magni.
          </p>
          <ul className="socials mx-[1vmax] mb-[1vmax]">
            <li><a href="#"><i className="fa fa-facebook-square"></i></a></li>
            <li><a href="#"><i className="fa fa-twitter-square"></i></a></li>
            <li><a href="https://www.instagram.com/robjgb/"><i className="fa fa-instagram"></i></a></li>
            <li><a href="#"><i className="fa fa-github-square"></i></a></li>
            <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
          </ul>
        </div>

        <div className="text-[#2d2d2d] indivCard">
          <img src={require('../../assets/BALux.jpg')} alt="About Card" class="cardImg"/>
          <img src={require('../../assets/Theo.jpg')} alt="Profile Image" class="profileImg"/>
          <h1 className="subHeading text-[1.5vmax] mt-[6.5vmax] mx-[1vmax]">
            Theodore Tran
          </h1>
          <h2 className="subHeading2 text-[1.25vmax]">
            Developer
          </h2>
          <p className="bodyText italic m-[1vmax]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat expedita aliquam exercitationem reprehenderit nam magni.
          </p>
          <ul className="socials mx-[1vmax] mb-[1vmax]">
            <li><a href="#"><i className="fa fa-facebook-square"></i></a></li>
            <li><a href="#"><i className="fa fa-twitter-square"></i></a></li>
            <li><a href="https://www.instagram.com/_theoshi_/"><i className="fa fa-instagram"></i></a></li>
            <li><a href="#"><i className="fa fa-github-square"></i></a></li>
            <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
          </ul>
        </div>

        <div className="text-[#2d2d2d] indivCard">
          <img src={require('../../assets/CosmicVarus.jpg')} alt="About Card" class="cardImg"/>
          <img src={require('../../assets/RyanPFP.jpg')} alt="Profile Image" class="profileImg"/>
          <h1 className="subHeading text-[1.5vmax] mt-[6.5vmax] mx-[1vmax]">
            Ryan Yan
          </h1>
          <h2 className="subHeading2 text-[1.25vmax]">
            Developer
          </h2>
          <p className="bodyText italic m-[1vmax]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat expedita aliquam exercitationem reprehenderit nam magni.
          </p>
          <ul className="socials mx-[1vmax] mb-[1vmax]">
            <li><a href="#"><i className="fa fa-facebook-square"></i></a></li>
            <li><a href="#"><i className="fa fa-twitter-square"></i></a></li>
            <li><a href="https://www.instagram.com/doozykiddo/"><i className="fa fa-instagram"></i></a></li>
            <li><a href="#"><i className="fa fa-github-square"></i></a></li>
            <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
          </ul>
        </div>
        
      </div>
    </section>

    <section className="sectionBlock p-[2vmax] relative">  

      <section className="container bg-[#FFFFFF] rounded-[0.75vmax] p-[2vmax] z-[1] relative hover:scale-105">
        <h1 className="subHeading text-[#2d2d2d] text-[2vmax] text-start mb-[0.5vmax]">
          Contact Us
        </h1>

        <div className="evenLengthColumns">
          <p className="bodyText text-[#2d2d2d] text-[1.1vmax] text-start mr-[2vmax] mt-[0.5vmax]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sit, repudiandae aut 
            at dignissimos nemo veritatis facilis quae laborum voluptatum aperiam, harum quod sequi molestiae?
          </p>

          <p className="bodyText text-[#2d2d2d] text-[1.1vmax] text-start mt-[0.5vmax]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum officiis recusandae quos sequi cumque!
          </p>
        </div>
      </section>

    </section>

    </div>

    </>
  )
}

export default About