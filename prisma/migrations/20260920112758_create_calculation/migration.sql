-- CreateTable
CREATE TABLE "Calculation" (
    "id" SERIAL NOT NULL,
    "groupA" DOUBLE PRECISION NOT NULL,
    "groupB" DOUBLE PRECISION NOT NULL,
    "groupC" DOUBLE PRECISION NOT NULL,
    "otherPopulation" DOUBLE PRECISION NOT NULL,
    "totalPopulation" DOUBLE PRECISION NOT NULL,
    "groupBPercentage" DOUBLE PRECISION,
    "dangerLevel" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Calculation_pkey" PRIMARY KEY ("id")
);
