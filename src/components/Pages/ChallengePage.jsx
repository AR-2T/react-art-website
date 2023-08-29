import React from 'react'
import './challenge.css';

function ChallengePage() {
  return (
    <>

    <div className="min-h-screen container mx-auto">

      {/* <section className="sectionBlock px-[2vmax] pt-[4vmax] pb-[2vmax]">  
        <section className="container bg-[#FFFFFF] rounded-[0.75vmax] p-[2vmax]">
          <h2 className="subHeading2 text-[#2d2d2d] text-[2vmax] text-start">
            Explore&nbsp;
            <span className="heading text-[2vmax]">
              Challenges
            </span>
          </h2>

          <button className="button text-[0.9vmax] text-[#FFFFFF] bg-[#2d2d2d] rounded-[50vmax] mt-[1vmax]">
            Most Recent<i className="fa fa-caret-down pl-[0.5vmax]"></i>
          </button>
        </section>
      </section> */}

      <section className="sectionBlock px-[2rem] pt-[4rem] pb-[2rem]">
        <section className="cardContainer">
          <h1 className="subHeadingChallenges text-start mb-[0.5rem]">
            Explore Challenges
          </h1>
          <p className="bodyText text-[1rem] text-[#2d2d2d] text-start mt-[0.5rem]">
            Weekly challenges are posted here!
          </p>

          <button className="button text-[0.9rem] text-[#FFFFFF] bg-[#2d2d2d] rounded-full mt-[1rem]">
            Most Recent<i className="fa fa-caret-down pl-[0.5vmax]"></i>
          </button>
        </section>
      </section>

      <section className="sectionBlock px-[2rem] pb-[6rem]">
        <section className="cardContainer flex flex-col items-center">
          <div className="gridSystem w-[100%]">
            <div className="challengeContainer">
              <img src={require('../../assets/HNHecarimFull.jpg')} class="challContainerImg"/>
              {/* <h1 className="subHeading2 z-[1] text-[#FFFFFF] text-[1vmax] bg-black p-[1vmax] relative">
                Challenge Name
              </h1> */}
              <div className="labelContainer text-[#FFFFFF] pb-[0.5vmax] z-[2]">
                Challenge Prompt
              </div>
            </div>

            <div className="challengeContainer">
              <img src={require('../../assets/BALuxFull.jpg')} class="challContainerImg"/>
              {/* <h1 className="subHeading2 z-[1] text-[#FFFFFF] text-[1vmax] bg-black p-[1vmax] relative">
                Challenge Name
              </h1> */}
              <div className="labelContainer text-[#FFFFFF] pb-[0.5vmax] z-[2]">
                Challenge Prompt
              </div>
            </div>

            <div className="challengeContainer">
              <img src={require('../../assets/DSIreliaFull.jpg')} class="challContainerImg"/>
              {/* <h1 className="subHeading2 z-[1] text-[#FFFFFF] text-[1vmax] bg-black p-[1vmax] relative">
                Challenge Name
              </h1> */}
              <div className="labelContainer text-[#FFFFFF] pb-[0.5vmax] z-[2]">
                Challenge Prompt
              </div>
            </div>

            <div className="challengeContainer">
              <img src={require('../../assets/CosmicVarusFull.jpg')} class="challContainerImg"/>
              {/* <h1 className="subHeading2 z-[1] text-[#FFFFFF] text-[1vmax] bg-black p-[1vmax] relative">
                Challenge Name
              </h1> */}
              <div className="labelContainer text-[#FFFFFF] pb-[0.5vmax] z-[2]">
                Challenge Prompt
              </div>
            </div>

            <div className="challengeContainer">
              <img src={require('../../assets/SGSamira.jpg')} class="challContainerImg"/>
              {/* <h1 className="subHeading2 z-[1] text-[#FFFFFF] text-[1vmax] bg-black p-[1vmax] relative">
                Challenge Name
              </h1> */}
              <div className="labelContainer text-[#FFFFFF] pb-[0.5vmax] z-[2]">
                Challenge Prompt
              </div>
            </div>

            <div className="challengeContainer">
              <img src={require('../../assets/BAWukong.jpg')} class="challContainerImg"/>
              {/* <h1 className="subHeading2 z-[1] text-[#FFFFFF] text-[1vmax] bg-black p-[1vmax] relative">
                Challenge Name
              </h1> */}
              <div className="labelContainer text-[#FFFFFF] pb-[0.5vmax] z-[2]">
                Challenge Prompt
              </div>
            </div>

          </div>
        </section>
      </section>

    </div>

    </>
  )
}

export default ChallengePage