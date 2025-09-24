"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Generate labels for days 1 -> today
const today = new Date();
const daysInMonth = today.getDate(); // e.g. 19 if today is Sept 19
const labels = Array.from({ length: daysInMonth }, (_, i) => (i + 1).toString());

const data = {
  labels,
  datasets: [
    {
      label: "Released",
      data: Array.from({ length: daysInMonth }, () => Math.floor(Math.random() * 400)), // sample random values
      borderColor: "rgb(75, 192, 192)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      tension: 0.4, // smooth line
    },
    {
      label: "Redeemed",
      data: Array.from({ length: daysInMonth }, () => Math.floor(Math.random() * 350)),
      borderColor: "rgb(153, 102, 255)",
      backgroundColor: "rgba(153, 102, 255, 0.2)",
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: `Daily Released & Redeemed (Month: ${today.toLocaleString("default", {
        month: "long",
      })})`,
    },
  },
};

export default function LineChart() {
  return (
    <div className="h-96 w-full p-4 bg-white rounded-2xl shadow">
      <Line options={options} data={data} />
    </div>
  );
}
