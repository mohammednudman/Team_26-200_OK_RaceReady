import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Event 1', registrations: 30 },
  { name: 'Event 2', registrations: 40 },
  { name: 'Event 3', registrations: 20 },
  { name: 'Event 4', registrations: 50 },
];

const BarChartComponent = () => {
  return (
    <BarChart
      width={400}
      height={225}
      data={data}
      margin={{ top: 40, right: 25, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="registrations" fill="#8884d8" />
    </BarChart>
  );
};

export default BarChartComponent;
