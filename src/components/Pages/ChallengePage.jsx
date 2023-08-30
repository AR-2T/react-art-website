import React, { useEffect, useState } from 'react'
import './challenge.css';
import { API } from "aws-amplify";
import { listChallengePages, getChallengePage } from "../../graphql/queries";
import { Link } from 'react-router-dom'

function ChallengePage() {
  const [challengePages, setChallengePage] = useState([])
  // List all items

  async function allChallengePages() {
    const allChallengePages = await API.graphql({
      query: listChallengePages
    });
    if (allChallengePages !== undefined) {
      setChallengePage(allChallengePages.data.listChallengePages.items)
      console.log(allChallengePages);
    }
    else {
      console.log("error");
    }
  }


  useEffect(() => {
    allChallengePages()
  }, [])

  return (
    <>

      <div className="min-h-screen container mx-auto">

        {/* <section className="sectionBlock px-[2vmax] pt-[4vmax] pb-[2vmax]">  
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
      </section> */}

        <section className="sectionBlock px-[2rem] pt-[4rem] pb-[2rem]">
          <section className="cardContainer">
            <h1 className="subHeadingChallenges text-start mb-[0.5rem]">
              Explore Challenges
            </h1>
            <p className="bodyText text-[1rem] text-[#2d2d2d] text-start mt-[0.5rem]">
              Weekly challenges are posted here!
            </p>

            <button className="button text-[0.9rem] text-[#FFFFFF] bg-[#2d2d2d] rounded-full mt-[1rem]">
              Most Recent<i className="fa fa-caret-down pl-[0.5vmax]"></i>
            </button>
          </section>
        </section>

        <section className="sectionBlock px-[2rem] pb-[6rem]">
          <section className="cardContainer flex flex-col items-center">
            {
              challengePages.length === 0 ?
                <div> No results found.</div>
                :
                <div className='gridSystem w-[100%]'>
                  {
                    challengePages.map((ChallengePage, index) => (

                      <div className="challengeContainer">
                        <Link to={"/challenges/" + ChallengePage.id}>
                          <img src={require('../../assets/DSIreliaFull.jpg')} class="challContainerImg" />
                          <div className="labelContainer text-[#FFFFFF] pb-[0.5vmax] z-[2]">
                            {ChallengePage.name}
                          </div>
                        </Link>
                      </div>

                    ))
                  }
                </div>
            }
          </section>
        </section>

      </div>

    </>
  )
}

export default ChallengePage