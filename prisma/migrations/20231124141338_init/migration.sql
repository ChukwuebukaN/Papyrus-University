/*
  Warnings:

  - You are about to drop the `_HostelToRoom` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_HostelToStudent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_RoomToStudent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_HostelToRoom" DROP CONSTRAINT "_HostelToRoom_A_fkey";

-- DropForeignKey
ALTER TABLE "_HostelToRoom" DROP CONSTRAINT "_HostelToRoom_B_fkey";

-- DropForeignKey
ALTER TABLE "_HostelToStudent" DROP CONSTRAINT "_HostelToStudent_A_fkey";

-- DropForeignKey
ALTER TABLE "_HostelToStudent" DROP CONSTRAINT "_HostelToStudent_B_fkey";

-- DropForeignKey
ALTER TABLE "_RoomToStudent" DROP CONSTRAINT "_RoomToStudent_A_fkey";

-- DropForeignKey
ALTER TABLE "_RoomToStudent" DROP CONSTRAINT "_RoomToStudent_B_fkey";

-- DropTable
DROP TABLE "_HostelToRoom";

-- DropTable
DROP TABLE "_HostelToStudent";

-- DropTable
DROP TABLE "_RoomToStudent";

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_hostelId_fkey" FOREIGN KEY ("hostelId") REFERENCES "Hostel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
