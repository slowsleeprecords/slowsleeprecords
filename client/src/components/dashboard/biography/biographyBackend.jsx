"use client";

import DashboardLayout from "../leftDashboardLayout/DashboardLayout";
import BiographyBackendcss from "./biographyBackendcss.css";
import { useState } from "react";
import axios from "axios";

export default function BiographyBackendSection() {
  const [artistimg, setArtistImg] = useState(null);
  const [artistname, setArtistName] = useState("");
  const [artistbio, setArtistBio] = useState("");
  const [instagramhandles, setInstagramHandles] = useState("");
  const [spotifyprofile, setSpotifyProfile] = useState("");
  const [error, setError] = useState("")

  // This function will clear the form fields after a successful create
  const clearForm = () => {
    setArtistImg("");
    setArtistName("");
    setArtistBio("");
    setInstagramHandles("");
    setSpotifyProfile("");
  };

  const handleFileChangeBio = (e) => { 
    const file = e.target.files[0]
    if(file) { 
      setArtistImg(file)
      setError("")
    }
  }

  const handleSubmitBiography = async (event) => {
    event.preventDefault();

    if(!artistimg) { 
      setError("Please Select an image file")
      return
    }

    const formData = new FormData();
    formData.append("artistimg", artistimg);
    formData.append("artistname", artistname);
    formData.append("artistbio", artistbio);
    formData.append("instagramhandles", instagramhandles);
    formData.append("spotifyprofile", spotifyprofile);

    try {
      const response = await axios.post(
        "https://slowsleeprecords-server.vercel.app/api/biography-create" && "http://localhost:8080/api/biography-create", formData, {

          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);

      // Clear the form fields if successful
      if (response.status === 201) {
        clearForm();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <DashboardLayout />
      <div id="biographyBackend-container">
        <div id="biographyBackend-second-cont">
          <div className="biographyBackend-heading">
            <h1>Biography Section Input</h1>
            <hr className="hrline-for-biographyBackend-heading" />
          </div>
          <form onSubmit={handleSubmitBiography} className="biographyBackend-form">
            <div className="biographyBackend-inputs">
              <input
                type="file"
                onChange={handleFileChangeBio}
                required
              ></input>

              <input
                placeholder="Enter artist name"
                value={artistname}
                onChange={(e) => setArtistName(e.target.value)}
                required
              ></input>

              <textarea
                placeholder="Enter track description, product description, etc.."
                value={artistbio}
                onChange={(e) => setArtistBio(e.target.value)}
                required
                rows={2}
                onInput={(e) => {
                  setTimeout(() => {
                    if (e.target.value === "") {
                      e.target.rows = 2;
                    } else {
                      e.target.rows = Math.max(1, e.target.scrollHeight / 20);
                    }
                  }, 10);
                }}
              ></textarea>

              <input
                placeholder="Enter artist Instagram link"
                value={instagramhandles}
                onChange={(e) => setInstagramHandles(e.target.value)}
                required
              ></input>

              <input
                placeholder="Enter artist Spotify Profile link"
                value={spotifyprofile}
                onChange={(e) => setSpotifyProfile(e.target.value)}
                required
              ></input>
            </div>

            <div className="biographyBackendSection-buttons">
              <button type="submit">Create</button>
              {/* <button type="submit">Update</button> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
