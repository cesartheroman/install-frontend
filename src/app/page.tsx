"use client";

import React, { useState } from "react";

export default function App() {
  const [number, setNumber] = useState(0);

  function handlePress() {
    let randomNumber = Math.floor(Math.random() * 10000) % 100;
    setNumber(randomNumber);
  }

  return (
    <div>
      <p>Random number: {number}</p>
      <button
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        onClick={handlePress}
      >
        Generate a number
      </button>
    </div>
  );
}
