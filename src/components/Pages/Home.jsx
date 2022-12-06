import React from 'react';
import './home.css';
import img1 from '../../assets/People.png';
import img2 from '../../assets/Group.png';
import img3 from '../../assets/LaptopGroup.png';
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  function redirectToProfile(){
    navigate("/profile");
  }
  function redirectToAbout(){
    navigate("/about");
  }

  return (
    <>

    <div className="defaultBackground min-h-screen">

      <section className="sectionBlock px-[2rem] pt-[8rem] pb-[6rem]">
        <div className="blockGridSystem homeSec1">

          <section className="headerSec1">
            <h1 className="headingHome text-start">
              Don't know <br/> what to make?
            </h1>

            <h2 className="subHeading2 text-[1.35rem] text-[#2d2d2d] text-start py-[1.75rem]">
              Quickly gain ideas with ideART's randomly generated topics and start creating again.
            </h2>

            <button onClick={redirectToProfile} className="button text-[1rem] text-[#FFFFFF] bg-[#2d2d2d] rounded-full">
              Start Now
              <svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true" fill='white'>
                <g fill-rule="evenodd">         
                    <path class="HoverArrow__linePath" d="M0 5h7" ></path>
                    <path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path>
                </g>
              </svg>
            </button>
          </section>

          <section className="imgDisplay">
            <img src={img1} alt="Artwork" class="imageArtwork"/>
          </section>

        </div>
      </section>

      <section className="sectionBlock px-[2rem] pb-[6rem]">
        <div className="blockGridSystem homeSec2">

          <section className="imgDisplay2">
            <img src={img2} alt="Artwork" class="imageArtwork"/>
          </section>

          <section className="ideArtInfo">
            <h1 className="subHeading text-[#2d2d2d] text-[1.75rem] text-start mb-[1rem]">
              What is ideArt?
            </h1>

            <p className="bodyText text-[#2d2d2d] text-[1rem] text-start mb-[0.75rem]">
              ideArt is a community-driven service that seeks to provide users with a self-sustaining 
              flow of inspiration and new ideas. With our randomly generated topics/prompts, users can 
              reference and create art pieces based on the given inspo.
            </p>

            <p className="bodyText text-[#2d2d2d] text-[1rem] text-start">
              We also are an online social network platform that exhibits, promotes, and shares artists' 
              works to our art-centric community.
            </p>
          </section>

          <section className="moreInfo align-middle">
            <h1 className="subHeading text-[#2d2d2d] text-[1.75rem] text-start mb-[1rem]">
              Our Goals
            </h1>

            <p className="bodyText text-[#2d2d2d] text-[1rem] text-start mb-[4rem]">
              ideArt's mission is to help artists and creators alike find enriching, engaging topics they can
                pull inspiration from. The ideART team hopes to spark the creativity of those who use our
                products and guide users to new artistic heights.
            </p>

            <h1 className="subHeading text-[#2d2d2d] text-[1.75rem] text-start mb-[1rem]">
              Learn More About Us
            </h1>

            <p className="bodyText text-[#2d2d2d] text-[1rem] text-start">
              Want to learn more about the team behind ideART? Click the redirect button below!
            </p>

            <button onClick={redirectToAbout} className="button text-[0.9rem] text-[#FFFFFF] bg-[#2d2d2d] rounded-full mt-[1.75rem]">
              Learn More
              <svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true" fill='white'>
                <g fill-rule="evenodd">         
                    <path class="HoverArrow__linePath" d="M0 5h7" ></path>
                    <path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path>
                </g>
              </svg>
            </button>
          </section>

          <section className="imgDisplay3">
            <img src={img3} alt="Artwork" class="imageArtwork2"/>
          </section>

        </div>
      </section>

      {/* <section className="sectionBlock px-[2rem] pb-[6rem]">
        <div className="blockGridSystem homeSec3 gap-[2rem]">
          
          <section className="cardContainer">
            <p className="bodyText text-[#2d2d2d] text-[1rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, repudiandae.
            </p>
          </section>

          <section className="cardContainer">
            <p className="bodyText text-[#2d2d2d] text-[1rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, repudiandae.
            </p>
          </section>

          <section className="cardContainer">
            <p className="bodyText text-[#2d2d2d] text-[1rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, repudiandae.
            </p>
          </section>

        </div>
      </section> */}

    </div>
    
   

    </>
  )
}

export default Home