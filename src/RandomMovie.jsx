import { useState } from "react";
import { movies } from "./Ms";
import React from "react";


const RandomMovie = () => {
  const [movie, setMovie] = useState("");

  return (
    <div className="flex flex-col items-center mt-10">
      <button
        onClick={() => setMovie(movies[Math.floor(Math.random() * movies.length)])}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Generate Random Movie
      </button>
      {movie && <h2 className="mt-4 text-xl">Random Movie: {movie}</h2>}

       <ul className="mt-6 list-disc text-left text-gray-700 list-inside max-w-2xl mx-auto
">
        {movies.map((m, index) => (
          <li className="ml-24" key={index}>{m}</li>
        ))}
      </ul>
    </div>
  );
};

export default RandomMovie;
