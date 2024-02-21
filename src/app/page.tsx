"use client";

import React, { useState } from "react";

import { Theme } from "@twilio-paste/core/theme";

import OnboardingFlow from "./onboarding/page";
import Login from "./login/page";

export default function App() {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  return (
    <Theme.Provider theme="default">
      {loggedIn ? <OnboardingFlow /> : <Login setLogin={setLoggedIn} />}
    </Theme.Provider>
  );
}
