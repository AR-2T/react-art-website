import React from 'react'
import {ReactComponent as BannerArt} from '../../assets/profile_pic.svg';
import { useAuthenticator } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";
import { UserPostTemp, TempPostCollection} from "../../ui-components"

function Profile() {
    const { route } = useAuthenticator(context => [context.route]);
    const navigate = useNavigate();

    if (route !== 'authenticated' ) {
        navigate("/login");
      }

    return (
        <>
        {route === 'authenticated' ? 
          // <div className='flex flex-row justify-between'>
            
          //   <BannerArt className='justify-center scale-[40%] h-[50%] w-[50%] pt-8'/>
          //   <div className="flex flex-col py-60 px-20 w-[50%]">
          //       <div className="text-8xl font-bold text-black-400 text-start">
          //       Hello, {user.attributes.preferred_username}<br/>
          //       </div>
          //   </div>

            
          // </div> : null
          <div> 
            <UserPostTemp width='100%' marginBottom='10px'/>
            <TempPostCollection />
            
          </div>: null
        } 
      </>
      )     
}

export default Profile