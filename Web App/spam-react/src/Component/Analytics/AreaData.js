import React, { useState } from "react";
import BarGraph from "./BarGraph";
import BarGraph1 from './BarGraph1'
import BarGraph2 from './BarGraph2'
import BarGraph3 from './BarGraph3'
import BarGraph4 from './BarGraph4'
import BarGraph5 from './BarGraph5'
import BarGraph6 from './BarGraph6'

import "./Dropdown.css";
import Select from "react-select";

import "./BarGraph.css";

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
    { value: "opt11", label: "Hacked" },
    { value: "opt12", label: "Scammed" }
  ];

  const options2 = [
    { value: "opt21", label: "Gender" },
    { value: "opt22", label: "Education" },
    { value: "opt23", label: "Security" }
  ];

  const [result1, dd1Value] = useState(options1.label);
  const [result2, dd2Value] = useState(options2.label);
  const dd1Handler = (e) => {
    dd1Value(e.label);
    setChosen1( e.value );
    //console.log(chosen1);
  };
  const dd2Handler = (e) => {
    dd2Value(e.label);
    setChosen2( e.value );
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
  return (
    <div>
      <h2>Spammed and Hacked by different variables</h2>
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
          {(chosen1==="opt11") ?
              (chosen2==="opt21") ? 
              < BarGraph3 /> :
              (chosen2==="opt22") ?
              < BarGraph4 /> :
              (chosen2==="opt23") ?
              < BarGraph6 /> :
              < BarGraph />
            :(chosen1 === "opt12") ?
              (chosen2==="opt21") ? 
              < BarGraph1 /> :
              (chosen2==="opt22") ?
              < BarGraph2 /> :
              (chosen2==="opt23") ?
              < BarGraph5 /> :
              < BarGraph />
            : <BarGraph/>
            }
        </div>
      </div>
      {/* end of graph */}
    </div>
  );
}

export default AreaData;
