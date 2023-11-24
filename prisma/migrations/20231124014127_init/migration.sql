/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Hostel` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Hostel` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Rooms` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Rooms` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Student` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Hostel" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Rooms" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";
