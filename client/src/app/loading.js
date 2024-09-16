"use client"

import Image from "next/image"
import SlowSleepLoadingIcon from "./Slow Sleep Loading Icon.svg"

export default function Loading() { 
    return(<>
        <Image src={SlowSleepLoadingIcon} alt="loading icon"></Image>
    </>)
}