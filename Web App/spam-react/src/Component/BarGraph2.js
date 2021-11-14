import React, { useEffect, useState } from "react";
import "./BarGraph.css";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  {
    name: "1",
    pv: 5852,
  },
  {
    name: "2",
    pv: 8222,
  },
  {
    name: "3",
    pv: 5102,
  },
  {
    name: "4",
    pv: 1003,
  },
  {
    name: "5",
    pv: 6301,
  },
  {
    name: "6",
    pv: 7519,
  },
  {
    name: "7",
    pv: 2116,
  },
];

export default function BarGraph2() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const updateDimensions = () => {
    const width = window.innerWidth;
    setWidth(width);
  };
  return (
    <div className="graph-cont">
      <div className="graph">
        <BarChart
          width={
            width >= 1348
              ? 550
              : width >= 952
              ? 400
              : width >= 720
              ? 650
              : 320
          }
          height={175}
          data={data}
          barCategoryGap={
            width >= 1348
              ? 30
              : width >= 952
              ? 30
              : width >= 940
              ? 25
              : width >= 720
              ? 30
              : 20
          }
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

          <Bar dataKey="pv" fill="#348ccc" />
        </BarChart>
      </div>
    </div>
  );
}
