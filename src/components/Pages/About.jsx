import React from 'react';
import './about.css';

import cardBackdrop from '../../assets/card-backdrop.jpg'
import defaultPFP from '../../assets/default_profile.png'


function About() {
  return (
    <>

    <div className="defaultBackground min-h-screen">

      <section className="sectionBlock px-[2rem] pt-[4rem] pb-[4rem]">
        <div className="blockGridSystem aboutSec1 gap-[2rem]">
            
            <section className="cardContainer">
              <h1 className="subHeading text-[1.75rem] text-[#2d2d2d] text-start mb-[0.5rem]">
                Our Story
              </h1>
              <p className="bodyText text-[1rem] text-[#2d2d2d] text-start mt-[0.5rem]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit quo impedit quos, 
                consequatur aliquam, ratione corrupti cumque eius nemo accusamus maiores! Atque 
                error quam ullam dolores ducimus, reiciendis magnam unde.
              </p>
            </section>

            <section className="cardContainer">
              <h1 className="subHeading text-[1.75rem] text-[#2d2d2d] text-start mb-[0.5rem]">
                Mission Statement
              </h1>
              <p className="bodyText text-[1rem] text-[#2d2d2d] text-start mt-[0.5rem]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo ex quidem rem sit 
                veritatis cupiditate atque vero. Beatae, minima? Aperiam ipsam sequi totam sed 
                asperiores consequuntur illum. Quaerat, aperiam voluptatum?
              </p>
            </section>

          </div>
      </section>

      <section className="sectionBlock px-[2rem] pb-[6rem]">
        <div className="blockGridSystem aboutCardSec gap-[1rem]">

        <div className="cardContainer aboutCard p-0">
            <img src={require('../../assets/DSIrelia.jpg')} alt="About Card" class="cardImg"/>
            <img src={require('../../assets/AaronPFP.jpg')} alt="Profile Image" class="profileImg"/>
            <h1 className="subHeading text-[1.25rem] mt-[4rem] mx-[1rem]">
              Aaron Do
            </h1>
            <h2 className="subHeading2 text-[1rem]">
              Developer
            </h2>
            <p className="bodyText italic text-[0.85rem] m-[1rem]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat expedita aliquam exercitationem reprehenderit nam magni.
            </p>
            <ul className="socials mx-[1rem] mb-[1rem]">
              <li><a href="#"><i className="fa fa-facebook-square"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter-square"></i></a></li>
              <li><a href="https://www.instagram.com/bigpusheen/"><i className="fa fa-instagram"></i></a></li>
              <li><a href="#"><i className="fa fa-github-square"></i></a></li>
              <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
            </ul>
          </div>

          <div className="cardContainer aboutCard p-0">
            <img src={require('../../assets/ArcanaHecarim.jpg')} alt="About Card" class="cardImg"/>
            <img src={require('../../assets/RobPFP.jpg')} alt="Profile Image" class="profileImg"/>
            <h1 className="subHeading text-[1.25rem] mt-[4rem] mx-[1rem]">
              Robert Balatbat
            </h1>
            <h2 className="subHeading2 text-[1rem]">
              Developer
            </h2>
            <p className="bodyText italic text-[0.85rem] m-[1rem]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat expedita aliquam exercitationem reprehenderit nam magni.
            </p>
            <ul className="socials mx-[1rem] mb-[1rem]">
              <li><a href="#"><i className="fa fa-facebook-square"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter-square"></i></a></li>
              <li><a href="https://www.instagram.com/robjgb/"><i className="fa fa-instagram"></i></a></li>
              <li><a href="#"><i className="fa fa-github-square"></i></a></li>
              <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
            </ul>
          </div>

          <div className="cardContainer aboutCard p-0">
            <img src={require('../../assets/BALux.jpg')} alt="About Card" class="cardImg"/>
            <img src={require('../../assets/Theo.jpg')} alt="Profile Image" class="profileImg"/>
            <h1 className="subHeading text-[1.25rem] mt-[4rem] mx-[1rem]">
            Theodore Tran
            </h1>
            <h2 className="subHeading2 text-[1rem]">
              Developer
            </h2>
            <p className="bodyText italic text-[0.85rem] m-[1rem]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat expedita aliquam exercitationem reprehenderit nam magni.
            </p>
            <ul className="socials mx-[1rem] mb-[1rem]">
              <li><a href="#"><i className="fa fa-facebook-square"></i></a></li>
              <li><a href="https://twitter.com/_theoshi_"><i className="fa fa-twitter-square"></i></a></li>
              <li><a href="https://www.instagram.com/_theoshi_/"><i className="fa fa-instagram"></i></a></li>
              <li><a href="#"><i className="fa fa-github-square"></i></a></li>
              <li><a href="https://www.linkedin.com/in/theortran/"><i className="fa fa-linkedin-square"></i></a></li>
            </ul>
          </div>

          <div className="cardContainer aboutCard p-0">
            <img src={require('../../assets/CosmicVarus.jpg')} alt="About Card" class="cardImg"/>
            <img src={require('../../assets/RyanPFP.jpg')} alt="Profile Image" class="profileImg"/>
            <h1 className="subHeading text-[1.25rem] mt-[4rem] mx-[1rem]">
            Ryan Yan
            </h1>
            <h2 className="subHeading2 text-[1rem]">
              Developer
            </h2>
            <p className="bodyText italic text-[0.85rem] m-[1rem]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat expedita aliquam exercitationem reprehenderit nam magni.
            </p>
            <ul className="socials mx-[1rem] mb-[1rem]">
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