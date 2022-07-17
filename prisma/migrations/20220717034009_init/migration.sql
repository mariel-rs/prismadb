/*
  Warnings:

  - You are about to drop the `DetailExplorer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "DetailExplorer";

-- CreateTable
CREATE TABLE "Details" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lang" VARCHAR(255) NOT NULL,
    "missionCommander" VARCHAR(255) NOT NULL,
    "enrollments" INTEGER NOT NULL DEFAULT 1,
    "hasCertification" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Details_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Details_name_key" ON "Details"("name");
