import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Cell } from "recharts";
const data = [
  { name: "HTML", proficiency: 90 },
  { name: "CSS", proficiency: 85 },
  { name: "JavaScript", proficiency: 80 },
  { name: "TypeScript", proficiency: 60 },
  { name: "Next.js", proficiency: 50 },
  { name: "React.js", proficiency: 90 },
  { name: "Redux toolkit", proficiency: 70 },
  { name: "Tailwind css", proficiency: 90 },
  { name: "Node.js", proficiency: 70 },
  { name: "Express.js", proficiency: 70 },
  { name: "MongoDB", proficiency: 65 },
];

const COLORS = ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#43fbe5","#FF9800", "#9C27B0"];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gradient-to-l from-heading to-text text-white  p-2 shadow-lg rounded-md">
         <p className="font-semibold ">{` ${payload[0].payload.name}`}</p>
         <p className="text-sm">{`Proficiency: ${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

const SkillsBarGraph = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-1 lg:px-4 ">
      <h2 className="text-3xl font-bold text-center mb-6 text-primary">
        Proficiency Levels
      </h2>
      <ResponsiveContainer width="100%" height={400} className="">
        <BarChart
          data={data}
          margin={{ top: 10, right: 10, left: -20, bottom: 1 }}
          className=""
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            tick={{ fill: "#555", fontSize: 12, fontWeight: "500" }}
            className="w-12"
          />
          <YAxis
            tick={{ fill: "#555", fontSize: 14, fontWeight: "500" }}
            domain={[0, 100]}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="proficiency"
            radius={[5, 5, 0, 0]} // Rounded top corners
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillsBarGraph;
