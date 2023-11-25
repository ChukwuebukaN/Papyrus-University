-- CreateTable
CREATE TABLE "_HostelToStudent" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_HostelToStudent_AB_unique" ON "_HostelToStudent"("A", "B");

-- CreateIndex
CREATE INDEX "_HostelToStudent_B_index" ON "_HostelToStudent"("B");

-- AddForeignKey
ALTER TABLE "_HostelToStudent" ADD CONSTRAINT "_HostelToStudent_A_fkey" FOREIGN KEY ("A") REFERENCES "Hostel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HostelToStudent" ADD CONSTRAINT "_HostelToStudent_B_fkey" FOREIGN KEY ("B") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;
