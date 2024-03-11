"use client";

import React, { useState } from "react";

import { Theme } from "@twilio-paste/core/theme";

import OnboardingFlow from "./onboarding/page";
import Login from "./login/page";

export default function App() {
  const [loggedIn, _] = useState<boolean>();

  return (
    <Theme.Provider theme="default">
      {loggedIn ? <OnboardingFlow /> : <Login />}
    </Theme.Provider>
  );
}
