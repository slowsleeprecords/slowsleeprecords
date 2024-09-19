import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.POSTGRES_URL
    }
  }
});

export default prisma;
