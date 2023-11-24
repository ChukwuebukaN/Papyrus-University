-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_roomId_fkey";

-- CreateTable
CREATE TABLE "_RoomToStudent" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_RoomToStudent_AB_unique" ON "_RoomToStudent"("A", "B");

-- CreateIndex
CREATE INDEX "_RoomToStudent_B_index" ON "_RoomToStudent"("B");

-- AddForeignKey
ALTER TABLE "_RoomToStudent" ADD CONSTRAINT "_RoomToStudent_A_fkey" FOREIGN KEY ("A") REFERENCES "Room"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RoomToStudent" ADD CONSTRAINT "_RoomToStudent_B_fkey" FOREIGN KEY ("B") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;
