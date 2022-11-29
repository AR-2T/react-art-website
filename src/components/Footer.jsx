import React, {useState} from 'react'
import './Footer.css';

function Footer() {
  return (
    <>
    

    <div className="footer">
        <section className="sectionBlock p-[2vmax] flex flex-row justify-center relative">
            <section className="blockFooter1 w-[35%] mr-[1vmax]">
                <h1 className="websiteName text-start">
                    ideART
                </h1>
                <p className="bodyText text-[1vmax] text-start">
                    Get the latest news about ideArt's new features & product updates.
                </p>
            </section>
            <section className="blockFooter2 w-[65%] ml-[1vmax]">
                <p className="bodyText text-[1vmax] text-end">
                    Cookie Statement<br/>
                    Terms of Service<br/>
                    Privacy Policy
                </p>
            </section>
        </section>
        <section className="bodyText text-[0.9vmax] w-[100%] pb-[1vmax]">
            © 2022 AR2T. All rights reserved.
        </section>
    </div>
    </>
  )
}

export default Footer