import React, {useState} from 'react'
import './home.css'
import Button from 'react-bootstrap/Button';
import {ReactComponent as BannerArt} from '../../assets/person_thinking.svg';
import bannerArt from '../../assets/People.png';

function Home() {
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
    
    {/* Top Header */}
      <section className="sectionBlock px-[2vmax] py-[10vmax] flex flex-row justify-center">  
        <section className="block1 w-[50%]">
          <h1 className="headingHome text-start">
            <p>Don't know <br/> what to make?</p>
          </h1>

          <h2 className="subHeading2 text-[1.5vmax] text-[#2d2d2d] text-start py-[2vmax]">
            Quickly gain ideas with ideART's randomly generated topics and start creating again.
          </h2>

          <button className="button text-[1.25vmax] text-[#FFFFFF] bg-[#2d2d2d] rounded-[50vmax]">
            Start Now<i className="fa fa-arrow-right pl-[0.5vmax]"></i>
          </button>
        </section>
        
        <section className="block2 w-[50%]">
          <img src={bannerArt} alt="Front Artwork" class="justify-center scale-[125%]"/>
        </section>
      </section>

    {/* Info blocks */}
      <section className="sectionBlock p-[2vmax] relative">  
        <section className="container bg-[#FFFFFF]/50 rounded-[0.75vmax] p-[2vmax] z-[1] relative">
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

        <section className="container bg-[#FFFFFF]/50 rounded-[0.75vmax] p-[2vmax] mt-[2vmax] z-[1] relative">
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

        <div class="absolute top-[25%] right-[30%] w-[25vmax] h-[25vmax] bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-60  animate-blob"></div>
        <div class="absolute top-[25%] left-[10%] w-[25vmax] h-[25vmax] bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-60  animate-blob"></div>
        <div class="absolute bottom-[0] right-[10%] w-[25vmax] h-[25vmax] bg-blue-400 rounded-full mix-blend-multiply filter blur-xl  opacity-60  animate-blob animation-delay-4000"></div>
        <div class="absolute bottom-[0] left-[30%] w-[25vmax] h-[25vmax] bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-60  animate-blob animation-delay-8000"></div>
      
      </section>








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

    </div>

    </>
  )
}

export default Home