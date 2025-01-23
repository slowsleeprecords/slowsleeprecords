import { readFileSync } from 'fs';
import { PrismaClient } from '@prisma/client';
import path from 'path';  // Import the path module
import { fileURLToPath } from 'url'; // Import fileURLToPath from 'url' module

const prisma = new PrismaClient();

// Get the directory name using import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);  // Resolve the directory name

// Resolve the file path (absolute)
const filePath = path.join(__dirname, 'Biographybackup.json'); // Assuming the JSON is in the same directory

// Read the JSON data
const biographyData = JSON.parse(readFileSync(filePath, 'utf8'));

// Function to insert biography data into the database
async function insertBiography() {
  for (const artist of biographyData) {
    try {
      await prisma.biography.upsert({
        where: { id: artist.id },
        update: {
          artistimg: artist.artistimg,
          artistname: artist.artistname,
          artistbio: artist.artistbio,
          instagramhandles: artist.instagramhandles,
          spotifyprofile: artist.spotifyprofile,
        },
        create: {
          id: artist.id,
          artistimg: artist.artistimg,
          artistname: artist.artistname,
          artistbio: artist.artistbio,
          instagramhandles: artist.instagramhandles,
          spotifyprofile: artist.spotifyprofile,
        },
      });
    } catch (error) {
      console.error('Error inserting biography:', error);
    }
  }
  console.log('Biographies inserted successfully!');
}

// Run the insertion
insertBiography()
  .catch((e) => {
    console.error('Error:', e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
