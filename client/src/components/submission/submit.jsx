"use client"

import Link from "next/link"
import Image from "next/image"
import submitcss from "./submitcss.css"

const Submit = () => { 

    return(
        <>
        <div id="submission-container">
        <div className="submission-title">
            <h1>Submit Your Music</h1>
            <div className="line-under-title"></div>
          </div>
          <div className="the-submission-method">
            <div className="playlist-submission">
                <h1>Playlist</h1>
                <div className="the-playlistSubmission-content">
                    <p>To submit your music for playlist consideration, please click the button Below</p>
                    <a href="https://discord.gg/95hMhEQhcu" target="_blank"><button>playlist submission</button></a>
                </div>
            </div>
            <div className="label-submission">
                <h1>Label</h1>
                <div className="the-labelSubmission-content">
                    <p>To submit your music for label consideration, please click the button Below</p>
                    <a href="https://discord.gg/XQx648vG39" target="_blank"><button>label submission</button></a>
                </div>
            </div>
            <div className="promo-submission">
                <h1>Lofi Promotion</h1>
                <div className="the-promoSubmission-content">
                    <p>Want to promote your lofi music, sample pack, etc., on the mainsection of our website? If yes, please visit our kofi page by clicking the link below to learn more</p>
                    <a href="https://ko-fi.com/slowsleeprecords" target="_blank"><button>lofi promotion</button></a>
                </div>
            </div>
          </div>
        </div>
        </>
    )
}
export default Submit