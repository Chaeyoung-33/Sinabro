-- DropIndex
DROP INDEX "PointsLog_userId_idx";

-- CreateIndex
CREATE INDEX "PointsLog_userId_event_date_idx" ON "PointsLog"("userId", "event_date");
