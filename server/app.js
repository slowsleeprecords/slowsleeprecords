import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import prisma from './prisma.js';  

const app = express(); 
app.use(express.json());
const PORT = 8080; 

app.use(cors({
    origin: 'http://localhost:3000', //the url that is allowed to use this server
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, 
}))


// Access Code Section --- Run this api to create the uniqe access code.... 
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

// fetching access code 
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
        // await prisma.$disconnect(); // Disconnect after the query

        if (!user) {
            return res.status(401).send({ error: 'Access code does not match' });
        }

        // Set a cookie for future authentication
        res.cookie('accessToken', 'validAccessToken', {
            httpOnly: true,
            maxAge: 60 * 60 * 24, // 1 day expiration
            secure: process.env.NODE_ENV === 'production',
        });

        res.send({ message: 'Access Granted' });
    } catch (error) {
        console.error('Error verifying access code:', error);
        // await prisma.$disconnect(); // Ensure disconnection even on error
        res.status(500).send({ error: 'Failed to verify access code' });
    }
});
// ---closed---


// Main Section API
app.get("/api/mainsection", async (req, res) => { 
    try {
        const mainsection = await prisma.mainSection.findUnique({
            where: {
                id: 1,
            },
        })

        if(mainsection == null){ 
            res.json({data: "id returns null"})
        }

        res.json(mainsection)
    } catch(error) { 
        if(res.status == 500) {
            res.json({error: "Backend error || server 500"})
        } 
    }
})

// Update Main Section
app.post("/api/mainsection-update", async (req, res) => { 
    const {artistname, trackname, description, linktolisten, backgroundimg} = req.body; 

    try{
        const updateMainSection = await prisma.mainSection.update({
            where: {
                id: 1,
            }, 
            data: { 
                artistname: artistname,
                trackname: trackname, 
                description: description, 
                linktolisten: linktolisten, 
                backgroundimg: backgroundimg,  
            }, 
        })
        res.status(201).json({ message: "Main section updated successfully" });

        if (updateMainSection == undefined || null) {
            res.json({data: "data could not be found"})
        }
    } catch(error) { 
        if(res.status == 500) { 
            console.error("Backend Server Error")
        } 

    }
})
// 
// Main Section Closed

// Discography Section 

// Get the discography section data from the backend
app.get("/api/discography-data", async (req, res) => {
    
    // const {trackimg, tracktitle, artistname, tracklink} = req.body;

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
        })
         res.json(discographySection); 

         if(discographySection == null || undefined) { 
            res.json({message: "Database returns a null or undefined value"})
         }

    } catch(error) {
        if(res.status == 500) { 
            console.error("Backend Server Error")
        } 
    }
})
// 
// Input section --discography--
app.post("/api/discography-create", async (req, res) => { 
    
    const {trackimg, tracktitle, artistname, tracklink} = req.body;

    try {
        const createDiscography = await prisma.discograpgy.create({
            data: {
                trackimg,
                tracktitle,
                artistname, 
                tracklink,
            }, 
        })
        res.status(201).json({ message: "Discography section created successfully" });

        if (createDiscography == undefined || null) {
            res.status(201).json({ message: "Discography section updated successfully" });
        }

    } catch(error) {
        console.error(error); 
        res.status(500).json({ error: "Failed to create discography section" });
  }
})

// Discography section closed


// Biography Section 

// Get the biography section data from the backend
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
        })
         res.json(biographySection); 

         if(biographySection == null || undefined) { 
            res.json({message: "Database returns a null or undefined value"})
         }

    } catch(error) {
        if(res.status == 500) { 
            console.error("Backend Server Error")
        } 
    }
})
// 

// Input section --biography--
app.post("/api/biography-create", async (req, res) => { 
    
    const {artistimg, artistname, artistbio, instagramhandles, spotifyprofile} = req.body;

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
        res.status(201).json({ message: "Biography section created successfully" });

        if (createBiography == undefined || null) {
            res.status(201).json({ message: "Biography section updated successfully" });
        }

    } catch(error) {
        console.error(error); 
        res.status(500).json({ error: "Failed to create biography section" });
  }
})
// Biograhy Section Closed




app.get('/', (req, res) => { 
    res.json('message: This is Slow Sleep Records Server')
})


app.listen(PORT, () => { 
    console.log(`This server is running on port ${PORT}`)
})