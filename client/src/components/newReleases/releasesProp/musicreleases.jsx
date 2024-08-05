"use client"

import musicreleasescss from "./musicreleasescss.css"
import Image from "next/image"
import Link from "next/link"

import ListenHere from "./assets/music-note-slider-2-svgrepo-com.svg"

function Releases(prop) { 

    return(
        <>
            <div id="newmusicreleases">
                <div className="musicRelease-prop">
                    <Image src={prop.Release_Image} width={1000} height={1000}></Image>
                    <div className="musicRelease-text">
                        <div className="text-title-artist-release">
                            <h2>{prop.Release_Title}</h2>
                            <p>{prop.Artist_Name}</p>
                        </div>
                        <div className="listen-here-releases">
                            <a href={prop.Release_Link}> <Image src={ListenHere}></Image> </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Releases