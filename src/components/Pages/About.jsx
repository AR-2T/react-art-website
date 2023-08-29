import React from 'react';
import './about.css';

import cardBackdrop from '../../assets/card-backdrop.jpg'
import defaultPFP from '../../assets/default_profile.png'


function About() {
  return (
    <>

    <div className="min-h-screen container mx-auto">

      <section className="sectionBlock px-[2rem] pt-[4rem] pb-[4rem]">
        <div className="blockGridSystem aboutSec1 gap-[2rem]">
            
            <section className="cardContainer">
              {/* <h1 className="subHeading text-[1.75rem] text-[#2d2d2d] text-start mb-[0.5rem]">
                Our Story
              </h1> */}
              <h1 className="subHeadingAbout text-start mb-[0.5rem]">
                Our Story
              </h1>
              <p className="bodyText text-[1rem] text-[#2d2d2d] text-start mt-[0.5rem]">
                As fans of popular drawing/guessing games like Gartic Phone and Skribbl.io, we constantly
                utilized custom word lists to expand our experience beyond the limitations of their
                small database.
              </p>
              <p className="bodyText text-[1rem] text-[#2d2d2d] text-start mt-[0.5rem]">
                This lead us down into create a random word generator and subsequently, inspired
                us to expand upon the idea and make a generator that could generate creative prompts that artists
                could use as a base for their artistic creations/endeavors.
              </p>
            </section>

            <section className="cardContainer">
              <h1 className="subHeadingAbout2 text-start mb-[0.5rem]">
                Mission Statement
              </h1>
              <p className="bodyText text-[1rem] text-[#2d2d2d] text-start mt-[0.5rem]">
                ideArt's mission is to help artists and creators alike find enriching, engaging topics they can
                pull inspiration from.
              </p>
              <p className="bodyText text-[1rem] text-[#2d2d2d] text-start mt-[0.5rem]">
                We hope to open up avenues of creativity and expression for our users and
                allow them to share their inventive, original works with the world.
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
            <p className="bodyText italic text-[0.8rem] m-[1rem]">
              I am a 4th year student at Cal Poly Pomona pursuing a Bachelor's Degree in Computer Science.
              My interests include Cybersecurity, Virtual Reality, Agent-Based Models, and Game Design.
            </p>
            <ul className="socials mx-[1rem] mb-[1rem]">
              {/* <li><a href="#"><i className="fa fa-facebook-square"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter-square"></i></a></li> */}
              <li><a href="https://www.instagram.com/bigpusheen/"><i className="fa fa-instagram"></i></a></li>
              <li><a href="https://github.com/Melancholy22"><i className="fa fa-github-square"></i></a></li>
              <li><a href="https://www.linkedin.com/in/aarondo-/"><i className="fa fa-linkedin-square"></i></a></li>
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
            <p className="bodyText italic text-[0.8rem] m-[1rem]">
              I am a 4th year student at Cal Poly Pomona pursuing a Bachelor's Degree in Computer Science.
              My interests include Art, Music, Software Development, and Game Design.
            </p>
            <ul className="socials mx-[1rem] mb-[1rem]">
              {/* <li><a href="#"><i className="fa fa-facebook-square"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter-square"></i></a></li> */}
              <li><a href="https://www.instagram.com/robjgb/"><i className="fa fa-instagram"></i></a></li>
              <li><a href="https://github.com/robjgb"><i className="fa fa-github-square"></i></a></li>
              <li><a href="https://www.linkedin.com/in/robert-balatbat/"><i className="fa fa-linkedin-square"></i></a></li>
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
            <p className="bodyText italic text-[0.8rem] m-[1rem]">
              I am a 4th year student at Cal Poly Pomona pursuing a Bachelor's Degree in Computer Science.
              My interests include Web Development, Game Design, User Interface (UI) Design, and more.
            </p>
            <ul className="socials mx-[1rem] mb-[1rem]">
              {/* <li><a href="https://www.facebook.com/Theoshiri"><i className="fa fa-facebook-square"></i></a></li> */}
              <li><a href="https://twitter.com/_theoshi_"><i className="fa fa-twitter-square"></i></a></li>
              <li><a href="https://www.instagram.com/_theoshi_/"><i className="fa fa-instagram"></i></a></li>
              <li><a href="https://github.com/Theoshiri"><i className="fa fa-github-square"></i></a></li>
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
            <p className="bodyText italic text-[0.8rem] m-[1rem]">
              I am a 4th year student at Cal Poly Pomona pursuing a Bachelor's Degree in Computer Science.
              My interests include Music Creation, Game Design, and App Development.
            </p>
            <ul className="socials mx-[1rem] mb-[1rem]">
              {/* <li><a href="#"><i className="fa fa-facebook-square"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter-square"></i></a></li> */}
              <li><a href="https://www.instagram.com/doozykiddo/"><i className="fa fa-instagram"></i></a></li>
              <li><a href="https://github.com/DoozyKiddo"><i className="fa fa-github-square"></i></a></li>
              <li><a href="https://www.linkedin.com/in/ryan-yan/"><i className="fa fa-linkedin-square"></i></a></li>
            </ul>
          </div>

        </div>
      </section>

    </div>

    </>
  )
}

export default About