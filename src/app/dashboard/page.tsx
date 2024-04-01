"use client";
import React from "react";

import { useUser } from "@clerk/nextjs";

import BarChart from "../components/BarChart";
import DoughnutChart from "../components/DoughnutChart";
import LineChart from "../components/LineChart";
import PolarAreaChart from "../components/PolarAreaChart";

const Dashboard = () => {
  const { user } = useUser();
  if (!user) return null;

  const skippedOnboarding = user.unsafeMetadata.skippedOnboarding;
  if (skippedOnboarding) {
    console.log("this is demo data, fill out onboarding");
  } else {
    console.log("this is custom data");
  }

  return (
    <div className="landingWrapper">
      <BarChart />
      <DoughnutChart />
      <LineChart />
      <PolarAreaChart />
    </div>
  );
};

export default Dashboard;
