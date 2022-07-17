/*
  Warnings:

  - You are about to drop the `ExplorerV2` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "ExplorerV2";

-- CreateTable
CREATE TABLE "DetailExplorer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lang" VARCHAR(255) NOT NULL,
    "missionCommander" VARCHAR(255) NOT NULL,
    "enrollments" INTEGER NOT NULL DEFAULT 1,
    "hasCertification" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "DetailExplorer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DetailExplorer_name_key" ON "DetailExplorer"("name");
