import React from 'react'
import './challenge.css';

function ChallengePage() {
  return (
    <>

    <div className="defaultBackground min-h-screen">

      <section className="sectionBlock px-[2vmax] pt-[4vmax] pb-[2vmax]">  
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
      </section>

      <section className="sectionBlock px-[2vmax]">
        <section className="container p-[1vmax] bg-[#FFFFFF] rounded-[0.75vmax] flex flex-col items-center">
          <div className="grid grid-cols-4 gap-[1vmax] w-[100%]">
            <div className="challengeContainer items-center">
              <h1 className="subHeading2 text-[#FFFFFF] text-[1vmax] p-[1vmax]">
                Challenge Name
              </h1>
            </div>
            <div className="challengeContainer items-center">
              <h1 className="subHeading2 text-[#FFFFFF] text-[1vmax] p-[1vmax]">
                Challenge Name
              </h1>
            </div>
            <div className="challengeContainer items-center">
              <h1 className="subHeading2 text-[#FFFFFF] text-[1vmax] p-[1vmax]">
                Challenge Name
              </h1>
            </div>
            <div className="challengeContainer items-center">
              <h1 className="subHeading2 text-[#FFFFFF] text-[1vmax] p-[1vmax]">
                Challenge Name
              </h1>
            </div>
            <div className="challengeContainer items-center">
              <h1 className="subHeading2 text-[#FFFFFF] text-[1vmax] p-[1vmax]">
                Challenge Name
              </h1>
            </div>
          </div>
        </section>
      </section>

    </div>

    </>
  )
}

export default ChallengePage