import React, { useEffect, useState } from "react";
import "./BarGraph.css";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";


const effectSMSProd = [
  { name: "Frequently", "Highly Bothering": 3, "Usually Bothering": 2, "Rarely Bothering": 13, "Not Bothering": 6, "Total": 24, amt: 30},
  { name: "Usually", "Highly Bothering": 0, "Usually Bothering": 10, "Rarely Bothering": 8, "Not Bothering": 8, "Total": 26, amt: 30},
  { name: "Rarely", "Highly Bothering": 0, "Usually Bothering": 3, "Rarely Bothering": 18, "Not Bothering": 26, "Total": 47, amt: 30},
  { name: "Not Using", "Highly Bothering": 0, "Usually Bothering": 0, "Rarely Bothering": 1, "Not Bothering": 2, "Total": 3, amt: 30}
]
export default function BarGraph10() {
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
          data={effectSMSProd}
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
            dataKey="Highly Bothering"
            fill="#267999"
            name="Highly Bothering"
            isAnimationActive={false}
          />
          <Bar
            dataKey="Usually Bothering"
            fill="#348ccc"
            name="Usually Bothering"
            isAnimationActive={false}
          />
          <Bar
            dataKey="Rarely Bothering"
            fill="#42afff"
            name="Rarely Bothering"
            isAnimationActive={false}
          />
          <Bar
            dataKey="Not Bothering"
            fill="#3B9EE6"
            name="Not Bothering"
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
