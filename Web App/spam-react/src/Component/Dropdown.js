import React, { useState } from "react";
import "./Dropdown.css";
import Select from "react-select";

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

var r1, r2;

function Dropdown() {
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

  const [result1, dd1Value] = useState(options1.label);
  const [result2, dd2Value] = useState(options2.label);
  const dd1Handler = (e) => {
    dd1Value(e.value);
  };
  const dd2Handler = (e) => {
    dd2Value(e.value);
  };

  r1 = result1;
  r2 = result2;

  // console.log(r1);
  // console.log(r2);

  return (
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
  );
}

export { r1, r2 };
export default Dropdown;
