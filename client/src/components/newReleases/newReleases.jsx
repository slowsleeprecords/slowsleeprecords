// "use client"

import newreleasescss from "./newreleasescss.css"
import Image from "next/image"
import Link from "next/link"
import Releases from "./releasesProp/musicreleases"


function NewReleases() { 

    return(
        <>
        <div id="newReleases-container-main">
            <div className="newReleases-contents">
                <h1>Discography</h1>
                <p> All new music proudly released/published through Slow Sleep Records. </p>
            </div>

            <div className="container-TOHold-releases-props">
                <Releases/>
            </div>
        </div>
        </>
    )
}
export default NewReleases