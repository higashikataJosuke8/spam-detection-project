import React, { useState, useEffect, useRef } from "react";
import BarGraph1 from "./BarGraph1";
import BarGraph2 from "./BarGraph2";
import BarGraph5 from "./BarGraph5";
import "./Charts.css";

function Charts() {
  const [active, setActive] = useState({
    chart1: true,
    chart2: false,
    chart3: false,
  });
  const button1 = useRef(0);
  const button2 = useRef(0);
  const button3 = useRef(0);

  useEffect(() => {
    if (
      active.chart1 === true &&
      active.chart2 === false &&
      active.chart3 === false
    ) {
      button1.current.style.color = "#348CCC";
      button1.current.style.borderBottom = "3px solid #348CCC";
    } else if (
      active.chart1 === false &&
      (active.chart2 === true || active.chart3 === true)
    ) {
      button1.current.style.color = "#b6b6b6";
      button1.current.style.borderBottom = "3px solid white";
    }

    if (
      active.chart1 === false &&
      active.chart2 === true &&
      active.chart3 === false
    ) {
      button2.current.style.color = "#348CCC";
      button2.current.style.borderBottom = "3px solid #348CCC";
    } else if (
      active.chart2 === false &&
      (active.chart1 === true || active.chart3 === true)
    ) {
      button2.current.style.color = "#b6b6b6";
      button2.current.style.borderBottom = "3px solid white";
    }

    if (
      active.chart3 === true &&
      active.chart1 === false &&
      active.chart2 === false
    ) {
      button3.current.style.color = "#348CCC";
      button3.current.style.borderBottom = "3px solid #348CCC";
    } else if (
      active.chart3 === false &&
      (active.chart2 === true || active.chart1 === true)
    ) {
      button3.current.style.color = "#b6b6b6";
      button3.current.style.borderBottom = "3px solid white";
    }
  });

  const Display = () => {
    <h1>Scammed Online by Gender, Education and Security</h1>;
    if (active.chart1 && !active.chart2 && !active.chart3) {
      return (
        <div className="bargraph-cont">
          <BarGraph1 />
        </div>
      );
    } else if (active.chart2 && !active.chart1 && !active.chart3) {
      return (
        <div>
          <BarGraph2 />
        </div>
      );
    } else if (active.chart3 && !active.chart1 && !active.chart2) {
      return (
        <div>
          <BarGraph5 />
        </div>
      );
    }
  };

  const clicker1 = (e) => {
    setActive({
      ...active,
      chart1: true,
      chart2: false,
      chart3: false,
    });
  };

  const clicker2 = (f) => {
    setActive({
      ...active,
      chart1: false,
      chart2: true,
      chart3: false,
    });
  };

  const clicker3 = (f) => {
    setActive({
      ...active,
      chart1: false,
      chart2: false,
      chart3: true,
    });
  };

  return (
    <div className="main">
      <div className="title">
      </div>
      <div className="btn-container-analytics">
        <h3 id="title">Scammed Online by Gender, Education, and Security</h3>
        <div id="btns-analytics">
          <button
            ref={button1}
            className="btn-analytics one"
            onClick={clicker1}
          >
            Gender
          </button>
          <button
            ref={button2}
            className="btn-analytics two"
            onClick={clicker2}
          >
            Education
          </button>
          <button
            ref={button3}
            className="btn-analytics three"
            onClick={clicker3}
          >
            Security
          </button>
        </div>
        <div>
          <Display />
        </div>
      </div>
    </div>
  );
}

export default Charts;
