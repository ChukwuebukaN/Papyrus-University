/*
  Warnings:

  - A unique constraint covering the columns `[hostelName]` on the table `Hostel` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[roomName]` on the table `Room` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Room" DROP CONSTRAINT "Room_hostelId_fkey";

-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "registrationId" INTEGER NOT NULL,
    "fullName" TEXT NOT NULL,
    "birthYear" INTEGER NOT NULL,
    "department" TEXT NOT NULL,
    "roomId" INTEGER NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_HostelToRoom" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_RoomToStudent" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_registrationId_key" ON "Student"("registrationId");

-- CreateIndex
CREATE UNIQUE INDEX "Student_roomId_key" ON "Student"("roomId");

-- CreateIndex
CREATE UNIQUE INDEX "_HostelToRoom_AB_unique" ON "_HostelToRoom"("A", "B");

-- CreateIndex
CREATE INDEX "_HostelToRoom_B_index" ON "_HostelToRoom"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_RoomToStudent_AB_unique" ON "_RoomToStudent"("A", "B");

-- CreateIndex
CREATE INDEX "_RoomToStudent_B_index" ON "_RoomToStudent"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Hostel_hostelName_key" ON "Hostel"("hostelName");

-- CreateIndex
CREATE UNIQUE INDEX "Room_roomName_key" ON "Room"("roomName");

-- AddForeignKey
ALTER TABLE "_HostelToRoom" ADD CONSTRAINT "_HostelToRoom_A_fkey" FOREIGN KEY ("A") REFERENCES "Hostel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HostelToRoom" ADD CONSTRAINT "_HostelToRoom_B_fkey" FOREIGN KEY ("B") REFERENCES "Room"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RoomToStudent" ADD CONSTRAINT "_RoomToStudent_A_fkey" FOREIGN KEY ("A") REFERENCES "Room"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RoomToStudent" ADD CONSTRAINT "_RoomToStudent_B_fkey" FOREIGN KEY ("B") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;
