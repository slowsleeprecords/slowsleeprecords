"use client"

import LeftContainer from "@/components/leftContainer/leftContainer"
import RightContainer from "@/components/rightContainer/rightContainer"
import mainPageCSS from "./mainPagecss.css"
import MaintenancePage from "@/components/Maintenance/maintenance"

function Main() {
    return(
        <>
        <div id="mainpageCSS">
            {/* <LeftContainer />
            <RightContainer /> */}
            <MaintenancePage/>
         </div>
        </>
    )
}
export default Main