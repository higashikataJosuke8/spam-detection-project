import React, { useState, useEffect, useRef } from "react";
import BarGraph1 from "./BarGraph1";
import BarGraph2 from "./BarGraph2";
import "./Charts.css";

function Charts() {
  const [active, setActive] = useState({
    chart1: true,
    chart2: false,
  });
  const button1 = useRef(0);
  const button2 = useRef(0);

  useEffect(() => {
    if (active.chart1 === true && active.chart2 === false) {
      button1.current.style.color = "#348CCC";
      button1.current.style.borderBottom = "3px solid #348CCC";
    } else if (active.chart2 === true && active.chart1 === false) {
      button1.current.style.color = "#b6b6b6";
      button1.current.style.borderBottom = "3px solid white";
    }

    if (active.chart2 === true && active.chart1 === false) {
      button2.current.style.color = "#348CCC";
      button2.current.style.borderBottom = "3px solid #348CCC";
    } else if (active.chart1 === true && active.chart2 === false) {
      button2.current.style.color = "#b6b6b6";
      button2.current.style.borderBottom = "3px solid white";
    }
  });

  const Display = () => {
    if (active.chart1 && !active.chart2) {
      return (
        <div className='bargraph-cont'>
          <BarGraph1 />
        </div>
      );
    } else if (active.chart2 && !active.chart1) {
      return (
        <div>
          <BarGraph2 />
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
    <div className="btn-container-analytics">
      <div id="btns-analytics">
        <button ref={button1} className="btn-analytics one" onClick={clicker1}>
          Chart 1
        </button>
        <button ref={button2} className="btn-analytics two" onClick={clicker2}>
          Chart 2
        </button>
      </div>
      <div>
        <Display />
      </div>
    </div>
  );
}

export default Charts;
