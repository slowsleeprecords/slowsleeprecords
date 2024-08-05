"use client"

import Link from "next/link"
import Image from "next/image"
import footercss from "./footercss.css"

import DiscordIcon from "./assets/discord-svgrepo-com (1).svg"
import FacebookIcon from "./assets/facebook-svgrepo-com.svg"
import InstagramIcon from "./assets/instagram-svgrepo-com (1).svg"
import YoutubeIcon from "./assets/youtube-168-svgrepo-com.svg"


const Footer = () => {


    return( 
        <>
            <div id="footer-container">
                <div className="footer-contents">
                    <h1>Slow Sleep Records</h1>
                    <div className="footer-p-and-socials">
                        <p>Slow Sleep Records, a record label company based in Kingston, Jamaica</p>
                         <div className="the-socials">
                            <Link href=""> <Image src={DiscordIcon} alt=""></Image> </Link>
                            <Link href=""> <Image src={FacebookIcon} alt=""></Image> </Link>
                            <Link href=""> <Image src={InstagramIcon} alt=""></Image> </Link>
                            <Link href=""> <Image src={YoutubeIcon} alt=""></Image> </Link>
                         </div>
                    </div>
                </div>
                <div className="footer-contents-bottom">
                    <p>©️ {new Date().getFullYear()} <span>Slow Sleep Records</span></p>
                </div>
            </div>
        </>
    )
}
export default Footer