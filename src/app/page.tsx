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
      <button onClick={handlePress}>Generate a number</button>
    </div>
  );
}
