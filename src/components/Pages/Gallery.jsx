import React, {useEffect, useState} from 'react'
import './gallery.css'
import { API } from "aws-amplify";
import { listUserPosts } from "../../graphql/queries";
import UserPost from '../UserPost'
import { useNavigate, Outlet } from 'react-router-dom';

function Gallery() {
  const [userPosts, setUserPosts] = useState([])
  const [query, setQuery] = useState("")
  const navigate = useNavigate();

  async function fetchPosts() {
    // List all items
    const models = await API.graphql({
      query: listUserPosts
    });
    if(models !== undefined){
      setUserPosts(models.data.listUserPosts.items);
      console.log(models.data.listUserPosts.items);
    }
    else{
      console.log("error");
    }

  }

  async function queryPosts() {
    // if(query[0] !== undefined){ //Only query when search input has text
    //   const query2 = query[0].toUpperCase() + query.slice(1); // Case insensitive query

    //   const models = await DataStore.query(UserPosts,(c) =>
    //   c.or((c) => c.author('beginsWith', query).title('beginsWith', query).description('beginsWith', query).author('beginsWith', query2).title('beginsWith', query2).description('beginsWith', query2))
    //   , {
    //     page: 0,
    //     limit: 16
    //   });

    //   if(models !== undefined){
    //     setUserPosts(models);
    //   } 
    //   console.log(models);
    // }
    // else{
    //   fetchPosts();
    // }
  }

  function goToGalleryImage(id, post) {
    navigate(id, { state: { userPost: post} });
  }

  useEffect(()=> {
    fetchPosts()
    // getUserData()
  }, [])

  return (
    <>

    <div className="min-h-screen w-full container mx-auto">
       
      <section className="sectionBlock px-[2rem] pt-[4rem] pb-[2rem]">

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
                        <div onClick={()=>{
                          goToGalleryImage(userPost.id, userPost)
                        }}>
                          <UserPost author = {userPost.author} title = {userPost.title} description={userPost.description} image={userPost.image} />
                        </div>
                      )) 
                    }
                  </div>
                }       
              </div>
            </div>
        </section>
            
      </div>

      <Outlet />
    </>
  )
}

export default Gallery