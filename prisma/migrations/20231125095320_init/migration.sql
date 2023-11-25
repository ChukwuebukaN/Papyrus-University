/*
  Warnings:

  - You are about to drop the `_HostelToStudent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_HostelToStudent" DROP CONSTRAINT "_HostelToStudent_A_fkey";

-- DropForeignKey
ALTER TABLE "_HostelToStudent" DROP CONSTRAINT "_HostelToStudent_B_fkey";

-- DropTable
DROP TABLE "_HostelToStudent";

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_id_fkey" FOREIGN KEY ("id") REFERENCES "Hostel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
