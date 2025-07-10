import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="p-4 bg-gray-800 text-white flex justify-center space-x-4">
    <Link to="/movies" className="px-4 py-2 bg-blue-500 rounded">Movies</Link>
    <Link to="/series" className="px-4 py-2 bg-green-500 rounded">Series</Link>
  </nav>
);

export default Navbar;
