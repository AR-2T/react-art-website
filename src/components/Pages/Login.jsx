import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import {ReactComponent as BannerArt} from '../../assets/profile_pic.svg';

import awsExports from '../../aws-exports';
Amplify.configure(awsExports);

function Login({ signOut, user }) {
  console.log(user)
  return (
    <>
      <div className='flex flex-row justify-between'>
      <BannerArt className='justify-center scale-[40%] h-[50%] w-[50%] pt-8'/>
      <div className="flex flex-col py-60 px-20 w-[50%]">
        <div className="text-8xl font-bold text-black-400 text-start">
        Hello, {user.attributes.preferred_username}<br/>
        </div>
      </div>

      </div>
    </>
  )
}
export default withAuthenticator(Login);
//export default Login