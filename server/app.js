import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import prisma from './prisma.js';  
import crypto from 'crypto';
import cookieParser from 'cookie-parser';
import multer from 'multer';

const app = express(); 
app.use(express.json());
const PORT = 8080; 
app.use(cookieParser());
// app.use('/uploads', express.static('uploads'));
app.use('/uploads', express.static('uploads', { root: __dirname })); //to fix the url of the file based images in production 

// CORS configuration
app.use(cors({
    origin: ['http://localhost:3000', 'https://www.slowsleeprecords.com'], // Allowed origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'], 
    exposedHeaders: ['Access-Control-Allow-Origin', 'Access-Control-Allow-Headers'], 
    credentials: true,
}));

// Set up multer for file handling (storage and filename)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');  // Directory for uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);  // Ensure a unique file name
  }
});

const upload = multer({ storage: storage });  // Initialize multer with storage settings

// Access Code Section
app.get('/api/create-access-code', async (req, res) => {
    try {
        const user = await prisma.user.create({
            data: {
                accesscode: process.env.ACCESSCODE,
            },
        });
        res.send({ message: "Access code created" });
    } catch (error) {
        console.error("There is an error", error);
        res.status(500).send({ error: "Failed to create access code or access code was already created"});
    }
});

// Fetching access code
app.post('/api/accesscode', async (req, res) => {
    const { accesscode } = req.body;
    const storedAccessCode = process.env.ACCESSCODE;

    try {
        if (accesscode !== storedAccessCode) {
            return res.status(401).send({ error: 'Access code does not match' });
        }

        const user = await prisma.user.findUnique({
            where: { accesscode: accesscode },
        });

        if (!user) {
            return res.status(401).send({ error: 'Access code does not match' });
        }

        res.send({ message: 'Access Granted' });
    } catch (error) {
        console.error('Error verifying access code:', error);
        res.status(500).send({ error: 'Failed to verify access code' });
    }
});

// Main Section API
app.get("/api/mainsection", async (req, res) => { 
    try {
        const mainsection = await prisma.mainSection.findUnique({
            where: {
                id: 1,
            },
        });

        if (!mainsection) {
            res.json({ data: "id returns null" });
        } else {
            res.json(mainsection);
        }
    } catch (error) { 
        res.status(500).json({ error: "Backend error || server 500" });
    }
});

// Update Main Section (with file upload)
app.post('/api/mainsection-update', upload.single('backgroundimg'), async (req, res) => {
    const { artistname, trackname, description, linktolisten } = req.body;
    const backgroundimg = req.file ? `/uploads/${req.file.filename}` : ''; // Save the file path
  
    try {
        const updateMainSection = await prisma.mainSection.update({
            where: { id: 1 },
            data: {
                artistname,
                trackname,
                description,
                linktolisten,
                backgroundimg,
            },
        });
        res.status(201).json({ message: 'Main section updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update main section' });
    }
});

// Discography Section
app.get("/api/discography-data", async (req, res) => {
    try {
        const discographySection = await prisma.discograpgy.findMany({
            select: {
                trackimg: true,
                tracktitle: true,
                artistname: true,
                tracklink: true,
            },
            orderBy: {
                id: 'desc' // Sorting by ID in descending order (latest first)
            }
        });
        res.json(discographySection);
    } catch (error) {
        res.status(500).json({ error: "Backend Server Error" });
    }
});

// Input Section -- Discography --
app.post("/api/discography-create", upload.single('trackimg'), async (req, res) => { 
    const { tracktitle, artistname, tracklink } = req.body;
    const trackimg = req.file ? `/uploads/${req.file.filename}` : ''; 

    try {
        const createDiscography = await prisma.discograpgy.create({
            data: {
                trackimg,
                tracktitle,
                artistname, 
                tracklink,
            }, 
        });
        res.status(201).json({ message: "Discography section created successfully" });

        if (createDiscography == undefined || null) {
            res.status(201).json({ message: "Discography section updated successfully" });
        }
    } catch(error) {
        console.error(error); 
        res.status(500).json({ error: "Failed to create discography section" });
    }
});

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
                id: 'desc' // Sorting by ID in descending order (latest first)
            }
        });
        res.json(biographySection); 
    } catch (error) {
        res.status(500).json({ error: "Backend Server Error" });
    }
});

// Input Section -- Biography --
app.post("/api/biography-create", upload.single('artistimg'), async (req, res) => { 
    const { artistname, artistbio, instagramhandles, spotifyprofile } = req.body;
    const artistimg = req.file ? `/uploads/${req.file.filename}` : ''; 

    try {
        const createBiography = await prisma.biography.create({
            data: {
                artistimg,
                artistname,
                artistbio,
                instagramhandles,
                spotifyprofile,
            }, 
        });
        res.status(201).json({ message: "Biography section created successfully" });

        if (createBiography == undefined || null) {
            res.status(201).json({ message: "Biography section updated successfully" });
        }
    } catch (error) {
        console.error(error); 
        res.status(500).json({ error: "Failed to create biography section" });
    }
});

app.get('/', (req, res) => { 
    res.json('message: This is Slow Sleep Records Server');
});

app.listen(PORT, () => { 
    console.log(`This server is running on port ${PORT}`);
});
