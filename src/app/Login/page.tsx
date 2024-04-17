"use client";

import React, { useState } from "react";
import { Theme } from "@twilio-paste/core/dist/theme";
import {
  Form,
  FormSection,
  FormSectionHeading,
  FormActions,
} from "@twilio-paste/core/form";
import { Paragraph } from "@twilio-paste/core/paragraph";
import { Box } from "@twilio-paste/core/box";
import { Button } from "@twilio-paste/core/button";

import Link from "next/link";

const Login = () => {
  // const [greeting, setGreeting] = useState("Welcome!");

  // const apiBaseURL = "http://127.0.0.1:8000";

  // const callAPI = async () => {
  //   try {
  //     const res = await fetch(`${apiBaseURL}/api/healthchecker`);
  //     const data = await res.json();
  //     setGreeting(data.message);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <Theme.Provider>
      <Box>
        <Form maxWidth="size70">
          <FormSection>
            <FormSectionHeading variant="heading30">
              Welcome!
              <Paragraph>Please login or signup</Paragraph>
            </FormSectionHeading>
            <FormActions>
              <Link href="/sign-up">
                <Button variant="primary">Sign Up</Button>
              </Link>
              <Link href="/sign-in">
                <Button variant="primary">Sign In</Button>
              </Link>
              {/* <Button variant="primary" onClick={callAPI}> */}
              {/*   Call API */}
              {/* </Button> */}
            </FormActions>
          </FormSection>
        </Form>
      </Box>
    </Theme.Provider>
  );
};

export default Login;
