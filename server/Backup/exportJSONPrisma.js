import { PrismaClient } from '@prisma/client';
import fs from 'fs';

const prisma = new PrismaClient();

async function exportData() {
  try {
    const discography = await prisma.biography.findMany(); //Chane the name of the table you want to backup
    fs.writeFileSync('backup.json', JSON.stringify(discography, null, 2));
    console.log('Data exported to backup.json');
  } catch (error) {
    console.error('Error exporting data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

exportData();