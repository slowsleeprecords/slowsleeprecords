import musicreleasescss from "./musicreleasescss.css";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import ListenHere from "./assets/music-note-slider-2-svgrepo-com.svg";
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import Loading from "@/app/loading";



function Releases({showEditButton}) {
    const [releasesSection, setReleasesSection] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:8080/api/discography-data")
        .then((response) => {
            setReleasesSection(response.data);
        })
        .catch((error) => console.error("Error fetching data || ERROR:", error));
    }, []);

    if (releasesSection.length === 0) return <Loading/>;

    return (
        <>
            <div id="newmusicreleases">
                {releasesSection.map((release, index) => (
                    <div key={index} className="musicRelease-prop">
                        <Image src={release.trackimg} width={1000} height={1000} alt={release.tracktitle} />
                        <div className="musicRelease-text">
                            <div className="text-title-artist-release">
                                <h2>{release.tracktitle}</h2>
                                <p>{release.artistname}</p>
                            </div>
                            <div className="listen-here-releases">
                                <a target="_blank" href={release.tracklink}>
                                    <Image src={ListenHere} alt="Listen here" />
                                </a>
                            </div>
                        </div>
                         {/* Conditionally show the Edit Button */}
                         {showEditButton && (
                            <button className="edit-button-dashboard-releases">Edit Content</button>
                         )}
                    </div>
                ))}
            </div>
        </>
    );
}

export default Releases;
