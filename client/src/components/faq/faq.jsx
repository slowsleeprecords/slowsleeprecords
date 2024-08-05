"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import faqcss from "./faqcss.css"
import FaqProps from "./faqProps/faqProps"

function Faq() { 

    return(
        <>
            <div id="faq-main-container">
                <div className="heading-faq-title">
                    <h1>Frequently Asked Questions</h1>
                    <p></p>
                </div>
                <div className="container-to-hold-faq-props">

                    <FaqProps
                        faqQuestion = "Who is the founder of Slow Sleep Records?"
                        faqAnswer = "The founder of Slow Sleep Records is Cultertraz."
                    />

                    <FaqProps
                        faqQuestion = "Who is the founder of Slow Sleep Records?"
                        faqAnswer = "The founder of Slow Sleep Records is Cultertraz."
                    />

                    <FaqProps
                        faqQuestion = "Who is the founder of Slow Sleep Records?"
                        faqAnswer = "The founder of Slow Sleep Records is Cultertraz."
                    />

                 </div>
            </div>
        </>
    )
}
export default Faq