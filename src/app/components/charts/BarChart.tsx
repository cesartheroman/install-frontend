import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import { User, Washer, Dryer } from "@/app/interfaces";

const BarChart = ({ userData }: { userData: User }) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  );

  const applianceAInfo: Washer = userData.washer;
  const applianceADisplayName = `${applianceAInfo.brand_name} ${applianceAInfo.model_name}`;

  const applianceBInfo: Dryer = userData.dryer;
  const applianceBDisplayName = `${applianceBInfo.brand_name} ${applianceBInfo.model_name}`;

  const applianceACosts = applianceAInfo.electricity_cost;
  const applianceBCosts = applianceBInfo.gas_cost;

  const labels = applianceAInfo.date_names;

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Compare two appliances by month",
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: `${applianceADisplayName}`,
        // NOTE: think about how this data should be modelled, cost vs months.
        data: applianceACosts.map((monthlyCost) => monthlyCost),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: `${applianceBDisplayName}`,
        data: applianceBCosts.map((monthlyCost) => monthlyCost),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default BarChart;
