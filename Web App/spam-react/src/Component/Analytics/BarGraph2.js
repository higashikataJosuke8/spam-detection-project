import React, { useEffect, useState } from "react";
import "./BarGraph.css";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

const data = [
  { name: "Scammed", Junior_high: 0, Senior_high: 3, College: 19, Degree_holder: 4, Total: 26 },
  { name: "Probably", Junior_high: 0, Senior_high: 2, College: 4, Degree_holder: 1, Total: 7 },
  { name: "Not Scammed", Junior_high: 1, Senior_high: 9, College: 53, Degree_holder: 4, Total: 67 },
];

export default function BarGraph2() {
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
            width >= 1348
              ? 1100
              : width >= 1024
              ? 900
              : width >= 952
              ? 400
              : width >= 720
              ? 700
              : 370
          }
          height={
            width >= 1348
              ? 400
              : width >= 1024
              ? 300
              : width >= 952
              ? 300
              : width >= 720
              ? 300
              : 220
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
            dataKey="Junior_high"
            fill="#348CCC"
            name="Junior High"
            isAnimationActive={false}
          />
          <Bar
            dataKey="Senior_high"
            fill="#276999"
            name="Senior High"
            isAnimationActive={false}
          />
          <Bar
            dataKey="College"
            fill="#A1D7FF"
            name="College"
            isAnimationActive={false}
          />
          <Bar
            dataKey="Degree_holder"
            fill="#42AFFF"
            name="Degree Holder"
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
