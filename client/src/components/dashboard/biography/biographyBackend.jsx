"use client"

import DashboardLayout from "../leftDashboardLayout/DashboardLayout"
import BiographyBackendcss from "./biographyBackendcss.css"
import { useState, useEffect } from "react"
import axios from "axios"

export default function BiographyBackendSection(){

    const[artistimg, setArtistImg] = useState("")
    const [artistname, setArtistName] = useState("")
    const [artistbio, setArtistBio] = useState("")
    const [instagramhandles, setInstagramHandles] = useState("")
    const [spotifyprofile, setSpotifyProfile] = useState("")

    // This function will clear the the field after successful create 
    const clearForm = () => { 
        setArtistImg("")
        setArtistName("")
        setArtistBio("")
        setInstagramHandles("")
        setSpotifyProfile("")
    }

    const handleSubmitBiography = async (event) => { 
        event.preventDefault(); 

        try {
            const response = await axios.post("http://localhost:8080/api/biography-create", {
                artistimg, 
                artistname, 
                artistbio, 
                instagramhandles, 
                spotifyprofile, 
            }); 
            console.log(response.data)
            // to clear the discography field
            if (response.status === 201) {
                clearForm();
              } 

        } catch(error) {
            console.error(error)
        }
    }

    return(<>
        <DashboardLayout/>
        <div id="biographyBackend-container">
            <div id="biographyBackend-second-cont">
                <div className="biographyBackend-heading">
                <h1>Biography Section Input</h1>
                <hr className="hrline-for-biographyBackend-heading"/>
                </div>
                <form onSubmit={handleSubmitBiography} className="biographyBackend-form">
                    <div className="biographyBackend-inputs">
                        <input placeholder="Enter artist image link"
                               value={artistimg}
                               onChange={(e) => setArtistImg(e.target.value)}
                               required
                        ></input>

                        <input placeholder="Enter artist name"
                               value={artistname}
                               onChange={(e) => setArtistName(e.target.value)}
                        ></input>
                        <textarea 
                            placeholder="Enter track description, product description, etc.." 
                            value={artistbio}
                            onChange={(e) => setArtistBio(e.target.value)}
                            required
                            // Code below allows the textarea height to dynamically autosize -- Ensure height fit contnet is inside your css styling for the textarea :))
                            rows={2} 
                            onInput={(e) => {
                                setTimeout(() => {
                                if (e.target.value === '') {
                                    e.target.rows = 2;
                                } else {
                                    e.target.rows = Math.max(1, e.target.scrollHeight / 20);
                                }
                                }, 10);
                            }}
                            ></textarea>
                        <input placeholder="Enter artist Instagram link"
                               value={instagramhandles}
                               onChange={(e) => setInstagramHandles(e.target.value)}
                               required
                        ></input>
                        <input placeholder="Enter artist Spotify Profile link"
                               value={spotifyprofile}
                               onChange={(e) => setSpotifyProfile(e.target.value)}
                               required
                        ></input>
                    </div>
                    
                    <div className="biographyBackendSection-buttons">
                        <button type="submit">Create</button>
                        {/* <button type="submit">Update</button> */}
                    </div>
                </form>
            </div>
        </div>
    </>)
}