"use client"

import aboutartistscss from "./aboutartistscss.css"
import Image from "next/image"
import ArtistsProp from "./artistsProp/artistsProp"
import { useEffect, useRef } from "react"
import { useRouter, usePathname, useSearchParams } from 'next/navigation'


import leftSide from "./assets/left-svgrepo-com.svg"
import rightSide from "./assets/arrow-right-circle-svgrepo-com.svg"
import AboutArtistData from "./artistsProp/artistsProp"

function AboutArtists() {
    const containerRef = useRef(null);

    const handleScrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: 1000,
                behavior: 'smooth'
            });
        } 
    };

    const handleScrollLeft = () => { 
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: -1000, 
                behavior: 'smooth'
            })
        }
    }


    return (
        <>
            <div id="aboutArtists-main-container">
                <div id="biography-section" className="about-the-artist-individual">
                    <h1>Biography</h1>
                    <p>Get to know more about the talented and amazing producers signed with Slow Sleep Records.</p>
                </div>
                <div className="arrows-and-aboutartistdata">
                <div className="scroll-to-diff-bio">
                    <Image src={leftSide}
                           alt="Scroll Left" 
                           onClick={handleScrollLeft}
                    />
                    <Image 
                        src={rightSide} 
                        alt="Scroll Right" 
                        onClick={handleScrollRight}
                    />
                </div>
                <div className="container-to-hold-biography-data" ref={containerRef}>
                    <AboutArtistData/>
                </div>
                </div>
            </div>
        </>
    )
}

export default AboutArtists
