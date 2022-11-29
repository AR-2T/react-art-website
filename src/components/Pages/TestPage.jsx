import React, {useState} from 'react';
import './testPage.css';
import img1 from '../../assets/People.png';
import img2 from '../../assets/Group.png';

function TestPage() {
  const [randomIdea, generateIdea] = useState(null);
  const [filter,setFilter] = useState(null);
  const people = ["George Washington", "Abraham Lincoln", "Grant MacDonald", "Albert Einstein", "Helen Keller",
                  "Vincent Van Gogh", "Taylor Swift", "Ariana Grande", "Billie Eilish", "The Beatles", "The Weeknd",
                  "Edwin Rodriguez", "Thanh Nguyen", "Tom Holland", "Zendaya", "Chris Evans", "Jennifer Lawrence",
                  "Ryan Reynolds", "Blake Lively", "Paul Rudd", "Dwayne Johnson", "Barack Obama", "Diana, Princess of Wales"];
  const places = ["Paris", "New York", "Japan", "Los Angeles", "Miami", "Dubai", "London", "Maui", "Rome",
                  "Turls & Caicos", "Tokyo", "Grand Canyon", "Yosemite", "Rio de Janeiro", "Mexico", "Machu Picchu",
                  "Australia", "Thailand", "Turkey", "Germany", "Taj Mahal", "Singapore", "Greece", "Switzerland",
                  "Spain", "Niagara Falls", "Budapest", "India", "China", "Hong Kong", "Norway"];
  const objects = ["Pen", "Pineapple", "Apple", "Cellphone", "Helmet", "Dollar", "Quarter", "Penny", "Shirt",
                  "Dress", "CD", "Laptop", "Tablet", "Pencil", "Glasses", "Fork", "Spoon", "Toothbrush", "Sweater",
                  "TV", "Tire Swing", "Cardboard Box", "USB Drive", "Scotch Tape", "Tissue Box", "Thermometer",
                  "Blanket", "Sponge", "Doll", "Toy", "Teddy Bear", "Chair", "Couch", "Glow Sticks", "Flag",
                  "Tooth Picks", "Rubber Band", "Leg Warmers", "Shovel", "Sharpie", "Purse", "Credit Card"];
  const animals = ["Alligator", "Ant", "Armadillo", "Baboon", "Badger", "Bald Eagle", "Bee", "Cat", "Cow", "Coyote",
                  "Crab", "Cricket", "Crocodile", "Deer", "Dinosaur", "Dog", "Dolphin", "Dragonfly", "Elephant",
                  "Fish", "Flamingo", "Fox", "Goose", "Hare", "Hamster", "Husky", "Iguana", "Lobster", "Monkey",
                  "Monkey", "Mule", "Owl", "Octopus", "Panda", "Parrot", "Pelican", "Penguin", "Pig", "Pigeon",
                  "Porcupine", "Rabbit", "Rat", "Rattlesnake", "Rooster", "Seal", "Sheep", "Tiger", "Whale", "Wombat"];
  const overwatch = ["Ana", "Ashe", "Baptiste", "Bastion", "Brigitte", "Cassidy", "D.Va", "Doomfist", "Echo", "Genji",
                    "Hanzo", "Junkrat", "Lucio", "Mei", "Mercy", "Moira", "Orisa", "Pharah", "Reaper", "Reinhardt",
                    "Roadhog", "Sigma", "Soldier: 76", "Sombra", "Symmetra", "Torbjorn", "Tracer", "Widowmaker",
                    "Winston", "Wrecking Ball", "Zarya", "Zenyatta"];
  const everything = [].concat(people, places, objects, animals, overwatch);
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
      case "Animal":
        generateIdea(animals[Math.floor(Math.random() * animals.length)])
        break
      case "Overwatch":
        generateIdea(overwatch[Math.floor(Math.random() * overwatch.length)])
        break
      default:
        generateIdea(everything[Math.floor(Math.random() * everything.length)])
    }
  }
  return (
    <>

    <div className="defaultBackground min-h-screen">

      <section className="sectionBlock px-[2rem] pt-[8rem] pb-[6rem]">
        <div className="blockGridSystem homeSec1">

          <section className="headerSec1">
            <h1 className="headingHomeTemp text-start">
              Don't know <br/> what to make?
            </h1>

            <h2 className="subHeading2 text-[1.35rem] text-[#2d2d2d] text-start py-[1.75rem]">
              Quickly gain ideas with ideART's randomly generated topics and start creating again.
            </h2>

            <button className="button text-[1rem] text-[#FFFFFF] bg-[#2d2d2d] rounded-full">
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

          <section className="moreInfo">
            <h1 className="subHeading text-[#2d2d2d] text-[1.75rem] text-start mb-[1rem]">
              Learn More About Us
            </h1>

            <p className="bodyText text-[#2d2d2d] text-[1rem] text-start mb-[0.75rem]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit quasi nemo numquam modi 
              officiis nihil officia molestiae deserunt tempore nam.
            </p>

            <p className="bodyText text-[#2d2d2d] text-[1rem] text-start">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit quasi nemo numquam modi 
              officiis nihil officia molestiae deserunt tempore nam.
            </p>
          </section>

        </div>
      </section>

      <section className="sectionBlock px-[2rem] pb-[6rem]">
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
      </section>

    </div>

              {/* <div className="selectGroup">
            <div className="bodyTextHome text-start mt-[4vmax] mb-[0.5vmax] ml-[5vmax]">
              Topic Selection
            </div>

            <div className="flex flex-row">
              <select className='form-select ml-[5vmax] w-[40%]' value={filter} onChange={(evt)=>setFilter(evt.target.value)}>
                <option value={"Everything"}>Everything</option>
                <option value={"Person"}>Person</option>
                <option value={"Place"}>Place</option>
                <option value={"Object"}>Object</option>
                <option value={"Animal"}>Animal</option>
                <option value={"Overwatch"}>Overwatch</option>
              </select>

              <Button onClick={() => getRandomIdea()} className="generateIdeaButton ml-[1vmax] w-[30%] bg-[#3F3D56] border-transparent">Generate an idea</Button>
            </div>

            <div className="selectedTopic mt-[1vmax] mb-[6vmax] ml-[5vmax] w-[72%]">
              {randomIdea}
            </div>
          </div> */}


    </>
  )
}

export default TestPage