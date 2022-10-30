import React from 'react'
import './userpost.css'

function ProfilePost({author, title, description, image}) {
    return(
        <>
          <div className='userPost'>
            <img src={image} alt={description}></img>
              <div className='postSection'>
                <p id="postTitle">{title}</p>
              </div>
          </div>    
        </>
      );
}

export default ProfilePost