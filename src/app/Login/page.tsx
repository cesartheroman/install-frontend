"use client";

import React, { useEffect } from "react";

import { Theme } from "@twilio-paste/core/dist/theme";
import {
  Form,
  FormSection,
  FormSectionHeading,
  FormControl,
  FormActions,
} from "@twilio-paste/core/form";
import { Paragraph } from "@twilio-paste/core/paragraph";
import { Input } from "@twilio-paste/core/input";
import { Label } from "@twilio-paste/core/label";
import { Box } from "@twilio-paste/core/box";
import { Button } from "@twilio-paste/core/button";

const Login = () => {
  return (
    <Theme.Provider>
      <Box>
        <Form maxWidth="size70">
          <FormSection>
            <FormSectionHeading variant="heading30">
              Welcome!
              <Paragraph>Please login or signup</Paragraph>
            </FormSectionHeading>
            <FormControl>
              <Label htmlFor="first-name">Email</Label>
              <Input
                id="first-name"
                type="email"
                placeholder="Enter your email address"
              />
            </FormControl>
            <FormControl>
              <Label htmlFor="last-name">Password</Label>
              <Input
                id="last-name"
                type="text"
                placeholder="Enter your password"
              />
            </FormControl>
            <FormActions>
              <Button variant="secondary">Sign Up</Button>
              <Button variant="primary">Login</Button>
            </FormActions>
          </FormSection>
        </Form>
      </Box>
    </Theme.Provider>
  );
};

export default Login;
