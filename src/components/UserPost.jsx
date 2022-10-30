import React from 'react'
import './userpost.css'

function UserPost({author, title, description, image}) {
    return(
        <>
          <div className='userPost'>
            <img src={image} alt={description} class="postImage"/>
              <div className='postSection'>
                <p id='postTitle'>{title}</p>
                <p>{author}</p>
              </div>
          </div>    
        </>
      );
}

export default UserPost