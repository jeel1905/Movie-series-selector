import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ms from "./Ms";
import Navbar from "./Navbar";
import RandomMovie from "./RandomMovie";
import RandomSeries from "./RandomSeries";

const App = () => {
  return (
    
      <Ms>
        <Navbar />
        <Routes>
          <Route path="/movies" element={<RandomMovie />} />
          <Route path="/series" element={<RandomSeries />} />
        </Routes>
      </Ms>
    
  );
};

export default App;




