import React, {useState} from 'react'
import './home.css'
import Button from 'react-bootstrap/Button';
import {ReactComponent as BannerArt} from '../../assets/person_thinking.svg';

function Home() {
  const [randomIdea, generateIdea] = useState(null);
  const [filter,setFilter] = useState(null);
  const people = ["George Washington", "Abraham Lincoln", "Grant MacDonald", "Aaron Do"];
  const places = ["Paris", "New York", "Japan", "Los Angeles", "Miami", "Dubai", "London"];
  const objects = ["Pen", "Pineapple", "Apple"];
  const everything = [].concat(people, places, objects);
  const getRandomIdea = () => {
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

    <div className="homePage min-h-screen">
      <div className='flex flex-row justify-between'>

        <div className="flex flex-col py-24 px-24 w-[60%]">
          <div className="headingHome text-start">
            Don't know
            <p className="strokeHome">what to make?</p>
          </div>

          <div className="subHeadingHome text-start pt-14">
            Quickly gain ideas with ideART's randomly generated topics and start creating again.
          </div>

          <div className="form-group">
            <div className="bodyTextHome text-start pt-20 pb-3 font-bold">
              Topic Selection
            </div>

            <div className="flex flex-row">
              <select className='form-select mr-5 w-[40%]' value={filter} onChange={(evt)=>setFilter(evt.target.value)}>
                <option value={"Everything"}>Everything</option>
                <option value={"Person"}>Person</option>
                <option value={"Place"}>Place</option>
                <option value={"Object"}>Object</option>
              </select>

              <Button onClick={() => getRandomIdea()} className="generateIdeaButton ml-5 w-[25%] bg-zinc-800 text-white border-transparent">Generate an idea</Button>
              {/* <Button onClick={() => getRandomIdea()} className="ml-5 w-[40%] bg-black text-white hover:border-[2px] hover:text-black hover:bg-transparent active:bg-[#3f3d56] active:text-white" variant="dark"> Generate an idea</Button> */}
            </div>

            <p data-testid="idea">{randomIdea}</p>

          </div>

          <div className="hidden">
            <span data-testid="sum1">{everything.length}</span>
            <span data-testid="sum2">{people.length + places.length + objects.length}</span>
            <span data-testid="filter">{filter}</span>
          </div>
          
        </div>


        <div className="flex flex-col py-24 px-24 w-[40%]">
          <BannerArt className='justify-center scale-[100%] h-[100%] w-[100%] pt-32'/>
        </div>

      </div>
    </div>

    </>
  )
}

export default Home