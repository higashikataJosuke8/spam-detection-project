import React, { useState, useEffect } from "react";
import "./BarGraph.css";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

const data = [
  { name: "Scammed", Female: 9, Male: 8, Queer: 1 , Total: 18},
  { name: "Probably", Female: 1, Male: 5, Queer: 0, Total: 6 },
  { name: "Yes", Female: 19, Male: 23, Queer: 0, Total: 42 },
];

export default function BarGraph1() {
  const [width, setWidth] = useState(0);
  const [showLegend, setShowLegend] = useState(true);
  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const updateDimensions = () => {
    const width = window.innerWidth;
    setShowLegend((width >= 800) ? true : false)
    setWidth(width);
  };

  return (
    <div className="graph-cont">
      <div className="graph">
        <BarChart
          width={
            width >= 1348 ? 600 : width >= 952 ? 400 : width >= 720 ? 650 : 370
          }
          height={220}
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
              width: 150,
              backgroundColor: "#f7fafd",
              fontSize: "12px",
            }}
          />

          <Bar
            dataKey="Female"
            fill="#A1D7FF"
            name="Female"
            isAnimationActive={false}
          />
          <Bar
            dataKey="Male"
            fill="#42AFFF"
            name="Male"
            isAnimationActive={false}
          />
          <Bar
            dataKey="Queer"
            fill="#3B9EE6"
            name="Queer"
            isAnimationActive={false}
          />
          <Bar
            dataKey="Total"
            fill="#808080"
            name="Total"
            isAnimationActive={false}
          />
          {(showLegend)? <Legend
              layout="horizontal"
              verticalAlign="bottom"
              align="right"
              className="legend"
              wrapperStyle={{
                fontSize: "9px",
                fontWeight: "bold",
                left: 16,
              }}
            /> : <></>}
        </BarChart>
      </div>
    </div>
  );
}
