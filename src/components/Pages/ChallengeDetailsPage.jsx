import { React, useState, useEffect } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { API } from "aws-amplify";
import { listChallengePages, getChallengePage, listUserPosts} from "../../graphql/queries";
import BannerArt from '../../assets/dancingMushroomBW.jpg';
import UserPost from '../ProfilePost'

export default function ChallengeDetailsPage() {
  let { challengeID } = useParams();
  const [challengePage, setChallengePage] = useState()
  const [userPosts, setUserPosts] = useState([])
  const navigate = useNavigate();

  //Get a specific item
  async function oneChallengePage() {
    const oneChallengePage = await API.graphql({
      query: getChallengePage,
      variables: { id: challengeID }
    });
    if (oneChallengePage !== undefined) {
      setChallengePage(oneChallengePage.data.getChallengePage)
    }
  }

  // List all items
  async function fetchPosts() {
    const variables = {
      filter: {
        challenge: {
          eq: challengeID
        }
      }
    };

    // Get a specific item
    const models = await API.graphql({
      query: listUserPosts,
      variables: variables
    });
    if (models !== undefined) setUserPosts(models.data.listUserPosts.items);
    console.log(models.data.listUserPosts.items)
  }

  useEffect(() => {
    oneChallengePage().then(
      console.log(challengePage)
    )
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [])

  function createPostLink() {
    navigate("/create-post", { state: { challenge: challengePage} });
  }

  return (
    < >
      {
        challengePage != undefined ?
        <div className="min-h-screen container mx-auto">

          <div className='sectionBlock px-[2rem] pt-[4rem] pb-[2rem]'>

            <section className="cardContainer flex flex-row items-center">
              
              {/* <div className='flex flex-row justify-center items-center align-center p-[1rem]'>   */}
                <img className='h-[4rem] md:h-[8rem] rounded-full bg-white' src={challengePage.image} alt="Avatar" /> 
                  <div className="pl-[2rem]">
                      <div className="heading text-[1.5rem] md:text-[2.5rem] text-[#2d2d2d] text-start">
                        {challengePage.name}
                      </div>
                      <div className="bodyText text-[.75rem] md:text-[1rem] text-[#2d2d2d] text-start mt-[0.5rem]">
                        {challengePage.description}
                      </div>
                      <button onClick={createPostLink} className="button text-[0.75rem] text-[#FFFFFF] bg-[#2d2d2d] rounded-full mt-[1rem]">
                        CREATE POST
                      </button>
                  </div>
              {/* </div>  */}

            </section>
            
          </div>

            <section className="sectionBlock px-[2rem] pb-[6rem]">
              <section className="cardContainer">
                <div className="flex flex-col items-center">
                  {
                    userPosts.length === 0 ?
                      <>
                        <i className='fa fa-paint-brush text-4xl' aria-hidden="true"> </i>
                        <p className='text-2xl'> No posts yet.</p>
                      </>
                      :
                      <div className='gridSystem w-[100%]'>
                        {
                          userPosts.map((userPost, index) => (
                            <UserPost author={userPost.author} title={userPost.title} description={userPost.description} image={userPost.image} />
                          ))
                        }
                      </div>
                  }
                </div>
              </section>
            </section>

        </div>
          : null
      }
    </>
  )
}
