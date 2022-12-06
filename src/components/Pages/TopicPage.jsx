import React, {useState, useEffect} from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { ArtIdea, FilterType } from './models';
import Button from 'react-bootstrap/Button';
import './topicPage.css';

function TopicPage() {
  const [databaseIdeas, setDatabaseIdeas] = useState([]);
  const [randomIdea, generateIdea] = useState(null);
  const [filterGetIdea,setFilterGetIdea] = useState(null);
  const [filterSubmitIdea,setFilterSubmitIdea] = useState(null);
  const [submitRandomIdea, setSubmitRandomIdea] = useState(null);
  const [submitIdeaMessage, setSubmitIdeaMessage] = useState(null);

  async function fetchIdeas() {
    const models = await DataStore.query(ArtIdea);
    if (models !== undefined) setDatabaseIdeas(models);
    console.log(models);
  }

  useEffect(()=> {
    fetchIdeas()
  }, [])

  var people = [], places = [], objects = [], animals = [], concepts = [];
  var adverbs = [" aggressively", " casually", " quickly", " hastily", " slowly", " cautiously", " hesitantly", " clumsily", " carefully", " creepily"]
  var verbs = [" eating in ", " swimming in ", " sitting in ", " taking a stroll in ", " wandering around ", " crying in ", " laughing in ", " smiling in ", " frowning in ", " relaxing in ", " frolicking in ", " admiring a picture of ", " tiptoeing around ", " sneaking around "];
  var connectors = [" in the presence of ", " with ", " surrounded by ", " while staring at ", " accompanied by ", " joined by ", " while holding ", " while writing a poem about ", " while singing a song about ", " while publishing a paper on ", " while presenting a speech on "];

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
        concepts = concepts.concat(databaseIdeas[i].idea)
        break
      default:

    }
  }

  var everything = [].concat(people, places, objects, animals, concepts);
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
      case "Concept":
        generateIdea(concepts[Math.floor(Math.random() * concepts.length)])
        break
      case "Scenario":
        var scenarioType = Math.floor(Math.random() * 4);
        switch(scenarioType) {
          case 0:
            generateIdea(people[Math.floor(Math.random() * people.length)] + verbs[Math.floor(Math.random() * verbs.length)] + places[Math.floor(Math.random() * places.length)])
            break
          case 1:
            generateIdea(people[Math.floor(Math.random() * people.length)] + adverbs[Math.floor(Math.random() * adverbs.length)] + verbs[Math.floor(Math.random() * verbs.length)] + places[Math.floor(Math.random() * places.length)] + connectors[Math.floor(Math.random() * connectors.length)] + objects[Math.floor(Math.random() * objects.length)].toLowerCase())
            break
          case 2:
            generateIdea(people[Math.floor(Math.random() * people.length)] + adverbs[Math.floor(Math.random() * adverbs.length)]  + verbs[Math.floor(Math.random() * verbs.length)] + places[Math.floor(Math.random() * places.length)])
            break
          case 3:
            generateIdea(people[Math.floor(Math.random() * people.length)] + verbs[Math.floor(Math.random() * verbs.length)] + places[Math.floor(Math.random() * places.length)] + connectors[Math.floor(Math.random() * connectors.length)] + objects[Math.floor(Math.random() * objects.length)].toLowerCase())
            break
          default:

        }
        break
      default:
        generateIdea(everything[Math.floor(Math.random() * everything.length)])
    }
  }

  async function submitIdea() {
    if (submitRandomIdea === "" || submitRandomIdea === null) {
      setSubmitIdeaMessage("Please enter your idea in the text box before submitting it!");
      return;
    }
    switch(filterSubmitIdea) {
      case "Person":
        await DataStore.save(
          new ArtIdea({
          "idea": submitRandomIdea,
          "filter": FilterType.PEOPLE
          })
        );
        setSubmitIdeaMessage("Successfully submitted the idea \"" + submitRandomIdea + "\" to the " + filterSubmitIdea + " category.");
        break
      case "Place":
        await DataStore.save(
          new ArtIdea({
          "idea": submitRandomIdea,
          "filter": FilterType.PLACES
          })
        );
        setSubmitIdeaMessage("Successfully submitted the idea \"" + submitRandomIdea + "\" to the " + filterSubmitIdea + " category.");
        break
      case "Object":
        await DataStore.save(
          new ArtIdea({
          "idea": submitRandomIdea,
          "filter": FilterType.OBJECTS
          })
        );
        setSubmitIdeaMessage("Successfully submitted the idea \"" + submitRandomIdea + "\" to the " + filterSubmitIdea + " category.");
        break
      case "Animal":
        await DataStore.save(
          new ArtIdea({
          "idea": submitRandomIdea,
          "filter": FilterType.ANIMALS
          })
        );
        setSubmitIdeaMessage("Successfully submitted the idea \"" + submitRandomIdea + "\" to the " + filterSubmitIdea + " category.");
        break
      case "Concept":
        await DataStore.save(
          new ArtIdea({
          "idea": submitRandomIdea,
          "filter": FilterType.IDEAS
          })
        );
        setSubmitIdeaMessage("Successfully submitted the idea \"" + submitRandomIdea + "\" to the " + filterSubmitIdea + " category.");
        break
      default:
        setSubmitIdeaMessage("Please choose a category before submitting your idea!");
    }
  }

  return (
      <>

      <div className="defaultBackground min-h-screen w-full">
      
        <section className="sectionBlock px-[2rem] pt-[4rem] pb-[2rem]">

          <div className="blockGridSystem topicSec1 gap-[2rem]">

            <section className="cardContainer">
              <h1 className="subHeadingTopicGen text-start mb-[0.5rem]">
                Topic Generation
              </h1>
              <p className="bodyText text-[1rem] text-[#2d2d2d] text-start mt-[0.5rem]">
                Need an idea for your next creative endeavor?<br/>
                Simply select a category below to generate a topic.
              </p>

              <div className="flex flex-row mt-[1rem]">
                <select className='form-select rounded-full w-[65%]' value={filterGetIdea} onChange={(evt)=>setFilterGetIdea(evt.target.value)}>
                  <option value={"Random"}>Random</option>
                  <option value={"Person"}>Person</option>
                  <option value={"Place"}>Place</option>
                  <option value={"Object"}>Object</option>
                  <option value={"Animal"}>Animal</option>
                  <option value={"Concept"}>Concept</option>
                  <option value={"Scenario"}>Scenario</option>
                </select>

                <Button onClick={() => getRandomIdea()} className="generateIdeaButton ml-[1rem] w-[35%] bg-[#2d2d2d] border-transparent rounded-full md:text-[1rem] text-[0.6rem]">Generate</Button>
              </div>

              <div className="cardContainer mt-[1rem] align-text-top">
                {randomIdea}
              </div>
            </section>

            <section className="cardContainer">
              <h1 className="subHeadingTopicGen2 text-start mb-[0.5rem]">
                Suggest Topics
              </h1>
              <p className="bodyText text-[1rem] text-[#2d2d2d] text-start mt-[0.5rem]">
                Got an idea you don't see in our random generator? Suggest it below!
              </p>

              <div>
                <textarea className='form-select mt-[1rem]' value={submitRandomIdea} onChange={(evt)=>setSubmitRandomIdea(evt.target.value)} />
              </div> 

            <div className="flex flex-row mt-[1rem]">
              <select className='form-select rounded-full w-[65%]' value={filterSubmitIdea} onChange={(evt)=>setFilterSubmitIdea(evt.target.value)}>
                <option value={"Choose a category"}>Choose a category</option>
                <option value={"Person"}>Person</option>
                <option value={"Place"}>Place</option>
                <option value={"Object"}>Object</option>
                <option value={"Animal"}>Animal</option>
                <option value={"Concept"}>Concept</option>
              </select>

              <Button onClick={() => submitIdea()} className="generateIdeaButton ml-[1rem] w-[35%] bg-[#2d2d2d] border-transparent rounded-full md:text-[1rem] text-[0.75rem]">Submit</Button>
            </div>

            <div className="submitMessage italic text-[0.85rem] mt-[1rem]">
              {submitIdeaMessage}
            </div>

            </section>

          </div>

        </section>
          
      </div>

    </>
  )
}

export default TopicPage