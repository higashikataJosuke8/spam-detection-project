import React, { useEffect, useState } from "react";
import "./BarGraph.css";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

const data = [
  { name: "Hacked", Female: 7, Male: 10, Queer: 0, "Prefer Not": 1, Total: 18 },
  { name: "Probably", Female: 3, Male: 1, Queer: 0, "Prefer Not": 0, Total: 4 },
  { name: "Not Hacked", Female: 39, Male: 36, Queer: 1, "Prefer Not": 2, Total: 78 },
];

export default function BarGraph3() {
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
            dataKey="Prefer Not"
            fill="#808080"
            name="Total"
            isAnimationActive={false}
          />
          <Bar
            dataKey="Total"
            fill="#eeeeee"
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
