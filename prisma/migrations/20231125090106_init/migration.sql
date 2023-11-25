/*
  Warnings:

  - You are about to drop the `_RoomToStudent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_RoomToStudent" DROP CONSTRAINT "_RoomToStudent_A_fkey";

-- DropForeignKey
ALTER TABLE "_RoomToStudent" DROP CONSTRAINT "_RoomToStudent_B_fkey";

-- DropTable
DROP TABLE "_RoomToStudent";

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
