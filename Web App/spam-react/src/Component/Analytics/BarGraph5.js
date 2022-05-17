import React, { useEffect, useState } from "react";
import "./BarGraph.css";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

const data = [
  {
    name: "Scammed",
    Convenience: 1,
    Privacy: 17,
    Total: 18
  },
  {
    name: "Probably",
    Convenience: 2,
    Privacy: 4,
    Total: 6
  },
  {
    name: "Not Hacked",
    Convenience: 10,
    Privacy: 32,
    Total: 42
  },
];

export default function BarGraph5() {
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
            width >= 1348 ? 1100 : width >= 1024 ? 900 : width >= 952 ? 400 : width >= 720 ? 700 : 370
          }
          height={
            width >= 1348 ? 400 : width >= 1024 ? 300 : width >= 952 ? 300 : width >= 720 ? 300 : 220
          }
          data={data}
          barCategoryGap={
            width >= 1348
              ? 80
              : width >= 1024
              ? 70
              : width >= 952
              ? 25
              : width >= 720
              ? 40
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
            dataKey="Convenience"
            fill="#348ccc"
            name="Convenience"
            isAnimationActive={false}
          />
          <Bar
            dataKey="Privacy"
            fill="#42AFFF"
            name="Privacy"
            isAnimationActive={false}
          />
          <Bar
            dataKey="Total"
            fill="#808080"
            name="Total"
            isAnimationActive={false}
          />

          {showLegend && (
            <Legend
              layout="horizontal"
              verticalAlign="bottom"
              align="right"
              className="legend"
              wrapperStyle={{
                fontSize: "9px",
                fontWeight: "bold",
                left: 16,
              }}
            />
          )}
        </BarChart>
      </div>
    </div>
  );
}
