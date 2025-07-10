import { useState } from "react";
import { series } from "./Ms";
import React from "react";

const RandomSeries = () => {
  const [seriesName, setSeries] = useState("");

  return (
    <div className="flex flex-col items-center mt-10">
      <button
        onClick={() => setSeries(series[Math.floor(Math.random() * series.length)])}
        className="px-4 py-2 bg-green-500 text-white rounded"
      >
        Generate Random Series
      </button>
      {seriesName && <h2 className="mt-4 text-xl">Random Series: {seriesName}</h2>}
    </div>
  );
};

export default RandomSeries;
