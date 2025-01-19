"use client"

import leftcontainercss from "../leftContainer/leftcontainercss.css"
import headercss from "./headercss.css"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

import logo from "./assets/slow sleep logo for releases-cropped.svg"
import logo2 from "./assets/Slow Sleep Records logo - no backgroundtransparent-cropped.svg"
import burgerOpen from "./assets/burger-advanced-svgrepo-com.svg"
import burgerClosed from "./assets/close-bold-svgrepo-com.svg"

function HeaderCmpt() {

    const handleScrollHome = () => {
        const homeElement = document.getElementById('sectionOne-container');
        if (homeElement) {
            homeElement.scrollIntoView({ behavior: 'smooth' });
        }
        setShowHeader(false); // Close menu
    }

    const handleScrollDiscography = () => {
        const discographyElement = document.getElementById('newReleases-container-main');
        if (discographyElement) {
            discographyElement.scrollIntoView({ behavior: 'smooth' });
        }
        setShowHeader(false); // Close menu
    }

    const handleScrollBiography = () => {
        const biographyElement = document.getElementById('biography-section');
        if (biographyElement) {
            biographyElement.scrollIntoView({ behavior: 'smooth' });
        }
        setShowHeader(false); // Close menu
    }

    const handleScrollFaq = () => {
        const faqElement = document.getElementById('faq-main-container');
        if (faqElement) {
            faqElement.scrollIntoView({ behavior: 'smooth' });
        }
        setShowHeader(false); // Close menu
    }

    const handleScrollSubmit = () => {
        const submitElement = document.getElementById('submission-container');
        if (submitElement) {
            submitElement.scrollIntoView({ behavior: 'smooth' });
        }
        setShowHeader(false); // Close menu
    }

    const handleScrollShop = () => {
        const submitElement = document.getElementById('parent-container-shop');
        if (submitElement) {
            submitElement.scrollIntoView({ behavior: 'smooth' });
        }
        setShowHeader(false); // Close menu
    }

    // Use States for headers
    const [showHeader, setShowHeader] = useState(false)
    const handleShowHeader = () => {
        setShowHeader(!showHeader)
    }

    return (
        <>
            <header>
                {/* <Image src={logo} alt="Logo"></Image> */}
                <Image className="header-logo-two" src={logo2} alt="logo2"></Image>
                <ul>
                    <li onClick={handleScrollHome}><a>Home</a></li>
                    <li onClick={handleScrollDiscography}><a>Discography</a></li>
                    <li onClick={handleScrollBiography}><a>Biography</a></li>
                    <li onClick={handleScrollFaq}><a>Faq</a></li>
                    <li onClick={handleScrollShop}><a>Shop</a></li>
                    <a onClick={handleScrollSubmit}><button>Submit</button></a>
                </ul>
            </header>
            
            <div className="header-for-small-devices">
                <div className="logo-mobile-head">
                    <Image onClick={handleShowHeader} src={showHeader ? burgerClosed : burgerOpen} alt="Menu"></Image>
                </div>
                <ul className={showHeader ? 'slide-in' : 'slide-out'}>
                    <li onClick={handleScrollHome}><a>Home</a></li>
                    <li onClick={handleScrollDiscography}><a>Discography</a></li>
                    <li onClick={handleScrollBiography}><a>Biography</a></li>
                    <li onClick={handleScrollFaq}><a>Faq</a></li>
                    <li onClick={handleScrollShop}><a>Shop</a></li>
                    <a onClick={handleScrollSubmit}><button>Submit</button></a>
                </ul>
            </div>
        </>
    )
}

export default HeaderCmpt
