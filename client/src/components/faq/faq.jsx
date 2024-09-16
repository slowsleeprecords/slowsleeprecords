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
                        faqAnswer = "Cultertraz is the founder of Slow Sleep Records"
                    />

                    <FaqProps
                        faqQuestion = "Which country is Slow Sleep Records based in?"
                        faqAnswer = "Slow Sleep Records is based in the hearts of Kingston, Jamaica"
                    />

                    <FaqProps
                        faqQuestion = "Can I use Slow Sleep Records in my Youtube videos?"
                        faqAnswer = "Yes you can use our music in your Youtube videos, it is best to contact us for more info regarding claims & getting your channel whitlested."
                    />

                    <FaqProps
                        faqQuestion = "How many % of royalties will I get as an artist if my track gets signed by Slow Sleep Records?"
                        faqAnswer = "According to the terms of the agreement with Slow Sleep Records, artists are entitled to a 50% royalty share on their tracks. This means that for every dollar earned in royalties, the artist will receive fifty cents, while the label will retain the remaining fifty cents. This equitable split ensures a fair distribution of income between the artist and the label."
                    />

                 </div>
            </div>
        </>
    )
}
export default Faq