import React from "react";
import "./BarGraph.css";
import { AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";
import { r1, r2 } from "./Dropdown";

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

const data2 = [
  { name: "Page A", uv: 4872, pv: 5781, amt: 9526 },
  { name: "Page B", uv: 5367, pv: 8564, amt: 2458 },
  { name: "Page C", uv: 1257, pv: 4879, amt: 5621 },
  { name: "Page D", uv: 2568, pv: 4548, amt: 6582 },
  { name: "Page E", uv: 1524, pv: 3524, amt: 1546 },
  { name: "Page F", uv: 7852, pv: 3256, amt: 4578 },
  { name: "Page G", uv: 3214, pv: 1234, amt: 4875 },
];

const data3 = [
  { name: "Page A", uv: 5747, pv: 6435, amt: 7642 },
  { name: "Page B", uv: 6544, pv: 2316, amt: 5469 },
  { name: "Page C", uv: 4587, pv: 1265, amt: 2290 },
  { name: "Page D", uv: 8474, pv: 1654, amt: 2000 },
  { name: "Page E", uv: 5156, pv: 5878, amt: 2181 },
  { name: "Page F", uv: 3567, pv: 1894, amt: 2500 },
  { name: "Page G", uv: 5842, pv: 6598, amt: 2100 },
];

const data4 = [
  { name: "Page A", uv: 5498, pv: 2156, amt: 2400 },
  { name: "Page B", uv: 4872, pv: 1256, amt: 2210 },
  { name: "Page C", uv: 5674, pv: 2345, amt: 2290 },
  { name: "Page D", uv: 2184, pv: 3845, amt: 2000 },
  { name: "Page E", uv: 4548, pv: 8457, amt: 2181 },
  { name: "Page F", uv: 4872, pv: 5715, amt: 2500 },
  { name: "Page G", uv: 8423, pv: 5254, amt: 2100 },
];

const data5 = [
  { name: "Page A", uv: 4456, pv: 4856, amt: 2400 },
  { name: "Page B", uv: 2824, pv: 9524, amt: 2210 },
  { name: "Page C", uv: 2582, pv: 4528, amt: 2290 },
  { name: "Page D", uv: 6821, pv: 7823, amt: 2000 },
  { name: "Page E", uv: 3584, pv: 9528, amt: 2181 },
  { name: "Page F", uv: 4586, pv: 1456, amt: 2500 },
  { name: "Page G", uv: 4556, pv: 5864, amt: 2100 },
];

export default function LineGraph() {
  console.log(r1);
  console.log(r2);
  return (
    <div className="graph-cont">
      <div className="linegraph">
        <AreaChart
          width={700}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis
            fontSize={12}
            dataKey="name"
            axisLine={false}
            tickLine={false}
          />
          <YAxis fontSize={12} axisLine={false} tickLine={false} />
          <Tooltip
            wrapperStyle={{
              width: 85,
              backgroundColor: "#f7fafd",
              fontSize: "12px",
            }}
          />
          <Area
            type="monotone"
            dataKey="uv"
            stackId="1"
            stroke="#42AFFF"
            fill="#42AFFF"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stackId="1"
            stroke="#21587F"
            fill="#21587F"
          />
        </AreaChart>
      </div>
    </div>
  );
}
