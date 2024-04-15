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
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

interface User {
  id: number;
  utility: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: number;
}

const dummyUser: User = {
  id: 1234,
  utility: "Seattle City Light",
  email: "erick.s.salvatierra@gmail.com",
  address: "123 Elm St",
  city: "Chicago",
  state: "Il",
  zip: 60007,
};

// const labels = ["January", "February", "March", "April", "May", "June", "July"];

const labels = [
  "January 2024",
  "December 2023",
  "November 2023",
  "October 2023",
  "September 2023",
  "August 2023",
  "July 2023",
  "June 2023",
  "May 2023",
  "April 2023",
  "March 2023",
  "February 2023",
];

const applianceAMonthlyCosts = [
  52.831, 52.655, 94.642, 25.031, 42.981, 25.413, 73.575, 90.008, 92.173,
  13.962, 47.757, 87.798,
];

const applianceBMonthlyCosts = [...applianceAMonthlyCosts].reverse();

const data = {
  labels,
  datasets: [
    {
      label: "Appliance A",
      // NOTE: think about how this data should be modelled, cost vs labels.
      data: applianceAMonthlyCosts.map((monthlyCost) => monthlyCost),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Appliance B",
      data: applianceBMonthlyCosts.map((monthlyCost) => monthlyCost),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const BarChart = () => {
  return <Bar className="chart" options={options} data={data} />;
};

export default BarChart;
