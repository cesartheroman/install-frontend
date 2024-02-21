"use client";

import React, { useState } from "react";

import { Theme } from "@twilio-paste/core/theme";

import Login from "./login/page.tsx";

export default function App() {
  return (
    <Theme.Provider theme="default">
      <Login />
    </Theme.Provider>
  );
}
