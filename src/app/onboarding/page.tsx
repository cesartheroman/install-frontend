"use client";

import React from "react";

import { Theme } from "@twilio-paste/core/dist/theme";
import { Box } from "@twilio-paste/core/box";
import {
  Form,
  FormSection,
  FormSectionHeading,
  FormControl,
} from "@twilio-paste/core/form";
import { Input } from "@twilio-paste/core/input";
import { Label } from "@twilio-paste/core/label";
import { Heading } from "@twilio-paste/core/heading";
import { Paragraph } from "@twilio-paste/core/paragraph";
import { ButtonGroup } from "@twilio-paste/core/button-group";
import { Button } from "@twilio-paste/core/button";
import { UserButton } from "@clerk/nextjs";

const OnboardingFlow = () => {
  return (
    <Theme.Provider>
      <UserButton />
      <Box
        //TODO: can add class to this
        overflow="hidden"
        borderRadius="borderRadius20"
        borderStyle="solid"
        borderWidth="borderWidth10"
        borderColor="colorBorderPrimaryWeak"
      >
        <Form>
          <FormSection>
            <FormSectionHeading>
              <Heading as="h3" variant="heading30" marginBottom="space0">
                Let's get started!
              </Heading>
              <Paragraph>Please answer a few questions.</Paragraph>
            </FormSectionHeading>

            <FormControl>
              <Label htmlFor="name">What's your name?</Label>
              <Input type="text" id="name" name="name" placeholder="John Doe" />
            </FormControl>

            <FormControl>
              <Label htmlFor="propertyType">
                What property type are you looking to optimize?
              </Label>
              <ButtonGroup id="propertyType">
                <Button variant="secondary">Residential</Button>
                <Button variant="secondary">Commercial</Button>
              </ButtonGroup>
            </FormControl>

            <FormControl>
              <Label htmlFor="unitNumbers">Number of Units</Label>
              <ButtonGroup id="unitNumbers">
                <Button variant="secondary">Single</Button>
                <Button variant="secondary">Two</Button>
                <Button variant="secondary">Multi</Button>
              </ButtonGroup>
            </FormControl>

            <FormControl>
              <Label htmlFor="squareFootage">
                What is the approximate total square footage of property?
              </Label>
              <Input
                type="text"
                id="squareFootage"
                name="squareFootage"
                placeholder="1000"
              />
              <ButtonGroup id="skipOrNext">
                <Button variant="secondary">Skip</Button>
                <Button variant="primary">Next</Button>
              </ButtonGroup>
            </FormControl>

            <FormControl>
              <Label htmlFor="buildingAge">What is your building's age?</Label>
              <Input
                type="text"
                id="buildingAge"
                name="buildingAge"
                placeholder="100"
              />
              <ButtonGroup id="skipOrNext">
                <Button variant="secondary">Skip</Button>
                <Button variant="primary">Next</Button>
              </ButtonGroup>
            </FormControl>

            <FormControl>
              <Label htmlFor="heatingSystemType">
                Current Heating System Type
              </Label>
              <ButtonGroup id="heatingStystemType">
                <Button variant="secondary">Forced Air</Button>
                <Button variant="secondary">Radiant</Button>
                <Button variant="secondary">Hot Water</Button>
                <Button variant="secondary">Electric</Button>
              </ButtonGroup>
            </FormControl>

            <FormControl>
              <Label htmlFor="coolingSystemType">
                Current Air Conditioning System Type
              </Label>
              <ButtonGroup id="coolingSystemType">
                <Button variant="secondary">Central Air</Button>
                <Button variant="secondary">Heat Pump</Button>
                <Button variant="secondary">Split Ductless</Button>
              </ButtonGroup>
            </FormControl>

            <FormControl>
              <Label htmlFor="energySource">Energy Source</Label>
              <ButtonGroup id="energySource">
                <Button variant="secondary">Natural Gas</Button>
                <Button variant="secondary">Eletricity</Button>
              </ButtonGroup>
            </FormControl>

            <FormControl>
              <Label htmlFor="installationStatus">
                Installation Status - select all that apply
              </Label>
              <ButtonGroup id="installationStatus">
                <Button variant="secondary">Walls</Button>
                <Button variant="secondary">Windows</Button>
                <Button variant="secondary">Roof</Button>
                <Button variant="secondary">Doors</Button>
              </ButtonGroup>
            </FormControl>

            <FormControl>
              <Label htmlFor="recentRenovations">
                Have there been any recent renovations or changes to the
                building structure or energy systems? If yes, please provide
                details.
              </Label>
              <Input
                type="text"
                id="recentRenovations"
                name="renovations"
                placeholder="Replaced old HVAC System"
              />
              <ButtonGroup id="renovationOptions">
                <Button variant="secondary">Skip</Button>
                <Button variant="primary">Next</Button>
              </ButtonGroup>
            </FormControl>

            <FormControl>
              <Label htmlFor="focusAreas">
                Do you have any specific concerns or areas you would like to
                focus on first?
              </Label>
              <ButtonGroup id="focusAreas">
                <Button variant="secondary">Skip</Button>
                <Button variant="primary">Next</Button>
              </ButtonGroup>
            </FormControl>
          </FormSection>

          <FormSection>
            <FormSectionHeading>
              <Heading as="h3" variant="heading30" marginBottom="space0">
                Almost there!
              </Heading>
            </FormSectionHeading>
            <FormControl>
              <Label htmlFor="email">What's your email address?</Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="johndoe@gmail.com"
              />
              <Label htmlFor="password">Create a password</Label>
              <Input type="password" id="password" name="password" />
              <Label htmlFor="passwordConfirm">Confirm password</Label>
              <Input
                type="password"
                id="passwordConfirm"
                name="passwordConfirm"
              />
            </FormControl>
          </FormSection>
        </Form>
      </Box>
    </Theme.Provider>
  );
};

export default OnboardingFlow;
