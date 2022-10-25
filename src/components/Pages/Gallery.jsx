import React from 'react'
import './gallery.css'

function Gallery() {
  return (
    <>

    <div className="space-y-100 min-h-screen w-full">
      <div className="galleryPage min-h-screen w-full"></div>
      {/* Downloaded Code Lol Have Fun With This Shit */}

          <div class="relative w-full z-[-1] flex items-center justify-start px-16 max-w-2xl">
              <div class="absolute top-4 -left-4 w-[28rem] h-[28rem] bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70  animate-blob"></div>
              <div class="absolute top-4 -right-20 w-[28rem] h-[28rem] bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70  animate-blob animation-delay-2000"></div>
              <div class="absolute -bottom-32 -right-20 w-[28rem] h-[28rem] bg-blue-400 rounded-full mix-blend-multiply filter blur-xl  opacity-70  animate-blob animation-delay-4000"></div>
              <div class="absolute -bottom-32 left-20 w-[28rem] h-[28rem] bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70  animate-blob animation-delay-6000"></div>
          </div>
      
        <section className="flex flex-row">
          {/* My Code Don't Touch Bitch */}
          <div class="relative my-12 mx-12 space-y-4 glass w-[50%]">
              <div className="flex flex-row py-12 px-12">        
                <div className="text-5xl font-bold drop-shadow-xl text-white text-start">
                  The<br/>
                  <p className='text-7xl strokeGalleryText'>Gallery</p>
                </div>

                <div className="pl-12 text-base text-white italic text-start">
                  A collection of user-published <br/> designs, creatvity pieces, and more.
                </div>
              </div>
          </div>

          <div class="relative my-12 mr-12 space-y-4 glass w-[50%] ">
              <div className="flex flex-col py-12 px-12 items-start">        

                <div className="text-xl text-white text-start mb-6">
                  Search the gallery and find a specific piece.
                </div>

                <div class="input-group mb-3">
                  <input type="text" class="form-control rounded-l-full border-2 border-black active:!shadow-white" placeholder="Search anything..."/>
                  <div class="input-group-append">
                    <button class="btn btn-outline-secondary rounded-r-full bg-black border-2 border-black active:!bg-black/50" type="button">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                      </svg>
                    </button>
                  </div>
                </div>

              </div>
          </div>
        </section>
    </div>

    </>
  )
}

export default Gallery