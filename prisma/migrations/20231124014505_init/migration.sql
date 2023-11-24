/*
  Warnings:

  - You are about to drop the column `hostelId` on the `Rooms` table. All the data in the column will be lost.
  - You are about to drop the column `studentId` on the `Student` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Rooms" DROP COLUMN "hostelId";

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "studentId";
