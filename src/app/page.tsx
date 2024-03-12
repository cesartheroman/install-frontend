"use client";

import { Theme } from "@twilio-paste/core/theme";

import Landing from "./landing/page";

export default function App() {
  return (
    <Theme.Provider theme="default">
      <Landing />
    </Theme.Provider>
  );
}
