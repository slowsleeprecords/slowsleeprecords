"use client"

import leftcontainercss from "./leftcontainercss.css"
import Header from "../header/header"
import SectionOne from "../sectionOne/sectionOne"
import NewReleases from "../newReleases/NewReleases"
import AboutArtists from "../aboutArtists/aboutArtists"
import Faq from "../faq/faq"
import Submit from "../submission/submit"
import Footer from "../footer/footer"

function LeftContainer() { 

    return(
        <>
            <div id="leftContainer">
            <div className="leftContent-contents">
                <Header />
                <SectionOne />
                <NewReleases />
                <AboutArtists />
                <Submit /> 
                <Faq />
                <Footer /> 
            </div>
            </div>
        </>
    )
}
export default LeftContainer