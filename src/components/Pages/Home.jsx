import React, {useState} from 'react'
import './home.css'
import Button from 'react-bootstrap/Button';
import {ReactComponent as BannerArt} from '../../assets/person_thinking.svg';

function Home() {
  const [randomIdea, generateIdea] = useState(null);
  const [filter,setFilter] = useState(null);
  const people = ["George Washington", "Abraham Lincoln", "Grant MacDonald", "Albert Einstein", "Helen Keller", "Vincent Van Gogh", "Taylor Swift", "Ariana Grande", "Billie Eilish", "The Beatles", "The Weeknd"];
  const places = ["Paris", "New York", "Japan", "Los Angeles", "Miami", "Dubai", "London", "Maui", "Rome", "Turls & Caicos", "Tokyo", "Grand Canyon", "Yosemite", "Rio de Janeiro"];
  const objects = ["Pen", "Pineapple", "Apple", "Cellphone", "Helmet", "Dollar", "Quarter", "Penny", "Shirt", "Dress", "CD", "Laptop", "Tablet", "Pencil", "Glasses", "Fork", "Spoon", "Toothbrush", "Sweater"];
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
    
    <div className="homePageBackdrop min-h-screen">
      <section className="sectionContainer flex flex-row">
        <section className="sectionContainer  w-[50%]">
          <h1 className="titleHome text-start mt-[5vmax] mx-[5vmax]">
            Don't know
            <h1 className="strokeHome">what to make?</h1>
          </h1>
          <h2 className="subTitleHome text-start mt-[3vmax] ml-[5vmax] mr-[10vmax]">
            Quickly gain ideas with ideART's randomly generated topics and start creating again.
          </h2>

          <div className="selectGroup">
            <div className="bodyTextHome text-start mt-[4vmax] mb-[0.5vmax] ml-[5vmax]">
              Topic Selection
            </div>

            <div className="flex flex-row">
              <select className='form-select ml-[5vmax] w-[40%]' value={filter} onChange={(evt)=>setFilter(evt.target.value)}>
                <option value={"Everything"}>Everything</option>
                <option value={"Person"}>Person</option>
                <option value={"Place"}>Place</option>
                <option value={"Object"}>Object</option>
              </select>

              <Button onClick={() => getRandomIdea()} className="generateIdeaButton ml-[1vmax] w-[30%] bg-[#3F3D56] border-transparent">Generate an idea</Button>
              {/* <Button onClick={() => getRandomIdea()} className="ml-5 w-[40%] bg-black text-white hover:border-[2px] hover:text-black hover:bg-transparent active:bg-[#3f3d56] active:text-white" variant="dark"> Generate an idea</Button> */}
            </div>

            <div className="selectedTopic mt-[1vmax] mb-[6vmax] ml-[5vmax] w-[72%]">
              {randomIdea}
            </div>
          </div>

        </section>

        <section className="sectionContainer w-[50%]">
          <BannerArt className="justify-center scale-[100%] h-[100%] w-[100%] pr-[5vmax]"/>
        </section>

      </section>

      <section className="sectionContainer p-4 bg-[#000000] bg-opacity-25">
        <h1 className="headerTitle lg:pt-12 md:pt-8 sm:pt-4">
          What is ideArt?
        </h1>
        <p className="headerSubText px-16 lg:pb-12 md:pb-8 sm:pb-4">
        IdeArt is a community-driven service that seeks to provide members with a self-sustaining flow of inspiration and new ideas.
        </p>
      </section>
    </div>

    </>
  )
}

export default Home