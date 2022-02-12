import React, { useState, useEffect } from "react";
import "./Dropdown.css";
import Select from "react-select";

import "./BarGraph.css";
import { AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";

const customStyles = {
  control: (base, state, styles) => ({
    ...base,
    background: "#348CCC",
    boxShadow: state.isFocused ? null : null,
    borderRadius: state.isFocused ? "3px 3px 0 0" : 5,

    ...styles,
    cursor: "pointer",
  }),
  option: (styles, state) => ({
    ...styles,
    cursor: "pointer",
  }),
};

function customTheme(theme) {
  return {
    ...theme,
    colors: {
      ...theme.colors,
      primary25: "rgba(222,235,255,255)", //hover
      primary: "FFFFFF",
      neutral20: "#FFFFFF", //arrow
      neutral30: "FFFFFF",
      neutral40: "#FFFFFF",
      neutral50: "#FFFFFF", //text select
      neutral60: "#FFFFFF", //arrow
      neutral80: "#FFFFFF",
      neutral90: "#348CCC",
    },
  };
}

function AreaData() {
  const [chosen1, setChosen1] = useState([]);
  const [chosen2, setChosen2] = useState([]);
  const options1 = [
    { value: "opt11", label: "Female" },
    { value: "opt12", label: "Male" },
    { value: "opt13", label: "Prefer not to say" },
    { value: "opt14", label: "Total" },
  ];

  const options2 = [
    { value: "opt21", label: "Maybe Hacked" },
    { value: "opt22", label: "Hacked" },
    { value: "opt23", label: "Not Hacked" },
    { value: "opt24", label: "Total Hacked" },
  ];

  const [result1, dd1Value] = useState(options1.label);
  const [result2, dd2Value] = useState(options2.label);
  const dd1Handler = (e) => {
    dd1Value(e.label);
    setChosen1(
      e.value === "opt11"
        ? option1
        : e.value === "opt12"
        ? option2
        : e.value === "opt13"
        ? option3
        : option4
    );
    //console.log(chosen1);
  };
  const dd2Handler = (e) => {
    dd2Value(e.label);
    setChosen2(
      e.value === "opt21"
        ? option21
        : e.value === "opt22"
        ? option22
        : e.value === "opt23"
        ? option23
        :  option24
    );
    //console.log(chosen2);
  };

  // console.log(result1);
  // console.log(result2);

  var data = [
    { name: "Degree Holder", uv: chosen1[0], pv: chosen2[0] },
    { name: "College", uv: chosen1[1], pv: chosen2[1] },
    { name: "Senior High", uv: chosen1[2], pv: chosen2[2] },
    { name: "Junior", uv: chosen1[3], pv: chosen2[3] },
    { name: "Elementary", uv: chosen1[4], pv: chosen2[4] },
    { name: "Total", uv: chosen1[5], pv: chosen2[5] },
  ];
  for (var i=0;i<=5;i++){
    data[i][result1] = chosen1[i];
    data[i][result2] = chosen2[i];
  }
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
    <div>
      {/* start of dropdown */}
      <div className="dropdown">
        <div className="dd" id="dd-1">
          <Select
            options={options1}
            styles={customStyles}
            theme={customTheme}
            placeholder="Select"
            isSearchable={false}
            hideSelectedOptions
            components={{
              IndicatorSeparator: () => null,
            }}
            onChange={dd1Handler}
          />
        </div>

        <div className="dd" id="dd-2">
          <Select
            options={options2}
            styles={customStyles}
            theme={customTheme}
            placeholder="Select"
            isSearchable={false}
            hideSelectedOptions
            components={{
              IndicatorSeparator: () => null,
            }}
            onChange={dd2Handler}
          />
        </div>
      </div>
      {/* end of dropdown */}

      {/* start of graph */}
      <div className="graph-cont">
        <div className="linegraph">
          <AreaChart
            width={
              width >= 1348
                ? 700
                : width >= 940
                ? 550
                : width >= 720
                ? 550
                : 350
            }
            height={
              width >= 1348
                ? 400
                : width >= 940
                ? 350
                : width >= 720
                ? 200
                : 220
            }
            data={data}
            margin={{
              top: 10,
              right: 50,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis
              fontSize={
                width >= 1348 ? 12 : width >= 940 ? 10 : width >= 720 ? 9 : 8
              }
              dataKey="name"
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              fontSize={
                width >= 1348 ? 12 : width >= 940 ? 10 : width >= 720 ? 9 : 8
              }
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              wrapperStyle={{
                width: 100,
                backgroundColor: "#f7fafd",
                fontSize: "12px",
              }}
            />
            <Area
              type="monotone"
              dataKey={result1}
              stackId="1"
              stroke="#42AFFF"
              fill="#42AFFF"
            />
            <Area
              type="monotone"
              dataKey={result2}
              stackId="1"
              stroke="#21587F"
              fill="#21587F"
            />
          </AreaChart>
        </div>
      </div>
      {/* end of graph */}
    </div>
  );
}

const option1 = [4, 5, 8, 1, 2, 20];
const option2 = [12, 5, 4, 2, 0, 23];
const option3 = [3, 2, 2, 0, 1, 8];
const option4 = [19, 12, 14, 3, 3, 51];

const option21 = [5, 0, 3, 1, 0, 9];
const option22 = [6, 4, 3, 1, 1, 15];
const option23 = [8, 8, 8, 1, 2, 27];
const option24 = [19, 12, 14, 3, 3, 51];
export default AreaData;
