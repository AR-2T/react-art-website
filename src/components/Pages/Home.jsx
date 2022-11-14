import React from 'react';
import './home.css';
import Button from 'react-bootstrap/Button';
import {ReactComponent as BannerArt} from '../../assets/person_thinking.svg';
import bannerArt from '../../assets/People.png';

function Home() {
  return (
    <>
    
    <div className="defaultBackground min-h-screen">
    
    {/* Top Header */}
      <section className="sectionBlock px-[2vmax] py-[10vmax] flex flex-row justify-center">  
        <section className="blockHome1 w-[50%] mr-[1vmax]">
          <h1 className="headingHome text-start">
            Don't know <br/> what to make?
          </h1>

          <h2 className="subHeading2 text-[1.5vmax] text-[#2d2d2d] text-start py-[2vmax] subHeadingHome">
            Quickly gain ideas with ideART's randomly generated topics and start creating again.
          </h2>

          <button className="button text-[1.25vmax] text-[#FFFFFF] bg-[#2d2d2d] rounded-full startButton">
            Start Now
            <svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true" fill='white'>
                <g fill-rule="evenodd">         
                    <path class="HoverArrow__linePath" d="M0 5h7" ></path>
                    <path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path>
                </g>
              </svg>
          </button>
        </section>
        
        <section className="blockHome2 w-[50%] ml-[1vmax]">
          <img src={bannerArt} alt="Front Artwork" class="justify-center scale-[125%]"/>
        </section>
      </section>

    {/* Info blocks */}
      <section className="sectionBlock p-[2vmax] relative">  
        <section className="container bg-[#FFFFFF]/50 rounded-[0.75vmax] p-[2vmax] z-[1] relative hover:scale-105">
          <h1 className="subHeading text-[#2d2d2d] text-[2vmax] text-start mb-[0.5vmax]">
            What is ideArt?
          </h1>

          <div className="evenLengthColumns">
            <p className="bodyText text-[#2d2d2d] text-[1.1vmax] text-start mr-[2vmax] mt-[0.5vmax]">
              ideArt is a community-driven service that seeks to provide users with a self-sustaining 
              flow of inspiration and new ideas. With our randomly generated topics/prompts, users can 
              reference and create art pieces based on the given inspo.
            </p>

            <p className="bodyText text-[#2d2d2d] text-[1.1vmax] text-start mt-[0.5vmax]">
              We also are an online social network platform that exhibits, promotes, and shares artists' 
              works to our art-centric community.
            </p>
          </div>
        </section>

        <section className="container bg-[#FFFFFF]/50 rounded-[0.75vmax] p-[2vmax] mt-[3vmax] z-[1] relative hover:scale-105">
          <h1 className="subHeading text-[#2d2d2d] text-[2vmax] text-start mb-[0.5vmax]">
            Learn More About Us
          </h1>

          <div className="evenLengthColumns">
            <p className="bodyText text-[#2d2d2d] text-[1.1vmax] text-start mr-[2vmax] mt-[0.5vmax]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur ut fuga enim soluta pariatur, laborum cumque quis quas ex illum!
            </p>

            <p className="bodyText text-[#2d2d2d] text-[1.1vmax] text-start mr-[2vmax] mt-[0.5vmax]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et corrupti illum amet sint quidem error.
            </p>
            
            <p className="bodyText text-[#2d2d2d] text-[1.1vmax] text-start mt-[0.5vmax]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et corrupti illum amet sint quidem error.
            </p>
          </div>
        </section>

        <section>
          <div class="absolute top-[25%] right-[30%] w-[25vmax] h-[25vmax] bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-60  animate-blob animation-delay-2000"></div>
          <div class="absolute top-[25%] left-[10%] w-[25vmax] h-[25vmax] bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-60  animate-blob animation-delay-5000"></div>
          <div class="absolute bottom-[0] right-[10%] w-[25vmax] h-[25vmax] bg-blue-400 rounded-full mix-blend-multiply filter blur-xl  opacity-60  animate-blob animation-delay-4000"></div>
          <div class="absolute bottom-[0] left-[30%] w-[25vmax] h-[25vmax] bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-60  animate-blob animation-delay-7000"></div>
        </section>

      </section>

    </div>

    </>
  )
}

export default Home