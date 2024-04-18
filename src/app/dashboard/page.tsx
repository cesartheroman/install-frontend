"use client";

import { useState } from "react";

import NavBar from "./components/NavBar";
import UtilityUsageChart from "./components/UtilityUsageChart";
import CostComparisonTool from "./components/CostComparisonTool";
import ApplianceComparisonTool from "./components/ApplianceComparisonTool";

import { User } from "../interfaces";
import data from "../../lib/user_data.json";

const Dashboard = () => {
  const [userData, setUserData] = useState<User>(data);
  console.log("this is data:", userData);

  return (
    <div className="flex min-h-screen w-full flex-col">
      <NavBar />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:gap-8 lg:grid-cols-3 ">
          <UtilityUsageChart />
          <CostComparisonTool />
        </div>
        <div className="grid gap-4 md:gap-8 lg:col-span-2">
          <ApplianceComparisonTool />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
