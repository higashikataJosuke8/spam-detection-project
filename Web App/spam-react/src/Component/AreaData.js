import React, { useState } from "react";
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
    { value: "opt11", label: "Option 1" },
    { value: "opt12", label: "Option 2" },
    { value: "opt13", label: "Option 3" },
    { value: "opt14", label: "Option 4" },
    { value: "opt15", label: "Option 5" },
  ];

  const options2 = [
    { value: "opt21", label: "Option 1" },
    { value: "opt22", label: "Option 2" },
    { value: "opt23", label: "Option 3" },
    { value: "opt24", label: "Option 4" },
    { value: "opt25", label: "Option 5" },
  ];

  //const [result1, dd1Value] = useState(options1.label);
  //const [result2, dd2Value] = useState(options2.label);
  const dd1Handler = (e) => {
    //dd1Value(e.value);
    setChosen1((e.value === "opt11") ? option1: (e.value === "opt12") ? option2: (e.value === "opt13") ? option3: (e.value === "opt14") ? option4: option5);
    //console.log(chosen1);
  };
  const dd2Handler = (e) => {
    //dd2Value(e.value);
    setChosen2((e.value === "opt21") ? option1: (e.value === "opt22") ? option2: (e.value === "opt23") ? option3: (e.value === "opt24") ? option4: option5);
    //console.log(chosen2);
  };

  // console.log(result1);
  // console.log(result2);

  var data = [
    { name: "Page A", uv: chosen1[0], pv: chosen2[0] },
    { name: "Page B", uv: chosen1[1], pv: chosen2[1] },
    { name: "Page C", uv: chosen1[2], pv: chosen2[2] },
    { name: "Page D", uv: chosen1[3], pv: chosen2[3] },
    { name: "Page E", uv: chosen1[4], pv: chosen2[4] },
    { name: "Page F", uv: chosen1[5], pv: chosen2[5] },
    { name: "Page G", uv: chosen1[6], pv: chosen2[6] },
  ];
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
            width={700}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis
              fontSize={12}
              dataKey="name"
              axisLine={false}
              tickLine={false}
            />
            <YAxis fontSize={12} axisLine={false} tickLine={false} />
            <Tooltip
              wrapperStyle={{
                width: 85,
                backgroundColor: "#f7fafd",
                fontSize: "12px",
              }}
            />
            <Area
              type="monotone"
              dataKey="uv"
              stackId="1"
              stroke="#42AFFF"
              fill="#42AFFF"
            />
            <Area
              type="monotone"
              dataKey="pv"
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

const option1 = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const option2 = [2710, 6391, 7450, 3009, 4689, 2399, 6816];
const option3 = [939, 9565, 9361, 1491, 4024, 9795, 6894];
const option4 = [236, 1932, 3743, 3853, 8853, 7452, 7515];
const option5 = [6071, 4198, 6782, 6101, 8319, 1213, 1129];

export default AreaData;
