import React, {useEffect, useState} from 'react'
import './gallery.css'
import { DataStore, Predicates } from '@aws-amplify/datastore';
import { UserPosts } from '../../models';
import UserPost from '../UserPost'

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
      , {
        page: 0,
        limit: 16
      });

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

    <div className="defaultBackground min-h-screen w-full">
       
      <section className="sectionBlock px-[2rem] pt-[4rem] pb-[4rem]">

        <section className="cardContainer">
          <div className="gallerySec1">
            <h1 className="subHeadingGallery text-start mb-[0.5rem]">
              The Gallery
            </h1>
            <p className="bodyText text-[1rem] text-[#2d2d2d] text-start mt-[0.5rem]">
            A collection of user-published designs, creativity pieces, and more.
            </p>
          </div>

          <div className="gallerySec2 w-[75%]">
            <div class="input-group mt-[1rem]">
              <input type="text" class="form-control rounded-l-full" placeholder="Search anything..." onChange={event => setQuery(event.target.value)}/>
              <div class="input-group-append">
                <button class="btn rounded-r-full active:!bg-black/50 bg-[#2d2d2d] hover:!bg-[gray] " type="button" onClick={queryPosts}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

        </section>

        

            {/* <div class=" relative glass flex md:flex-row flex-col justify-around px-6 items-center">

              <div className="flex md:flex-row flex-col md:py-12 py-6 items-center">
                <div className="font-bold drop-shadow-xl text-black md:text-start md:leading-9">
                  <div className='text-[2vmax] hidden md:flex md:flex-col'>
                  The
                  <p className='text-[3vmax]'> Gallery</p>
                  </div>

                  
                  <p className='md:hidden text-[4vmax]'>The Gallery</p> 
                </div>

                <div className="md:pl-12 md:text-[1vmax] text-[1.5vmax] text-black italic md:text-start">
                  A collection of user-published <br/> designs, creatvity pieces, and more.
                </div>
              </div>

              <div className='md:my-12 md:px-6 mb-6 '>
                  <div class="input-group md:scale-100 scale-75">
                    <input type="text" class="form-control rounded-l-full shadow-md " placeholder="Search anything..." onChange={event => setQuery(event.target.value)}/>
                    <div class="input-group-append">
                      <button class="btn rounded-r-full active:!bg-black/50 shadow-md bg-[#2d2d2d] hover:!bg-[gray] " type="button" onClick={queryPosts}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                      </button>
                    </div>
                  </div>
              </div>
            </div> */}
          </section>

         <section className="sectionBlock px-[2rem] pb-[6rem]">  
            <div class="cardContainer">
              <div className="flex flex-col py-3 px-3 items-center"> 
                {
                  userPosts.length === 0 ? 
                  <div> No results found.</div>           
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
            </div>
        </section>
            
      </div>
    </>
  )
}

export default Gallery