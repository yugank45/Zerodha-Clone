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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,

  plugins: {
    title: {
      display: true,
      text: "Portfolio Overview",

      font: {
        size: 20,
        weight: "bold",
      },

      padding: {
        bottom: 25,
      },
    },

    legend: {
      position: "top",

      labels: {
        font: {
          size: 14,
        },
      },
    },
  },

  interaction: {
    mode: "index",
    intersect: false,
  },

  scales: {
    x: {
      stacked: true,

      grid: {
        color: "rgba(0,0,0,0.08)",
      },

      ticks: {
        color: "#444",
      },
    },

    y: {
      stacked: true,

      grid: {
        color: "rgba(0,0,0,0.08)",
      },

      ticks: {
        color: "#444",
      },
    },
  },
};

export function GroupedBarChart({ data }) {
  return (
    <div
      style={{
        width: "100%",
        background: "#f8f9fb",
        padding: "25px",
        borderRadius: "12px",
        marginTop: "30px",
      }}
    >
      <Bar options={options} data={data} />
    </div>
  );
}