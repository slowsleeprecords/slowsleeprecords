"use client"

import Image from "next/image"
import laodingStyle from "./loadingStyle.css"

import loadingLogo from "@/components/header/assets/Slow Sleep Records logo - no backgroundtransparent-cropped.svg"


export default function Loading() { 
    return(<>
       <div id="loading-body">
        <div className="loading-logo">
            {/* <Image src={loadingLogo}></Image> */}
            <h1>Data API under development</h1>
        </div>
       </div>
    </>)
}