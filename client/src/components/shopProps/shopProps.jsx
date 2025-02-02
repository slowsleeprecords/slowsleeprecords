"use client"

import Image from "next/image"
import Link from "next/link"
import shopPropsStyle from "./shopPropsStyle.css"
import { useRef, useState } from "react"

import playIcon from "./assets/play-circle-svgrepo-com.svg"
import pauseIcon from "./assets/pause-circle-svgrepo-com.svg"

const ShopProps = (props) => { 

    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null); 

    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
         } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    let iconStyle;
    if (isPlaying) {
        iconStyle = {
            border: '2px solid var(--backgroundColor)',
            borderRadius: '50px',
            backgroundColor: 'var(--backgroundColor)'
        };
    } else {
        iconStyle = {};
    }

    return(<>
        <div id="shopPropsMain">
            <div className="shop-content-props">
             <div className="fortheImageProps">
                <Image src={props.ProductImage} width={999} height={999}></Image>
          </div>
           <div className="player-and-button">
                <div className="player-shop">
                    <div className="thePlayerItself">
                        <Image onClick={togglePlayPause} className="playerIcon"
                            src={isPlaying ? pauseIcon : playIcon}
                            width={999}
                            height={999}
                            alt="player icon"
                            style={iconStyle} //this shows the styling set at iconstyle is iPlaying === true
                         ></Image>
                         <audio ref={audioRef} src={props.audioSrc} />
                         <h3>{!isPlaying ? 'Preview' : <p className="now-playing-text">now playing!</p>} </h3>
                       </div>
                    <div className="shopButton"> 
                          <p>${props.ProductPrice}</p>
                          <Link target="_blank" href={props.ProductLink}> <button>Get It Here</button> </Link>
                     </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default ShopProps; 