"use client"

import DashboardLayout from "../leftDashboardLayout/DashboardLayout"
import discographycss from "./discographycss.css"
import { useState, useEffect } from "react"
import axios from "axios"
// import { useRouter, usePathname, useSearchParams } from 'next/navigation'

export default function DiscographySection() {

    
    const [trackimg, setTrackimg] = useState("")
    const [tracktitle, setTracktitle] = useState("")
    const [artistname, setArtistname] = useState("")
    const [tracklink, setTracklink] = useState("")

    // This function will clear the the field after successful create 
    const clearForm = () => { 
        setTrackimg("")
        setTracktitle("")
        setArtistname("")
        setTracklink("")
    }

    const handleSubmitDiscography = async (event) => { 
        event.preventDefault(); 

        try {
            const response = await axios.post("http://localhost:8080/api/discography-create", {
                trackimg, 
                tracktitle, 
                artistname, 
                tracklink,
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
        <DashboardLayout />
        <div id="discographyBackend-container">
            <div id="discographyBackend-second-cont">
                <div className="discographyBackend-heading">
                <h1>Discography Section Input</h1>
                <hr className="hrline-for-discographyBackend-heading"/>
                </div>
                <form onSubmit={handleSubmitDiscography} className="discographyBackend-form">
                    <div className="discographyBackend-inputs">
                        <input placeholder="Enter track image link"
                               value={trackimg}
                               onChange={(e) => setTrackimg(e.target.value)}
                               required
                        ></input>

                        <input placeholder="Enter track title"
                                value={tracktitle}
                                onChange={(e) => setTracktitle(e.target.value)}
                                required
                        ></input>

                        <input placeholder="Enter artist name"
                               value={artistname}
                               onChange={(e) => setArtistname(e.target.value)}
                               required
                        
                        ></input>

                        <input placeholder="Enter track release link"
                               value={tracklink}
                               onChange={(e) => setTracklink(e.target.value)}
                               required
                        ></input>
                    </div>
                    
                    <div className="discographyBackendSection-buttons">
                        <button type="submit">Create</button>
                        {/* <button type="submit">Update</button> */}
                    </div>
                </form>
            </div>
        </div>
    </>)
}