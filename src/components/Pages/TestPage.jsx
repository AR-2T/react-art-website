import React from 'react'
import './testPage.css';

import bannerArt from '../../assets/People.png';

function TestPage() {
  return (
    <>

        <div className="testPageBackdrop min-h-screen">

          <section className="sectionContainerS flex flex-row justify-center">
            <section className="sectionContainerS2 my-[10vmax]">
              <h1 className="titleHome2 text-start">
                <p>Don't know <br/> what to make?</p>
              </h1>

              <h2 className="subTitleHome2 text-start py-[2vmax]">
                Quickly gain ideas with ideART's randomly generated topics and start creating again.
              </h2>

              <button className="redirectGen bg-[#404040]">
                Start Now<i className="fa fa-arrow-right pl-[0.5vmax]"></i>
              </button>
            </section>

            <section className="artContainer text-finish my-[10vmax]">
              {/* <bannerArt className="justify-center scale-[100%] h-[100%] w-[100%]"/> */}
              <img src={bannerArt} alt="Main Card" class="justify-center scale-[125%]"/>
            </section>
          </section>

          {/* <section className="sectionContainerS flex flex-column justify-start mb-[10vmax]">
            <section className="container p-[2vmax]">
              <h1 className="subTitleHome2 font-bold text-start w-[100%]">
                  What is ideArt?
              </h1>
              <section className="bodyContainer flex">
                <p className="bodyTextHome2 text-start mt-[1vmax] mr-[1vmax]">
                  ideArt is a community-driven service that seeks to provide users with a self-sustaining 
                  flow of inspiration and new ideas. With our randomly generated topics/prompts, users can 
                  reference and create art pieces based on the given inspo.

                </p>
                <p className="bodyTextHome2 text-start mt-[1vmax]">
                  We also are an online social network platform that exhibits, promotes, and shares artists' 
                  works to our art-centric community.
                </p>
              </section>
            </section>
          </section> */}


          <section className="sectionContainer relative">
           
            <section className="sectionContainerS relative z-[1] my-[3vmax]">
              <section className="container p-[2vmax]">
                <h1 className="subTitleHome2 font-bold text-[2vmax] text-start w-[100%] mb-[0.5vmax]">
                  What is ideArt?
                </h1>
                <div className="evenLengthColumns">
                  <p className="bodyTextHome2 text-start mr-[1vmax] my-[0.5vmax]">
                    ideArt is a community-driven service that seeks to provide users with a self-sustaining 
                    flow of inspiration and new ideas. With our randomly generated topics/prompts, users can 
                    reference and create art pieces based on the given inspo.
                  </p>
                  <p className="bodyTextHome2 text-start my-[0.5vmax]">
                    We also are an online social network platform that exhibits, promotes, and shares artists' 
                    works to our art-centric community.
                  </p>
                </div>
              </section>
            </section>

            <section className="sectionContainerS relative z-[1] mt-[3vmax]">
              <section className="container p-[2vmax]">
                <h1 className="subTitleHome2 font-bold text-[2vmax] text-start w-[100%] mb-[0.5vmax]">
                  Learn More About Us
                </h1>
                <div className="evenLengthColumns">
                  <section className="bodyTextHome2 text-start mr-[1vmax] my-[0.5vmax]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, totam.
                  </section>
                  <section className="bodyTextHome2 text-start mr-[1vmax] my-[0.5vmax]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis veniam, culpa expedita architecto aspernatur doloribus?
                  </section>
                  <section className="bodyTextHome2 text-start my-[0.5vmax]">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, error. Quas eaque suscipit dolor, consequuntur expedita ducimus cupiditate repudiandae harum.
                  </section>
                </div>
              </section>
            </section>

            <div class="absolute top-[25%] right-[30%] w-[25vmax] h-[25vmax] bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-60  animate-blob"></div>
            <div class="absolute top-[25%] left-[10%] w-[25vmax] h-[25vmax] bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-60  animate-blob"></div>
            <div class="absolute bottom-[0] right-[10%] w-[25vmax] h-[25vmax] bg-blue-400 rounded-full mix-blend-multiply filter blur-xl  opacity-60  animate-blob animation-delay-4000"></div>
            <div class="absolute bottom-[0] left-[30%] w-[25vmax] h-[25vmax] bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-60  animate-blob animation-delay-8000"></div>

          </section>

          {/* <section className="pageFooter">
            <i className="fa fa-copyright pr-[0.1vmax]"></i> 2022 AR²T. All rights reserved.
          </section> */}

        </div>
    </>
  )
}

export default TestPage