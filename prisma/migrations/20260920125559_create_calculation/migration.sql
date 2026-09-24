/*
  Warnings:

  - You are about to drop the column `dangerLevel` on the `Calculation` table. All the data in the column will be lost.
  - You are about to drop the column `groupBPercentage` on the `Calculation` table. All the data in the column will be lost.
  - You are about to drop the column `totalPopulation` on the `Calculation` table. All the data in the column will be lost.
  - Added the required column `message` to the `Calculation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `populationVariance` to the `Calculation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sampleVariance` to the `Calculation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Calculation" DROP COLUMN "dangerLevel",
DROP COLUMN "groupBPercentage",
DROP COLUMN "totalPopulation",
ADD COLUMN     "message" TEXT NOT NULL,
ADD COLUMN     "populationVariance" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "sampleVariance" DOUBLE PRECISION NOT NULL;
