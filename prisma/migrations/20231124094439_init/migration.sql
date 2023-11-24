/*
  Warnings:

  - You are about to drop the `Hostel` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Rooms` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Hostel";

-- DropTable
DROP TABLE "Rooms";

-- CreateTable
CREATE TABLE "hostels" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "maximumRooms" INTEGER NOT NULL,

    CONSTRAINT "hostels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rooms" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "maximumStudents" INTEGER NOT NULL,
    "hostelId" INTEGER NOT NULL,

    CONSTRAINT "rooms_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "rooms" ADD CONSTRAINT "rooms_hostelId_fkey" FOREIGN KEY ("hostelId") REFERENCES "hostels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
