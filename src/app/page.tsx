"use client";

import React, { useState } from "react";

import { Theme } from "@twilio-paste/core/theme";
import { Button } from "@twilio-paste/core/button";

export default function App() {
  const [number, setNumber] = useState(0);

  function handlePress() {
    let randomNumber = Math.floor(Math.random() * 10000) % 100;
    setNumber(randomNumber);
  }

  return (
    <Theme.Provider theme="default">
      <div>
        <p>Random number: {number}</p>
        <Button variant="primary" onClick={handlePress}>
          Generate a number
        </Button>
      </div>
    </Theme.Provider>
  );
}
