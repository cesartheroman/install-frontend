"use client";
import React from "react";

import BarChart from "../components/BarChart";
import DoughnutChart from "../components/DoughnutChart";
import LineChart from "../components/LineChart";
import PolarAreaChart from "../components/PolarAreaChart";

const Landing = () => {
  return (
    <div className="landingWrapper">
      <BarChart />
      <DoughnutChart />
      <LineChart />
      <PolarAreaChart />
    </div>
  );
};

export default Landing;
