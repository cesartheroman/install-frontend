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

import Link from "next/link";

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

  const [greeting, setGreeting] = useState("Welcome!");

  const apiBaseURL = "http://127.0.0.1:8000";

  const callAPI = async () => {
    try {
      const res = await fetch(`${apiBaseURL}/api/healthchecker`);
      const data = await res.json();
      setGreeting(data.message);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async () => { };

  return (
    <Theme.Provider>
      <Box>
        <Form maxWidth="size70">
          <FormSection>
            <FormSectionHeading variant="heading30">
              {greeting}
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
              <Link href="/sign-up">
                <Button variant="primary">Sign Up</Button>
              </Link>
              <Link href="/sign-in">
                <Button variant="primary">Sign In</Button>
              </Link>
              <Button variant="primary" onClick={callAPI}>
                Call API
              </Button>
            </FormActions>
          </FormSection>
        </Form>
      </Box>
    </Theme.Provider>
  );
};

export default Login;
