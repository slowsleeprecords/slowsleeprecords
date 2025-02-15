"use client"
import sectiononecss from "./sectiononecss.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Loading from "@/app/loading";

function SectionOne() {
  const [mainSectionData, setMainSectionData] = useState(null)

  useEffect(() => {
    axios
      .get("https://slowsleeprecords-server.vercel.app/api/mainsection" && "http://localhost:8080/api/mainsection")
      .then((response) => {
        setMainSectionData(response.data)
      })
      .catch((error) => {
        console.error("Error fetching data || ERROR:", error)
      })
  }, [])

  // Show loading component if data is being fetched or if required data is missing
  if (!mainSectionData || !mainSectionData.linktolisten || !mainSectionData.backgroundimg) {
    return <Loading />
  }

  return (
    <>
      <div id="sectionOne-container">
        <div className="s1-cont-content">
          <div className="img-divAND-content-s1">
            <Image
              src={mainSectionData.backgroundimg} // Use the URL directly from the API response
              width={1000}
              height={1000}
              alt="Section Background"
            />
            <div className="textIn-s1-img">
              <h4>{mainSectionData.artistname}</h4>
              <h1>{mainSectionData.trackname}</h1>
              <p>{mainSectionData.description}</p>
              <Link target="_blank" href={mainSectionData.linktolisten}>
                <button>Check it out!</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SectionOne

