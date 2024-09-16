"use client"

import Image from "next/image"
import Link from "next/link"
import dashboardcss from "./dashboardcss.css"
import DashboardLayout from "./leftDashboardLayout/DashboardLayout"
import Releases from "../newReleases/releasesProp/musicreleases"
import SectionOne from "../sectionOne/sectionOne"
import { useState, useEffect } from "react"
import DiscographySection from "./discography-backend/discographyBackend"
import AboutArtistData from "../aboutArtists/artistsProp/artistsProp"

export default function DashboardPage() { 

    const [selectedRelease, setSelectedRelease] = useState(null);

    const handleEditRelease = (release) => {
        setSelectedRelease(release);
    };

    return(<>
        <div id="main-dashboard-cont">
            <div className="the-dashboard-second-main">
                {/* Right Side Container */}
                <DashboardLayout /> 
                <div id="right-side-cont-dashboard-main">
                    <div className="rightSideDashboard-content">

                        {/*  Main Section */}
                         <div className="mainsection-dashboard-editor">
                            <h1>Main Section Published</h1>
                            <hr />
                            <SectionOne />
                        </div>
                        {/*  */}
                        
                        {/* New Music Releases Section */}
                        <div className="musicReleases-dashboard-editor">
                            <h1>All Songs Published</h1>
                            <hr />
                                {/* Pass showEditButton={true} to show the Edit button */}
                                <Releases showEditButton={true} />
                        </div>
                        {/*  */}

                        {/* Biography Section */}
                        <div className="biography-dashboard-editor">
                            <h1>All Artist Biography Published</h1>
                            <hr />
                            <AboutArtistData editButton={true}/>
                        </div>
                        {/*  */}

                    </div>
                </div>
            </div>
        </div>
    </>)
}