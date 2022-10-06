import React from 'react'
import './home.css'
import Button from 'react-bootstrap/Button';
import {ReactComponent as BannerArt} from '../../assets/person_thinking.svg';


function Home() {
  return (
    <>
      {/* Home */}

    <div className="space-y-100 homePage h-screen">
      <div className='flex flex-row justify-between'>

      <div className="flex flex-col py-24 px-24 w-[50%]">
        <div className="text-6xl font-bold text-black-400 text-start">
        Don't know<br/>
        <p className='strokeText'>what to make?</p>
        </div>

        <div className="text-2xl font-medium text-black-400 text-start pt-16">
        Quickly gain ideas with ideART <br/>
        and start creating again.
        </div>

        <div className="text-start pt-8">
          <Button className="bg-black text-white hover:border-[2px] hover:text-black hover:bg-transparent active:bg-[#3f3d56] active:text-white" variant="dark"> Generate an idea</Button>
        </div>
      </div>

      <BannerArt className='justify-center scale-[70%] h-[50%] w-[50%] pt-8'/>

      </div>
    </div>

    </>
  )
}

export default Home