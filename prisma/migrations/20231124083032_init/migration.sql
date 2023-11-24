/*
  Warnings:

  - You are about to drop the `_HostelToRooms` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `hostelId` to the `Rooms` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_HostelToRooms" DROP CONSTRAINT "_HostelToRooms_A_fkey";

-- DropForeignKey
ALTER TABLE "_HostelToRooms" DROP CONSTRAINT "_HostelToRooms_B_fkey";

-- AlterTable
ALTER TABLE "Rooms" ADD COLUMN     "hostelId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_HostelToRooms";

-- AddForeignKey
ALTER TABLE "Rooms" ADD CONSTRAINT "Rooms_hostelId_fkey" FOREIGN KEY ("hostelId") REFERENCES "Hostel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
