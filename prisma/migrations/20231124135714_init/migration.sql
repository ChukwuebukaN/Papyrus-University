/*
  Warnings:

  - You are about to drop the column `birthYear` on the `Student` table. All the data in the column will be lost.
  - Added the required column `age` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Student" DROP COLUMN "birthYear",
ADD COLUMN     "age" INTEGER NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL;
