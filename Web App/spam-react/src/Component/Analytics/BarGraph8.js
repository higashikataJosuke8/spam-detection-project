import React, { useEffect, useState } from "react";
import "./BarGraph.css";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

const sendPhoneOnSusRecip = [
    { name: "Sent", Female: 7, Male: 10, Queer: 0, "Prefer Not": 0, Total: 17 },
    { name: "Probably", Female: 13, Male: 10, Queer: 0, "Prefer Not": 2, Total: 25 },
    { name: "Not Entered", Female: 29, Male: 27, Queer: 1, "Prefer Not": 1, Total: 57 }
]
export default function BarGraph8() {
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
          data={sendPhoneOnSusRecip}
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
            fill="#267999"
            name="Female"
            isAnimationActive={false}
          />
          <Bar
            dataKey="Male"
            fill="#348ccc"
            name="Male"
            isAnimationActive={false}
          />
          <Bar
            dataKey="Queer"
            fill="#42afff"
            name="Queer"
            isAnimationActive={false}
          />
          <Bar
            dataKey="Prefer Not"
            fill="#808080"
            name="Prefer Not"
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
