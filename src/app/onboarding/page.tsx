"use client";

import React from "react";

import { Theme } from "@twilio-paste/core/dist/theme";
import { Box } from "@twilio-paste/core/box";

const Auth = () => {
  return (
    <Theme.Provider>
      <Box
        overflow="hidden"
        borderRadius="borderRadius20"
        borderStyle="solid"
        borderWidth="borderWidth10"
        borderColor="colorBorderPrimaryWeak"
      >
        <Box backgroundColor="colorBackgroundPrimaryWeak" padding="space40">
          Header area
        </Box>
        <Box backgroundColor="colorBackgroundPrimaryWeakest" padding="space40">
          Body area
          <Box
            width="size20"
            marginTop="space30"
            marginBottom="space30"
            padding="space30"
          >
            An inner box with margin and padding
          </Box>
        </Box>
        <Box backgroundColor="colorBackgroundPrimaryWeak" padding="space40">
          Footer area
        </Box>
      </Box>
    </Theme.Provider>
  );
};

export default Auth;
