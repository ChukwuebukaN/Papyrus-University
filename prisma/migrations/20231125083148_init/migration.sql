/*
  Warnings:

  - You are about to drop the column `available` on the `Hostel` table. All the data in the column will be lost.
  - You are about to drop the column `maximumRooms` on the `Hostel` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Hostel" DROP COLUMN "available",
DROP COLUMN "maximumRooms";
