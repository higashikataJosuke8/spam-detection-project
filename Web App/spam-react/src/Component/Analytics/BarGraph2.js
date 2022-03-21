import React, { useEffect, useState } from "react";
import "./BarGraph.css";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

const data = [
  { name: "Scammed", Junior_high: 0, Senior_high: 1, College: 1, Degree_holder: 1 },
  { name: "Probably", Junior_high: 1, Senior_high: 2, College: 3, Degree_holder: 8 },
  { name: "Not Scammed", Junior_high: 1, Senior_high: 1, College: 1, Degree_holder: 3 },
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
              ? 600
              : width >= 952
              ? 400
              : width >= 720
              ? 650
              : 370
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
