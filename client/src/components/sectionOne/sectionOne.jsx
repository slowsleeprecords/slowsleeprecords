"use client"

import sectiononecss from "./sectiononecss.css"
import Image from "next/image"

function SectionOne() { 
    
    return(
        <>
        <div id="sectionOne-container">
           <div className="s1-cont-content">
             <div className="img-divAND-content-s1">
                <Image src="https://wallpaperaccess.com/full/2471303.gif" width={1000} height={1000}></Image>
                <div className="textIn-s1-img">
                    <h4>Cultertraz</h4>
                    <h1>Morning Dew</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a scelerisque felis. Ut et sollicitudin massa. Nunc fringilla pretium mi a molestie. Maecenas sagittis lorem nec augue luctus aliquet. Etiam viverra urna eros, et ullamcorper felis varius sit amet. Vestibulum sit amet nunc non ante efficitur ullamcorper.</p>
                    <button>Listen Here</button>
                </div>
             </div>
           </div>
        </div>
        </>
    )
}
export default SectionOne