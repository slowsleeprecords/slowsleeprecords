"use client"

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import mainsectionBackendcss from "./mainsectioncss-backen.css";
import Dashboard from "@/app/dashboard/page";
import DashboardLayout from "../leftDashboardLayout/DashboardLayout";
import axios from "axios";
import Loading from "@/app/loading";

export default function MainsectionBackend() {
  const [artistname, setArtistname] = useState("")
  const [trackname, setTrackname] = useState("")
  const [description, setDescription] = useState("")
  const [linktolisten, setLinktolisten] = useState("")
  const [backgroundimg, setBackgroundimg] = useState(null)
  const [error, setError] = useState("")

  const clearForm = () => {
    setArtistname("")
    setTrackname("")
    setDescription("")
    setLinktolisten("")
    setBackgroundimg(null)
    setError("")
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setBackgroundimg(file)
      setError("")
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!backgroundimg) {
      setError("Please select a file.")
      return
    }

    const formData = new FormData()

    formData.append("backgroundimg", backgroundimg)
    formData.append("artistname", artistname)
    formData.append("trackname", trackname)
    formData.append("description", description)
    formData.append("linktolisten", linktolisten)

    try {
      const response = await axios.post("https://slowsleeprecords-server.vercel.app/api/mainsection-update" && "http://localhost:8080/api/mainsection-update", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })

      console.log(response.data)

      // if (response.status === 200 || response.status === 201) {
      //   clearForm()
      // }
      clearForm(); 
      setBackgroundimg("")

    } catch (error) {
      console.error(error)
      setError("An error occurred while uploading. Please try again.")
    }
  }

  return (
    <>
      <DashboardLayout />
      <div id="mainsectionBackend-container">
        <div id="mainsectionBackend-second-cont">
          <div className="mainsectionBackend-heading">
            <h1>Main Section Input</h1>
            <hr className="hrline-for-mainsectionBackend-heading" />
          </div>
          {error && <div className="error-message">{error}</div>}
          <form className="mainsectionBackend-form" onSubmit={handleSubmit}>
            <div className="mainsectionBackend-inputs">
              <input type="file" onChange={handleFileChange} required />
              <input
                placeholder="Enter artist name, product name, etc.."
                value={artistname}
                onChange={(e) => setArtistname(e.target.value)}
                required
              />
              <input
                placeholder="Enter track title, product title, etc.."
                value={trackname}
                onChange={(e) => setTrackname(e.target.value)}
                required
              />
              <textarea
                placeholder="Enter track description, product description, etc.."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                rows={2}
                onInput={(e) => {
                  setTimeout(() => {
                    if (e.target.value === "") {
                      e.target.rows = 2
                    } else {
                      e.target.rows = Math.max(1, e.target.scrollHeight / 20)
                    }
                  }, 10)
                }}
              />
              <input
                placeholder="Enter link to track, product link, etc.."
                value={linktolisten}
                onChange={(e) => setLinktolisten(e.target.value)}
                required
              />
            </div>
            <div className="mainsection-BackendSection-button">
              <button type="submit">Update</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

