"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import faqpropscss from "./faqpropscss.css"

import arrowRightFaq from "./assets/arrow-right-336-svgrepo-com.svg"
import arrowDownFaq from "./assets/arrow-down-338-svgrepo-com.svg"

function FaqProps(props) { 

    const [showFaqAnswer, setShowFaqAnswer] = useState(false)

    const handleShowFaqAns = () => { 
        setShowFaqAnswer(!showFaqAnswer)
    }

    return(
        <>
            <div id="faq-box-container">
                <div className="faq-content">
                    <div className="faqCntnt-Question">
                        <h2> {props.faqQuestion} </h2>
                        <Image onClick={handleShowFaqAns}
                               src={showFaqAnswer ? arrowDownFaq : arrowRightFaq} >
                               </Image>
                    </div>
                    <p style={showFaqAnswer ? {display: 'block'} : null}>{props.faqAnswer}</p>
                </div>
            </div>
        </>
    )
}
export default FaqProps