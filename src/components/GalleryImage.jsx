import { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useParams, useLocation} from "react-router-dom";
import { getUserPosts} from "../graphql/queries";
import { API } from "aws-amplify";

export default function GalleryImage() {
    const [open, setOpen] = useState(false)
    const cancelButtonRef = useRef(null)
    const { state } = useLocation();
    const [post, setPost] = useState();
    const { postID } = useParams();
    const [postDate, setPostDate] = useState();

      //Get a specific item
  async function getPost() {
    const post = await API.graphql({
      query: getUserPosts,
      variables: { id: postID }
    });
    if (post !== undefined) {
      setPost(post.data.getUserPosts)
      setOpen(true)
    }
  }

  useEffect(() => {
    if(state === null){
      getPost()
      return
    }
    else{
        setPost(state.userPost)
        setOpen(true)
    }
  }, [state]);

  useEffect(()=> {
    if(post !== undefined){
      let date = new Date(post.createdAt).toISOString().slice(0, 10);
      setPostDate(date)
      console.log(post)
    }
  }, [post])

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-[101]" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto ">
          <div className="flex min-h-full items-center justify-center p-4 text-center container">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
                
              <Dialog.Panel className="cardContainer p-0 w-fit max-w-[70rem] flex flex-col lg:flex-row transform overflow-hidden rounded-lg bg-black text-left align-middle shadow-xl transition-all ">
              <div className="flex">               
                    {
                        post == null?
                        <div>loading. . .</div> :
                        <img class="max-h-[85vh] w-full" src={post.image} alt="" />
                    }
                    <button
                        className="absolute m-4 z-[101] flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-black sm:mx-0 sm:h-10 sm:w-10"
                        type="button"
                        onClick={() => setOpen(false)}
                        ref={cancelButtonRef}
                    >
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                    
                    <div className="d-none">
                      <Dialog.Title>           
                      </Dialog.Title>
                    </div>
                </div>
 

                <div className=" bg-gray-50 w-[400px] max-w-[400px] px-4 py-3 flex-shrink-0">
                {
                        post == null?
                        <div>loading. . .</div> :
                        <>
                          <div className="pl-[2rem]">
                            <div className="heading text-[1.5rem] md:text-[2.5rem] text-[#2d2d2d] text-start">
                              {post.title}
                            </div>
                            <div className="bodyText text-[.75rem] md:text-[1.15rem] text-[#2d2d2d] text-start mt-[-0.25rem]">
                              by @{post.author}
                            </div>
                            <div className="bodyText text-[.75rem] md:text-[.75rem] text-[#7b7b7b] text-start mt-[0.5rem]">
                              {postDate}
                            </div>
                            <div className="bodyText text-[.75rem] md:text-[1rem] text-[#2d2d2d] text-start mt-[0.5rem]">
                              {post.description}
                            </div>
                        </div>
                        </>

                    }           
                </div>

              </Dialog.Panel>

            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}