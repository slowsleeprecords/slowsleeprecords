"use client"

import leftcontainercss from "./leftcontainercss.css"
import HeaderCmpt from "../header/headercmpt"
import SectionOne from "../sectionOne/sectionOne"
import NewReleases from "../newReleases/newReleases"
import AboutArtists from "../aboutArtists/aboutArtists"
import Faq from "../faq/faq"
import Submit from "../submission/submit"
import Footer from "../footer/footer"
import Shop from "../shop/shop"

function LeftContainer() { 

    return(
        <>
            <div id="leftContainer">
            <div className="leftContent-contents">
                <HeaderCmpt />
                <SectionOne />
                <NewReleases />
                <AboutArtists />
                <Submit /> 
                <Shop /> 
                <Faq />
                <Footer /> 
            </div>
            </div>
        </>
    )
}
export default LeftContainer