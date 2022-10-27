import React, {useEffect, useState} from 'react'
import './gallery.css'
import { DataStore, Predicates } from '@aws-amplify/datastore';
import { UserPosts } from '../../models';

function UserPost ({author, title, description, image}) {

  return(
    <>
      <div className='userPost'>
        <img src={image} alt={description}></img>
        <p id="postTitle">{title}</p>
        <p>{author}</p>
      </div>    
    </>
  );
}

function Gallery() {
  const [userPosts, setUserPosts] = useState([])
  const [query, setQuery] = useState("")

  async function fetchPosts() {
    const models = await DataStore.query(UserPosts, Predicates.ALL, {
      page: 0,
      limit: 16
    });
    if(models !== undefined) setUserPosts(models);
    console.log(models);
  }

  async function queryPosts() {
    if(query[0] !== undefined){ //Only query when search input has text
      const query2 = query[0].toUpperCase() + query.slice(1); // Case insensitive query

      const models = await DataStore.query(UserPosts,(c) =>
      c.or((c) => c.author('beginsWith', query).title('beginsWith', query).description('beginsWith', query).author('beginsWith', query2).title('beginsWith', query2).description('beginsWith', query2))
      );

      if(models !== undefined){
        setUserPosts(models);
      } 
      console.log(models);
    }
    else{
      fetchPosts();
    }
  }

  useEffect(()=> {
    fetchPosts()
  }, [])


  return (
    <>

    <div className="space-y-100 min-h-screen w-full">
      <div className="galleryPage min-h-screen w-full">

        {/* Downloaded Code Lol Have Fun With This Shit */}

            <div class="relative w-full z-[0] flex items-center justify-start px-16 max-w-2xl">
                <div class="absolute top-4 -left-4 w-[28rem] h-[28rem] bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70  animate-blob"></div>
                <div class="absolute top-4 -right-20 w-[28rem] h-[28rem] bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70  animate-blob animation-delay-2000"></div>
                <div class="absolute -bottom-32 -right-20 w-[28rem] h-[28rem] bg-blue-400 rounded-full mix-blend-multiply filter blur-xl  opacity-70  animate-blob animation-delay-4000"></div>
                <div class="absolute -bottom-32 left-20 w-[28rem] h-[28rem] bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70  animate-blob animation-delay-6000"></div>
            </div>
        
          <section className="flex flex-col">
            <div class="relative my-12 mx-12 glass flex flex-row justify-around">
              <section className="flex flex-row py-12 px-12">
                <div className="text-5xl font-bold drop-shadow-xl text-black text-start">
                  The<br/>
                  <p className='text-7xl strokeGalleryText'>Gallery</p>
                </div>

                <div className="pl-12 text-base text-black italic text-start">
                  A collection of user-published <br/> designs, creatvity pieces, and more.
                </div>
              </section>

              <section className=' my-12 px-12'>
                  <div className="text-xl text-black text-start mb-6 ">
                    Search the gallery and find a specific piece.
                  </div>

                  <div class="input-group mb-3">
                    <input type="text" class="form-control rounded-l-full shadow-md border-black border-[2px]" placeholder="Search anything..." onChange={event => setQuery(event.target.value)}/>
                    <div class="input-group-append">
                      <button class="btn rounded-r-full active:!bg-black/50 shadow-md bg-white hover:!bg-[gray] border-black border-[2px]" type="button" onClick={queryPosts}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                      </button>
                    </div>
                  </div>
              </section>

            </div>

            <div class="relative mx-12 space-y-4 glass">
              <div className="flex flex-col py-12 px-12 items-center"> 
              {
                userPosts.length === 0 ? 
                <div> No results found.</div>           
                :
                <div className='grid grid-cols-4 gap-4'>
                  {
                    userPosts.map((userPost, index)=>(
                      <UserPost author = {userPost.author} title = {userPost.title} description={userPost.description} image={userPost.image} />
                    )) 
                  }
                </div>
              }       

              </div>
            </div>
            
          </section>
      </div>
    </div>
    </>
  )
}

export default Gallery