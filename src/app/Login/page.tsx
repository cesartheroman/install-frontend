"use client";

import React, { useState } from "react";
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

import { USERS } from "../../lib/users.js";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    for (const dbUser of USERS) {
      if (user.email === dbUser.email && user.password === dbUser.password) {
        alert("logged in!");
        return;
      } else {
        alert("Credentials incorrect");
        return;
      }
    }
  };

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
                id="email"
                type="email"
                placeholder="Enter your email address"
                onChange={(e) => handleChange(e)}
              />
            </FormControl>
            <FormControl>
              <Label htmlFor="last-name">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                onChange={(e) => handleChange(e)}
              />
            </FormControl>
            <FormActions>
              <Button variant="secondary">Sign Up</Button>
              <Button variant="primary" onClick={handleSubmit}>
                Login
              </Button>
            </FormActions>
          </FormSection>
        </Form>
      </Box>
    </Theme.Provider>
  );
};

export default Login;
