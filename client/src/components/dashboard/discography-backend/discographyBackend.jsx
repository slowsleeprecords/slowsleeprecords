"use client"

import DashboardLayout from "../leftDashboardLayout/DashboardLayout"
import discographycss from "./discographycss.css"
import { useState, useEffect } from "react"
import axios from "axios"
// import { useRouter, usePathname, useSearchParams } from 'next/navigation'

export default function DiscographySection() {
  const [trackimg, setTrackimg] = useState(null)
  const [tracktitle, setTracktitle] = useState("")
  const [artistname, setArtistname] = useState("")
  const [tracklink, setTracklink] = useState("")
  const [error, setError] = useState("")

  const clearForm = () => {
    setTrackimg(null)
    setTracktitle("")
    setArtistname("")
    setTracklink("")
    setError("")
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setTrackimg(file)
      setError("")
    }
  }

  const handleSubmitDiscography = async (event) => {
    event.preventDefault()

    if (!trackimg) {
      setError("Please select an image file.")
      return
    }

    const formData = new FormData()
    formData.append("trackimg", trackimg)
    formData.append("tracktitle", tracktitle)
    formData.append("artistname", artistname)
    formData.append("tracklink", tracklink)

    try {
      const response = await axios.post("https://slowsleeprecords-server.vercel.app/api/discography-create", "http://localhost:8080/api/discography-create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      console.log(response.data)
      clearForm()
    } catch (error) {
      console.error(error)
      setError("An error occurred while uploading. Please try again.")
    }
  }

  return (
    <>
      <DashboardLayout />
      <div id="discographyBackend-container">
        <div id="discographyBackend-second-cont">
          <div className="discographyBackend-heading">
            <h1>Discography Section Input</h1>
            <hr className="hrline-for-discographyBackend-heading" />
          </div>
          {error && <div className="error-message">{error}</div>}
          <form onSubmit={handleSubmitDiscography} className="discographyBackend-form">
            <div className="discographyBackend-inputs">
              <input type="file" onChange={handleFileChange} required />
              <input
                placeholder="Enter track title"
                value={tracktitle}
                onChange={(e) => setTracktitle(e.target.value)}
                required
              />
              <input
                placeholder="Enter artist name"
                value={artistname}
                onChange={(e) => setArtistname(e.target.value)}
                required
              />
              <input
                placeholder="Enter track release link"
                value={tracklink}
                onChange={(e) => setTracklink(e.target.value)}
                required
              />
            </div>
            <div className="discographyBackendSection-buttons">
              <button type="submit">Create</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

