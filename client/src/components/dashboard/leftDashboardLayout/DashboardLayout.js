"use client"

import dashboardcss from "../dashboardcss.css"
import Link from "next/link"


const DashboardLayout = () => { 
   return(<>
     <div id="left-side-cont-dashboard">
            <div className="leftSideDashbaord-content">
                <h2>Slow Sleep Records <br/> 
                    Dashboard</h2>
                    <ul>
                        <Link href="/dashboard"><li>Dashboard</li></Link>
                        <Link href="/dashboard/mainsection"><li>Main Section</li></Link>
                        <Link href="/dashboard/discography"><li>Discography</li></Link>
                        <Link href="/dashboard/biography"><li>Biography</li></Link>
                    </ul>
                </div>           
            </div>
   </>)
}
export default DashboardLayout