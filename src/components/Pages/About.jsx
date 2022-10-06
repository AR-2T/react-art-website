import React from 'react'

function About() {
  return (
    <>

    <div className="space-y-100">

      {/* Mission Statement */}
      <dgroup>
        <div className="text-4xl font-bold font-sans underline text-black-400 py-4">
          MISSION STATEMENT
        </div>
        <div className="leading-tight px-80 font-sans">
          From the beginning, our mission has been to offer creative thinkers, artists, and more accessibility and ease to find topics, prompts, etc. that they can reference for find inspiration from. AR2T hopes to create a comfortable, useful and relaxing service for all users along with our best services.
        </div>
      </dgroup>

      {/* About Us */}
      <dgroup>
        <div className="text-4xl font-bold font-sans underline text-black-400 py-4">
          OUR TEAM
        </div>
        <div className="grid grid-cols-4 gap-16 font-sans">
          
          {/* Aaron's Information */}
          <dgroup>
            <div className = "text-2xl font-bold">Aaron Do</div>
          </dgroup>

          {/* Rob's Information */}
          <dgroup>
            <div className = "text-2xl font-bold">Robert Balatbat</div>
            <div className = "font-italic">Robert enjoys playing League of Legends with his 5-stack.</div>
          </dgroup>

          {/* Theo's Information */}
          <dgroup>
            <div className = "text-2xl font-bold">Theodore Tran</div>
            <div className = "font-italic">Theodore enjoys drinking copious amounts of boba while trying to grind out of being hardstuck Platinum in Valorant.</div>
          </dgroup>

          {/* Ryan's Information */}
          <dgroup>
            <div className = "text-2xl font-bold">Ryan Yan</div>
            <div className = "font-italic"></div>
          </dgroup>

        </div>
      </dgroup>
      
    </div>

    </>
  )
}

export default About