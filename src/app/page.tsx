"use client";

import { Theme } from "@twilio-paste/core/theme";

import Login from "./login/page";

export default function App() {
  return (
    <Theme.Provider theme="default">
      <Login />
    </Theme.Provider>
  );
}
