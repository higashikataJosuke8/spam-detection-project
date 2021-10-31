import React from "react";
import "./BarGraph.css";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  {
    name: "1",
    pv: 2400,
  },
  {
    name: "2",
    pv: 1398,
  },
  {
    name: "3",
    pv: 9800,
  },
  {
    name: "4",
    pv: 3908,
  },
  {
    name: "5",
    pv: 4800,
  },
  {
    name: "6",
    pv: 3800,
  },
  {
    name: "7",
    pv: 4300,
  },
];

export default function BarGraph2() {
  return (
    <div className="graph-cont">
      <div className="graph">
        <BarChart
          width={550}
          height={175}
          data={data}
          barCategoryGap={30}
          margin={{
            top: 20,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis
            dataKey="name"
            fontSize={12}
            axisLine={false}
            tickLine={false}
          />
          <YAxis fontSize={12} axisLine={false} tickLine={false} />
          <Tooltip
            wrapperStyle={{
              width: 75,
              backgroundColor: "#f7fafd",
              fontSize: "12px",
            }}
          />

          <Bar dataKey="pv" fill="#fffff" />
        </BarChart>
      </div>
    </div>
  );
}
