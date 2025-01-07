"use client"

import Link from "next/link"
import Image from "next/image"
import maintenanceStyle from "./maintenanceStyle.css"

import MaintenecanceImg from "./site under maintenance.svg"

export default function MaintenancePage() { 

    return(<>
    <div id="maintenanace-container">
        {/* <Image className="maintenanceImg" src={MaintenecanceImg}></Image> */}

        <div className="content-maintenance">
            <h1>Website Under Maintenance</h1>
            <h2>The Slow Sleep Records website is currently undergoing maintenance. We appreciate your patience <br/>
                as we work to create a better user experience and improved interface for our visitors.</h2>
                <hr className="hr-line"/>
            <h4>In the meantime, you may visit our Discord server for label submissions, updates, etc.</h4>

           <Link href="https://discord.com/invite/XQx648vG39"><button>Discord Server</button></Link>
        </div>
</div>
    </>)
}