import React, {useState, useEffect} from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { ArtIdea } from './models';
import Button from 'react-bootstrap/Button';
import './testPage.css';
import img1 from '../../assets/People.png';
import img2 from '../../assets/Group.png';
import styled from 'styled-components';

//sending ideas still doesnt fully work btw

function TestPage() {
  const [databaseIdeas, setDatabaseIdeas] = useState([]);
  const [randomIdea, generateIdea] = useState(null);
  const [filterGetIdea,setFilterGetIdea] = useState(null);
  const [filterSendIdea,setFilterSendIdea] = useState(null);
  const [sendRandomIdea, setSendRandomIdea] = useState(null);
  const inputProps = useInput();

  async function fetchIdeas() {
    const models = await DataStore.query(ArtIdea);
    if (models !== undefined) setDatabaseIdeas(models);
    console.log(models);
  }

  useEffect(()=> {
    fetchIdeas()
  }, [])

  var people = [], places = [], objects = [], animals = [], ideas = [];

  for (let i = 0; i < databaseIdeas.length; i++) {
    switch(databaseIdeas[i].filter) {
      case "PEOPLE":
        people = people.concat(databaseIdeas[i].idea)
        break
      case "PLACES":
        places = places.concat(databaseIdeas[i].idea)
        break
      case "OBJECTS":
        objects = objects.concat(databaseIdeas[i].idea)
        break
      case "ANIMALS":
        animals = animals.concat(databaseIdeas[i].idea)
        break
      case "IDEAS":
        ideas = ideas.concat(databaseIdeas[i].idea)
        break
    }
  }

  var everything = [].concat(people, places, objects, animals, ideas);
  const getRandomIdea = () => {
    switch(filterGetIdea) {
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
      case "Idea":
        generateIdea(ideas[Math.floor(Math.random() * ideas.length)])
        break
      default:
        generateIdea(everything[Math.floor(Math.random() * everything.length)])
    }
  }

  /* async function sendIdea() {
    switch(filterSendIdea) {
      case "Person":
        await DataStore.save(
          new ArtIdea({
          "idea": sendRandomIdea,
          "filter": FilterType.PEOPLE
        })
      );
        break
      case "Place":
        await DataStore.save(
          new ArtIdea({
          "idea": sendRandomIdea,
          "filter": FilterType.PLACES
        })
      );
        break
      case "Object":
        await DataStore.save(
          new ArtIdea({
          "idea": sendRandomIdea,
          "filter": FilterType.OBJECTS
        })
      );
        break
      case "Animal":
        await DataStore.save(
          new ArtIdea({
          "idea": sendRandomIdea,
          "filter": FilterType.ANIMALS
        })
      );
        break
      case "Idea":
        await DataStore.save(
          new ArtIdea({
          "idea": sendRandomIdea,
          "filter": FilterType.IDEAS
        })
      );
        break
      default:
        
    }
  } */
  
  function useInput(defaultValue) {
    const [value, setValue] = useState(defaultValue);
    function onChange(e) {
      setValue(e.target.value);
    }
    return {
      value,
      onChange,
    };
  }

  return (
      <>
               <div className="selectGroup">
            <div className="bodyTextHome text-start mt-[4vmax] mb-[0.5vmax] ml-[5vmax]">
              Topic Selection
            </div>

            <div className="flex flex-row">
              <select className='form-select ml-[5vmax] w-[40%]' value={filterGetIdea} onChange={(evt)=>setFilterGetIdea(evt.target.value)}>
                <option value={"Everything"}>Everything</option>
                <option value={"Person"}>Person</option>
                <option value={"Place"}>Place</option>
                <option value={"Object"}>Object</option>
                <option value={"Animal"}>Animal</option>
                <option value={"Idea"}>Idea</option>
              </select>

              <Button onClick={() => getRandomIdea()} className="generateIdeaButton ml-[1vmax] w-[30%] bg-[#3F3D56] border-transparent">Generate an idea</Button>
            </div>

            <div className="selectedTopic mt-[1vmax] mb-[6vmax] ml-[5vmax] w-[72%]">
              {randomIdea}
            </div>
          </div>

          <div className="selectGroup">
            <div className="bodyTextHome text-start mt-[4vmax] mb-[0.5vmax] ml-[5vmax]">
              Topic Selection
            </div>

            {/* <div>
              <StyledInput
                {...inputProps}
                placeholder="Type in here"
              />
              <span>Value: {inputProps.value} </span>
            </div> 

            <div className="flex flex-row">
              <select className='form-select ml-[5vmax] w-[40%]' value={filterSendIdea} onChange={(evt)=>setFilterSendIdea(evt.target.value)}>
                <option value={"Choose a category"}>Choose a category</option>
                <option value={"Person"}>Person</option>
                <option value={"Place"}>Place</option>
                <option value={"Object"}>Object</option>
                <option value={"Animal"}>Animal</option>
                <option value={"Idea"}>Idea</option>
              </select>

              <Button onClick={() => sendIdea()} className="generateIdeaButton ml-[1vmax] w-[30%] bg-[#3F3D56] border-transparent">Send an idea</Button>
            </div>

            <div className="selectedTopic mt-[1vmax] mb-[6vmax] ml-[5vmax] w-[72%]">
              {randomIdea}
            </div>*/}
          </div> 

    </>
  )
}

export default TestPage