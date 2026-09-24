import { prisma } from "@/lib/prisma";

type DensityRequest = {
  groupA: number; // xi
  groupB: number; // μ
  groupC: number; // N
  otherPopulation: number; // n - 1
};

export async function POST(request: Request) {
  const body: DensityRequest = await request.json();

  const { groupA: xi, groupB: μ, groupC: N, otherPopulation: nMinusOne } = body; 

  if (
    !Number.isFinite(xi) ||
    !Number.isFinite(μ) ||
    !Number.isFinite(N) ||
    !Number.isFinite(nMinusOne)||
    N <= 0||
    nMinusOne <=0
  )

  {
    return Response.json(
      { message: "Enter valid values. N must be greater than 1." }
    )
  }

  const squaredDifference = (xi - μ) ** 2;

  const varianceOfPopulation = squaredDifference / N;
  const varianceOfSample = squaredDifference / (nMinusOne);

  await prisma.calculation.create({
  data: {
    groupA: xi,
    groupB: μ,
    groupC: N,
    otherPopulation: nMinusOne,
    populationVariance: varianceOfPopulation,
    sampleVariance: varianceOfSample,
    message: "Variance calculated successfully.",
  },
});

  return Response.json({
    message: "Variance calculated successfully.",
    varianceOfPopulation,
    varianceOfSample,
  });
}










  //const { searchParams } = new URL(request.url);
 // const groupA = parseFloat(searchParams.get("groupA") || "0");
  //const groupB = parseFloat(searchParams.get("groupB") || "0");
  //const groupC = parseFloat(searchParams.get("groupC") || "0");
  //const otherPopulation = parseFloat(searchParams.get("otherPopulation") || "0");