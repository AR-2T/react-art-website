import React, {useState, useEffect} from 'react'
import BannerArt from '../../assets/profile_pic.svg';
import { useAuthenticator } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";
import { UserPostTemp, TempPostCollection} from "../../ui-components"
import UserPost from '../ProfilePost'
import { DataStore, Predicates } from '@aws-amplify/datastore';
import { UserPosts } from '../../models';


function Profile() {
    const [userPosts, setUserPosts] = useState([])
    const { route } = useAuthenticator(context => [context.route]);
    const { user } = useAuthenticator();

    async function fetchPosts() {
      const models = await DataStore.query(UserPosts,(c) => c.author('beginsWith', ""), {
        page: 0,
        limit: 16
      });

      if(models !== undefined) setUserPosts(models);
      console.log(models);
    }

    useEffect(()=> {
      fetchPosts()
    }, [])
  

    const navigate = useNavigate();

    if (route !== 'authenticated' ) {
        navigate("/login");
      }

    function createPostLink(){
      navigate("/create-post");
    }

    return (
        <>
        {route === 'authenticated' ? 
        <div className="defaultBackground min-h-screen">

          <div className='sectionBlock px-[2rem] pt-[4rem] pb-[2rem]'>

            <section className="cardContainer flex flex-row items-center">
              
              {/* <div className='flex flex-row justify-center items-center align-center p-[1rem]'>   */}
                <img className='h-[8rem] rounded-full bg-white' src={BannerArt} alt="Avatar" /> 
                  <div className="pl-[2rem]">
                      <div className="heading text-[2.5rem] text-[#2d2d2d] text-start">
                        {user.attributes.preferred_username}
                      </div>
                      <div className="bodyText text-[1.15rem] text-[#2d2d2d] text-start mt-[-0.5rem]">
                        @USERNAME
                      </div>
                      <div className="bodyText text-[1rem] text-[#2d2d2d] text-start mt-[0.5rem]">
                        This is a short biography test.
                      </div>
                      <button onClick={createPostLink} className="button text-[0.75rem] text-[#FFFFFF] bg-[#2d2d2d] rounded-full mt-[1rem]">
                        CREATE POST
                      </button>
                  </div>
              {/* </div>  */}

            </section>
            
          </div>

          {/* <section className="sectionBlock px-[2rem] pb-[2rem]">  
            <hr/>
          </section> */}

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
                      userPosts.map((userPost, index)=>(
                        <UserPost author = {userPost.author} title = {userPost.title} description={userPost.description} image={userPost.image} />
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

export default Profile