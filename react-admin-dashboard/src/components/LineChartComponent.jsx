import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Jan', revenue: 1000 },
  { name: 'Feb', revenue: 1200 },
  { name: 'Mar', revenue: 800 },
  { name: 'Apr', revenue: 1500 },
  { name: 'May', revenue: 1000 },
  { name: 'June', revenue: 1200 },
  { name: 'July', revenue: 800 },
  { name: 'Aug', revenue: 1500 },
  { name: 'Sep', revenue: 1000 },
  { name: 'Oct', revenue: 1200 },
  { name: 'Nov', revenue: 800 },
  { name: 'Dec', revenue: 1500 },
  // Add more data points for each month
];

const BarChartComponent = () => {
  return (
    <BarChart
      width={800}
      height={250}
      data={data}
      margin={{ top: 32, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="revenue" fill="#8884d8" />
    </BarChart>
  );
};

export default BarChartComponent;
