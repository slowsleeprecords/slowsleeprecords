import express from "express"
import cors from "cors"
import "dotenv/config"
import prisma from "./prisma.js"
import cookieParser from "cookie-parser"
import multer from "multer"
import { put } from "@vercel/blob"

const app = express()
app.use(express.json())
const PORT = 8080
app.use(cookieParser())

// CORS configuration
app.use(
  cors({
    origin: ["https://www.slowsleeprecords.com", "http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["Access-Control-Allow-Origin", "Access-Control-Allow-Headers"],
    credentials: true,
  }),
)

// Multer configuration for file upload
const upload = multer({
  storage: multer.memoryStorage(),
})

// Access Code Section
app.get("/api/create-access-code", async (req, res) => {
  try {
    const user = await prisma.user.create({
      data: {
        accesscode: process.env.ACCESSCODE,
      },
    })
    res.send({ message: "Access code created" })
  } catch (error) {
    console.error("There is an error", error)
    res.status(500).send({ error: "Failed to create access code or access code was already created" })
  }
})

// Fetching access code
app.post("/api/accesscode", async (req, res) => {
  const { accesscode } = req.body
  const storedAccessCode = process.env.ACCESSCODE

  try {
    if (accesscode !== storedAccessCode) {
      return res.status(401).send({ error: "Access code does not match" })
    }

    const user = await prisma.user.findUnique({
      where: { accesscode: accesscode },
    })

    if (!user) {
      return res.status(401).send({ error: "Access code does not match" })
    }

    res.send({ message: "Access Granted" })
  } catch (error) {
    console.error("Error verifying access code:", error)
    res.status(500).send({ error: "Failed to verify access code" })
  }
})

// Main Section API
app.get("/api/mainsection", async (req, res) => {
  try {
    const mainsection = await prisma.mainSection.findUnique({
      where: {
        id: 1,
      },
    })

    if (!mainsection) {
      res.json({ data: "id returns null" })
    } else {
      res.json(mainsection)
    }
  } catch (error) {
    res.status(500).json({ error: "Backend error || server 500" })
  }
})

// Update Main Section (with file upload)
app.post("/api/mainsection-update", upload.single("backgroundimg"), async (req, res) => {
  const { artistname, trackname, description, linktolisten } = req.body
  const backgroundimg = req.file

  if (!backgroundimg) {
    return res.status(400).json({ error: "No file uploaded" })
  }

  let fileUrl = null
  try {
    const blob = await put(backgroundimg.originalname, backgroundimg.buffer, {
      access: "public",
      token: process.env.BLOB_READ_WRITE_TOKEN,
    })
    fileUrl = blob.url
  } catch (error) {
    console.error("Error uploading to Vercel Blob:", error)
    return res.status(500).json({ error: "Failed to upload file" })
  }

  try {
    const updateMainSection = await prisma.mainSection.update({
      where: { id: 1 },
      data: {
        artistname,
        trackname,
        description,
        linktolisten,
        backgroundimg: fileUrl,
      },
    })
    res.status(201).json({ message: "Main section updated successfully" })
  } catch (error) {
    console.error("Error updating main section:", error)
    res.status(500).json({ error: "Failed to update main section", details: error.message })
  }
})

// Discography Section
app.get("/api/discography-data", async (req, res) => {
  try {
    const discographySection = await prisma.discography.findMany({
      select: {
        trackimg: true,
        tracktitle: true,
        artistname: true,
        tracklink: true,
      },
      orderBy: {
        id: "desc", // Sorting by ID in descending order (latest first)
      },
    })
    res.json(discographySection)
  } catch (error) {
    res.status(500).json({ error: "Backend Server Error" })
  }
})

// Input Section -- Discography --
app.post("/api/discography-create", upload.single("trackimg"), async (req, res) => {
  const { tracktitle, artistname, tracklink } = req.body
  const trackimg = req.file ? `/uploads/${req.file.filename}` : ""

  try {
    const createDiscography = await prisma.discography.create({
      data: {
        trackimg,
        tracktitle,
        artistname,
        tracklink,
      },
    })
    res.status(201).json({ message: "Discography section created successfully" })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Failed to create discography section", error })
  }
})

// Biography Section
app.get("/api/biography-data", async (req, res) => {
  try {
    const biographySection = await prisma.biography.findMany({
      select: {
        artistimg: true,
        artistname: true,
        artistbio: true,
        instagramhandles: true,
        spotifyprofile: true,
      },
      orderBy: {
        id: "desc", // Sorting by ID in descending order (latest first)
      },
    })
    res.json(biographySection)
  } catch (error) {
    res.status(500).json({ error: "Backend Server Error" })
  }
})

// Input Section -- Biography --
app.post("/api/biography-create", upload.single("artistimg"), async (req, res) => {
  const { artistname, artistbio, instagramhandles, spotifyprofile } = req.body
  const artistimg = req.file ? `/uploads/${req.file.filename}` : ""

  try {
    const createBiography = await prisma.biography.create({
      data: {
        artistimg,
        artistname,
        artistbio,
        instagramhandles,
        spotifyprofile,
      },
    })
    res.status(201).json({ message: "Biography section created successfully" })

    if (createBiography == undefined || null) {
      res.status(201).json({ message: "Biography section updated successfully" })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Failed to create biography section", error })
  }
})

app.get("/", (req, res) => {
  res.json("message: This is Slow Sleep Records Server")
})

app.listen(PORT, () => {
  console.log(`This server is running on port ${PORT}`)
})

