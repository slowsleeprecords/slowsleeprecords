import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import mainsectionBackendcss from "./mainsectioncss-backen.css"
import Dashboard from "@/app/dashboard/page"
import DashboardLayout from "../leftDashboardLayout/DashboardLayout"
import axios from "axios"
import Loading from "@/app/loading"

export default function MainsectionBackend() { 

  const [artistname, setArtistname] = useState("");
  const [trackname, setTrackname] = useState("");
  const [description, setDescription] = useState("");
  const [linktolisten, setLinktolisten] = useState("");
  const [backgroundimg, setBackgroundimg] = useState("");

//   This function will clear the fields after successful update
const clearForm = () => { 
    setArtistname("");
    setTrackname("");
    setDescription("");
    setLinktolisten("");
    setBackgroundimg("");
}

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/mainsection-update", {
        artistname,
        trackname,
        description,
        linktolisten,
        backgroundimg,
      });
      console.log(response.data);
    //   Cler the fields
    if (response.status === 200 || response.status === 201) {
        clearForm();
      } 

    } catch (error) {
      console.error(error);
    }
  };

  // if (artistname.length === 0 || trackname.length === 0 || description.length === 0 || linktolisten.length === 0 || backgroundimg.length === 0) return <Loading/>;

  return (
    <>
      <DashboardLayout />
      <div id="mainsectionBackend-container">
        <div id="mainsectionBackend-second-cont">
          <div className="mainsectionBackend-heading">
            <h1>Main Section Input</h1>
            <hr className="hrline-for-mainsectionBackend-heading" />
          </div>
          <form
            className="mainsectionBackend-form"
            onSubmit={handleSubmit}
          >
            <div className="mainsectionBackend-inputs">
              <input
                placeholder="Enter background image link"
                value={backgroundimg}
                onChange={(e) => setBackgroundimg(e.target.value)}
                required
              ></input>
              <input
                placeholder="Enter artist name, product name, etc.."
                value={artistname}
                onChange={(e) => setArtistname(e.target.value)}
                required
              ></input>
              <input
                placeholder="Enter track title, product title, etc.."
                value={trackname}
                onChange={(e) => setTrackname(e.target.value)}
                required
              ></input>
              <textarea
                placeholder="Enter track description, product description, etc.."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                rows={2}
                onInput={(e) => {
                  setTimeout(() => {
                    if (e.target.value === "") {
                      e.target.rows = 2;
                    } else {
                      e.target.rows = Math.max(
                        1,
                        e.target.scrollHeight / 20
                      );
                    }
                  }, 10);
                }}
              ></textarea>
              <input
                placeholder="Enter link to track, product link, etc.."
                value={linktolisten}
                onChange={(e) => setLinktolisten(e.target.value)}
                required
              ></input>
            </div>
            <div className="mainsection-BackendSection-button">
              <button type="submit">Update</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}