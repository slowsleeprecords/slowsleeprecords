"use client"

import artistspropcss from "./artistspropcss.css"
import Image from "next/image"
import Link from "next/link"

import instagramProfileBio from "./assets/instagram-167-svgrepo-com.svg"
import SpotifyProfileBio from "./assets/spotify-162-svgrepo-com.svg"

function ArtistsProp(props) { 

    return(
        <>
           <div className="artists-prop-container">
             <div className="artist-data-biography">
              <Image src={props.artistProfileImage} width={1000} height={1000}></Image>
              <div className="actual-artist-bio-data">
                <h1>{props.artistName}</h1>
                <p>{props.artistBio}</p>
                <div className="visit-artist-bio">
                  <Link target="_blank" href={props.instaProfileURL}>
                    <div className="instagram-artist-bio">
                      <Image src={instagramProfileBio}></Image>
                      <p>Instagram Profile</p>
                       </div>
                     </Link>
                  <Link target="_blank" href={props.spotifyProfileURL}>
                    <div className="spotify-artist-bio">
                      <Image src={SpotifyProfileBio}></Image>
                      <p>Spotify Profile</p>
                       </div>
                     </Link>
                </div>
              </div>
             </div>
           </div>
        </>
    )
}
export default ArtistsProp