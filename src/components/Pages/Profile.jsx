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

    return (
        <>
        {route === 'authenticated' ? 
        <div className=' min-h-screen w-full'>
          <div className='sectionBlock px-[2vmax] pt-[4vmax] pb-[2vmax]'>
            <div className='flex flex-row justify-center items-center align-center rounded-lg p-[2vmax]'>  
              <img className='h-[8vmax] rounded-full' src={BannerArt} alt="Avatar" /> 
                <div className="pl-[4vmax]">
                    <div className="text-4xl font-bold text-black-400 text-start">
                    {user.attributes.preferred_username}<br/>
                    </div>
                    <p className="text-2xl text-black-400 text-start">
                     This is a short biography test.
                    </p>
                </div>
            </div> 
          </div>

          <section className="sectionBlock px-[2vmax] pb-[2vmax]">  
            <hr/>
          </section>

          <section className="sectionBlock px-[2vmax] pb-[2vmax]">  
              <div className="flex flex-col py-3 px-3 items-center"> 
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

        </div>


          : null
        } 
      </>
      )     
}

export default Profile