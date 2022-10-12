import React from 'react'
import {ReactComponent as BannerArt} from '../../assets/profile_pic.svg';
import { useAuthenticator } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";

function Profile() {
    const { user } = useAuthenticator();
    const navigate = useNavigate();

    if (!user) {
        navigate("/login");
      }

    return (
        <>
        {user ? 
          <div className='flex flex-row justify-between'>
            <BannerArt className='justify-center scale-[40%] h-[50%] w-[50%] pt-8'/>
            <div className="flex flex-col py-60 px-20 w-[50%]">
                <div className="text-8xl font-bold text-black-400 text-start">
                Hello, {user.attributes.preferred_username}<br/>
                </div>
            </div>
          </div> : null
        }
      </>
      )     
}

export default Profile