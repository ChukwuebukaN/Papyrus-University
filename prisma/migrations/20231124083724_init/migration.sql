/*
  Warnings:

  - Added the required column `maximumStudents` to the `Rooms` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Rooms" ADD COLUMN     "maximumStudents" INTEGER NOT NULL;
