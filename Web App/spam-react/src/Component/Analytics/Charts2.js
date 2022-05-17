import React, { useState, useEffect, useRef } from "react";
import BarGraph7 from "./BarGraph7";
import BarGraph8 from "./BarGraph8";
import "./Charts.css";

function Charts2() {
  const [active, setActive] = useState({
    chart1: true,
    chart2: false,
  });
  const button1 = useRef(0);
  const button2 = useRef(0);

  useEffect(() => {
    if ( active.chart1 === true && active.chart2 === false ) {
      button1.current.style.color = "#348CCC";
      button1.current.style.borderBottom = "3px solid #348CCC";
    } else if ( active.chart1 === false && active.chart2 === true ) {
      button1.current.style.color = "#b6b6b6";
      button1.current.style.borderBottom = "3px solid white";
    }

    if ( active.chart1 === false && active.chart2 === true) {
      button2.current.style.color = "#348CCC";
      button2.current.style.borderBottom = "3px solid #348CCC";
    } else if ( active.chart2 === false && active.chart1 === true) {
      button2.current.style.color = "#b6b6b6";
      button2.current.style.borderBottom = "3px solid white";
    }
  });

  const Display = () => {
    <h1>Hacked Online by Gender, Education, and Security</h1>;
    if (active.chart1 && !active.chart2) {
      return (
        <div className="bargraph-cont">
          <BarGraph7 />
        </div>
      );
    } else if (active.chart2 && !active.chart1) {
      return (
        <div>
          <BarGraph8 />
        </div>
      );
    }
  };

  const clicker1 = (e) => {
    setActive({
      ...active,
      chart1: true,
      chart2: false,
    });
  };

  const clicker2 = (f) => {
    setActive({
      ...active,
      chart1: false,
      chart2: true,
    });
  };


  return (
    <div className="main">
      <div className="title">
      </div>
      <div className="btn-container-analytics" id="suspicious">
        <h3 id="title">Providing Details to a Suspicious Platform</h3>
        <div id="btns-analytics">
          <button
            ref={button1}
            className="btn-analytics one"
            onClick={clicker1}
          >
            Email
          </button>
          <button
            ref={button2}
            className="btn-analytics two"
            onClick={clicker2}
          >
            SMS
          </button>
        </div>
        <div>
          <Display />
        </div>
      </div>
    </div>
  );
}

export default Charts2;
