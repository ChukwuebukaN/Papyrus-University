-- AlterTable
ALTER TABLE "Hostel" ADD COLUMN     "available" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "maximumRooms" INTEGER NOT NULL DEFAULT 10;
