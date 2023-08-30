import React, {useState} from 'react'
import './Footer.css';

function Footer() {
  return (
    <>
    

    <div className="footer container mx-auto">
        <section className="sectionBlock p-[2rem] flex flex-row justify-center relative">
            <section className="blockFooter1 w-[35%] mr-[1rem]">
                <h1 className="websiteName text-start">
                    ideART
                </h1>
                <p className="bodyText text-[0.75rem] text-start">
                    Get the latest news about ideArt's new features & product updates.
                </p>
            </section>
            <section className="blockFooter2 w-[65%] ml-[1vmax]">
                <p className="bodyText text-[0.75rem] text-end">
                    Cookie Statement<br/>
                    Terms of Service<br/>
                    Privacy Policy
                </p>
            </section>
        </section>
        <section className="bodyText text-[0.75rem] w-[100%] pb-[1vmax]">
            © 2022 AR2T. All rights reserved.
        </section>
    </div>
    </>
  )
}

export default Footer