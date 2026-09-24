"use client";

import { useState } from "react";
export default function Home() {
  const [groupA, setGroupA] = useState("");
  const [groupB, setGroupB] = useState("");
  const [groupC, setGroupC] = useState("");
  const [otherPopulation, setOtherPopulation] = useState("");
  const [message, setMessage] = useState("");
  const [variance, setVariance] = useState<{ population: number; sample: number;} | null>(null);

  async function handleCalculate() {
    const response = await fetch("/api/density", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        groupA: Number(groupA),
        groupB: Number(groupB),
        groupC: Number(groupC),
        otherPopulation: Number(otherPopulation),
      }),
    });

    const data = await response.json();
    if (!response.ok){
      setMessage(data.message);
      setVariance(null);
      return;
    }
    setMessage(data.message);
    setVariance({
      population: data.varianceOfPopulation,
      sample: data.varianceOfSample
    });
  }

  return (

    
    
    <div className="flex flex-row flex-1 items-center justify-center gap-6 bg-zinc-50 font-sans dark:bg-black">
      <aside className="h- 100 w-60 flex flex-row flex-1 items-center justify-center overflow-y-auto overscroll-contain rounded-xl bg-linear-to-t from-sky-500 to-indigo-500 p-4 m-4">
      Find the variance with the help of given data xi, ,μ, N for both population and sample. The formula for the variance of a population is σ² = Σ(xi - μ)² / N, where xi is each individual value, μ is the population mean, and N is the total number of values in the population. The formula for the variance of a sample is s² = Σ(xi - x̄)² / (n - 1), where xi is each individual value, x̄ is the sample mean, and n is the total number of values in the sample.
      </aside>
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-30 px-16 m-8 rounded-xl bg-zinc-100 dark:bg-zinc-900 sm:items-start">
       
     <h1 className="text-4xl font-bold text-center mt-4">Calculator of statistics</h1>
      <input value={groupA} onChange={(e) => setGroupA(e.target.value)} type ="number" step= "any" className="border-style: solid outline-2 outline-offset-2 outline-white/30 rounded-lg p-2 mt-7 " placeholder = "Enter the value of xi"/>
      <input value={groupB} onChange={(e) => setGroupB(e.target.value)} type ="number" step= "any" className="border-style: solid outline-2 outline-offset-2 outline-white/30 rounded-lg p-2 mt-7 " placeholder = "Enter the value of μ"/>
      <input value={groupC} onChange={(e) => setGroupC(e.target.value)} type ="number" step= "any" className="border-style: solid outline-2 outline-offset-2 outline-white/30 rounded-lg p-2 mt-7 " placeholder = "Enter the value of N"/>
      <input value={otherPopulation} onChange={(e) => setOtherPopulation(e.target.value)} type ="number" step= "any" className="border-style: solid outline-2 outline-offset-2 outline-white/30 rounded-lg p-2 mt-7 " placeholder = "Enter the value of n - 1"/>
      <button onClick={handleCalculate} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg shadow-blue-500/50 mt-7">
        Calculate
      </button>
      
       {message && <p className="text-lg font-medium text-center mt-7"> {message} </p>}
       {variance && (
        <div className="text-lg font-medium text-center mt-7">
          <p>Population variance: {variance.population}</p>
          <p>Sample variance: {variance.sample}</p>
        </div>
      )}
      </main>
       
    </div>
  );
}
