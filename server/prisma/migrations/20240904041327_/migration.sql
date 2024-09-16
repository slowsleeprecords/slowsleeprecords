-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "accesscode" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MainSection" (
    "id" SERIAL NOT NULL,
    "artistname" TEXT NOT NULL,
    "trackname" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "linktolisten" TEXT NOT NULL,
    "backgroundimg" TEXT NOT NULL,

    CONSTRAINT "MainSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Discograpgy" (
    "id" SERIAL NOT NULL,
    "trackimg" TEXT NOT NULL,
    "tracktitle" TEXT NOT NULL,
    "artistname" TEXT NOT NULL,
    "tracklink" TEXT NOT NULL,

    CONSTRAINT "Discograpgy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Biography" (
    "id" SERIAL NOT NULL,
    "artistimg" TEXT NOT NULL,
    "artistname" TEXT NOT NULL,
    "artistbio" TEXT NOT NULL,
    "instagramhandles" TEXT,
    "spotifyprofile" TEXT,

    CONSTRAINT "Biography_pkey" PRIMARY KEY ("id")
);
