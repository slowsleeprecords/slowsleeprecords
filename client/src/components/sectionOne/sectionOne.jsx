"use client"

import sectiononecss from "./sectiononecss.css"
import Image from "next/image"
import { useState, useEffect } from "react"
import axios from "axios"
import Link from "next/link"
import Loading from "@/app/loading"

function SectionOne() {

    const [mainSectionData, setMainSectionData] = useState(null); 

    useEffect(() => { 
        axios.get("http://localhost:8080/api/mainsection")
        .then((response) => { 
            setMainSectionData(response.data)
        })
        .catch((error) => { 
            console.error("Error fetching data || ERROR:", error)
        })
    }, [])
    
    return(
        <>
         <div id="sectionOne-container">
        {mainSectionData ? (
          <div className="s1-cont-content">
            <div className="img-divAND-content-s1">
              <Image
                src={mainSectionData.backgroundimg} // Using data from API
                width={1000}
                height={1000}
                alt="Section Background"
              />
              <div className="textIn-s1-img">
                <h4>{mainSectionData.artistname}</h4>
                <h1>{mainSectionData.trackname}</h1>
                <p>{mainSectionData.description}</p>
                <Link target="_blank" href={mainSectionData.linktolisten}><button>Learn More</button></Link>
              </div>
            </div>
          </div>
        ) : (
          <Loading/>
        )}
      </div>
        </>
    )
}
export default SectionOne