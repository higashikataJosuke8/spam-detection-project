import React, { useEffect, useState } from "react";
import "./BarGraph.css";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";


const effectEmailProd = [
    { name: "Always Using", "Always Affected": 1, "Usually Affected": 2, "Rarely Affected": 5, "Not Affected": 15, amt: 30},
    { name: "Usually Using", "Always Affected": 2, "Usually Affected": 4, "Rarely Affected": 12, "Not Affected": 14, amt: 30},
    { name: "Rarely Using", "Always Affected": 0, "Usually Affected": 1, "Rarely Affected": 2, "Not Affected": 2, amt: 30}
]
export default function BarGraph9() {
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
          data={effectEmailProd}
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
            dataKey="Always Affected"
            fill="#267999"
            name="Always Affected"
            isAnimationActive={false}
          />
          <Bar
            dataKey="Usually Affected"
            fill="#348ccc"
            name="Usually Affected"
            isAnimationActive={false}
          />
          <Bar
            dataKey="Rarely Affected"
            fill="#42afff"
            name="Rarely Affected"
            isAnimationActive={false}
          />
          <Bar
            dataKey="Not Affected"
            fill="#808080"
            name="Not Affected"
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
