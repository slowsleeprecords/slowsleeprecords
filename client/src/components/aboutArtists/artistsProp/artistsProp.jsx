"use client"

import artistspropcss from "./artistspropcss.css"
import Image from "next/image"
import Link from "next/link"
import axios from "axios"
import { useState, useEffect } from "react"
import { Suspense, lazy } from "react"

import instagramProfileBio from "./assets/instagram-167-svgrepo-com.svg"
import SpotifyProfileBio from "./assets/spotify-162-svgrepo-com.svg"
import Loading from "@/app/loading"

function AboutArtistData({editButton}) { 
  const [aboutArtistSection, setAboutArtistSection] = useState([]); 

  useEffect(() => { 
    axios.get("https://slowsleeprecords-server.vercel.app/api/biography-data")
    .then((response) => { 
      setAboutArtistSection(response.data); 
    })
    .catch((error) => console.error("Errror Fetfching data || ERRO:", error))
  }, [])

  if (aboutArtistSection.length === 0) { 
    return <Loading/>
  }

    return(
        <>
           <div className="artists-prop-container">
           {aboutArtistSection.map((artistbiography, index) =>(
            <div key={index} className="artist-data-biography">
            <Image src={`https://slowsleeprecords-server.vercel.app/${artistbiography.artistimg}`} width={1000} height={1000}></Image>
              <div className="actual-artist-bio-data">
                <h1>{artistbiography.artistname}</h1>
                <p>{artistbiography.artistbio}</p>
                <div className="visit-artist-bio">
                  <Link target="_blank" href={artistbiography.instagramhandles}>
                    <div className="instagram-artist-bio">
                      <Image src={instagramProfileBio}></Image>
                      <p>Instagram Profile</p>
                       </div>
                     </Link>
                  <Link target="_blank" href={artistbiography.spotifyprofile}>
                    <div className="spotify-artist-bio">
                      <Image src={SpotifyProfileBio}></Image>
                      <p>Spotify Profile</p>
                       </div>
                     </Link>
                     <div className="editbutton-aboutArtist-cont">
                        {editButton && (
                                <button className="edit-button-dashboard-aboutartist">Edit Content</button>
                              )}
                      </div>
                  </div>
                </div>
             </div>
           ))}
      </div>
    </>
    )
}
export default AboutArtistData