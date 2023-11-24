/*
  Warnings:

  - You are about to drop the `Student` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `hostels` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `rooms` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "rooms" DROP CONSTRAINT "rooms_hostelId_fkey";

-- DropTable
DROP TABLE "Student";

-- DropTable
DROP TABLE "hostels";

-- DropTable
DROP TABLE "rooms";

-- CreateTable
CREATE TABLE "Hostel" (
    "id" SERIAL NOT NULL,
    "hosteNname" TEXT NOT NULL,
    "maximumRooms" INTEGER NOT NULL DEFAULT 10,

    CONSTRAINT "Hostel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Room" (
    "id" SERIAL NOT NULL,
    "roomName" TEXT NOT NULL,
    "maximumStudents" INTEGER NOT NULL DEFAULT 5,
    "hostelId" INTEGER NOT NULL,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Room_hostelId_key" ON "Room"("hostelId");

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_hostelId_fkey" FOREIGN KEY ("hostelId") REFERENCES "Hostel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
