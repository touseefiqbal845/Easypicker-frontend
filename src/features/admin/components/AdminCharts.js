import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ChartComponent = ({ chartData }) => {
  return (
    <ResponsiveContainer width="100%" height={520}>
      <BarChart data={chartData}>
        <XAxis dataKey="month" />
        <YAxis fill="green" />
        <Tooltip />
        <Legend />
        <Bar dataKey="totalAmount" fill="black" />
        <Bar dataKey="orderCount" fill="green" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ChartComponent;
