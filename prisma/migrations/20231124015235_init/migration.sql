/*
  Warnings:

  - Added the required column `maximumRooms` to the `Hostel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Hostel" ADD COLUMN     "maximumRooms" INTEGER NOT NULL;
