import React from "react";
import { Pie, PieChart, Tooltip } from "recharts";
// import {PieChart, Pie,  } from 'recharts';

const Dashboard2 = () => {
  const people = [
    { id: 1, name: "John Doe", age: 25 },
    { id: 2, name: "Jane Smith", age: 30 },
    { id: 3, name: "Alex Johnson", age: 28 },
    { id: 4, name: "Emily Davis", age: 35 },
    { id: 5, name: "Michael Brown", age: 32 },
    { id: 6, name: "Olivia Wilson", age: 27 },
    { id: 7, name: "William Taylor", age: 29 },
    { id: 8, name: "Sophia Anderson", age: 26 },
    { id: 9, name: "James Martin", age: 31 },
    { id: 10, name: "Emma Thompson", age: 34 },
    { id: 11, name: "Daniel Wilson", age: 33 },
    { id: 12, name: "Ava Robinson", age: 29 },
  ];

  return <div>
    <PieChart
    width={400}
    height={400}
    >
        <Pie data={people} dataKey='age' cx="50%" outerRadius={60} fill="#8884d8"></Pie>
        <Tooltip/>
    </PieChart>
  </div>;
};

export default Dashboard2;
