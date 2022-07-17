-- CreateTable
CREATE TABLE "ExplorerV2" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lang" VARCHAR(255) NOT NULL,
    "missionCommander" VARCHAR(255) NOT NULL,
    "enrollments" INTEGER NOT NULL DEFAULT 1,
    "hasCertification" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ExplorerV2_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ExplorerV2_name_key" ON "ExplorerV2"("name");
