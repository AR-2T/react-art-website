import React, {useState} from 'react'
import './home.css'
import Button from 'react-bootstrap/Button';
import {ReactComponent as BannerArt} from '../../assets/person_thinking.svg';

function Home() {
  const [randomIdea, generateIdea] = useState(null);
  const [filter,setFilter] = useState(null);
  const getRandomIdea = () => {
    let people = ["George Washington", "Abraham Lincoln", "Grant MacDonald"]
    let places = ["Paris", "New York", "Japan"]
    let objects = ["Pen", "Pineapple", "Apple"]
    let everything = [].concat(people, places, objects)
    switch(filter) {
      case "Person":
        generateIdea(people[Math.floor(Math.random() * people.length)])
        break
      case "Place":
        generateIdea(places[Math.floor(Math.random() * places.length)])
        break
      case "Object":
        generateIdea(objects[Math.floor(Math.random() * objects.length)])
        break
      default:
        generateIdea(everything[Math.floor(Math.random() * everything.length)])
    }
  }
  return (
    <>
      {/* Home */}

    <div className="space-y-100 homePage h-screen">
      <div className='flex flex-row justify-between'>

      <div className="flex flex-col py-24 px-24 w-[50%]">
        <div className="text-6xl font-bold text-black-400 text-start">
        Don't know
        <p className='strokeText'>what to make?</p>
        </div>

        <div className="text-2xl font-medium text-black-400 text-start pt-16">
        Quickly gain ideas with ideART <br/>
        and start creating again.
        </div>

        <div className="text-start pt-8">
          <Button onClick={() => getRandomIdea()} className="bg-black text-white hover:border-[2px] hover:text-black hover:bg-transparent active:bg-[#3f3d56] active:text-white" variant="dark"> Generate an idea</Button>
          <div className='form-group'>
            <label htmlFor="">Select Filters</label>
              <select className='form-select' value={filter} onChange={(evt)=>setFilter(evt.target.value)}>
              <option value={"Everything"}>Everything</option>
                 <option value={"Person"}>Person</option>
                <option value={"Place"}>Place</option>
                <option value={"Object"}>Object</option>
             </select>           
       </div>
          <p>{randomIdea}</p>
        </div>
      </div>

      <BannerArt className='justify-center scale-[70%] h-[50%] w-[50%] pt-8'/>

      </div>
    </div>

    </>
  )
}

export default Home