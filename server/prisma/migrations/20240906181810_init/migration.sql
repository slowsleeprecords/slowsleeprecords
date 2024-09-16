/*
  Warnings:

  - A unique constraint covering the columns `[accesscode]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "User_accesscode_key" ON "User"("accesscode");
