import React from "react";
import "./Analytics.css";
import Logo from "./Logo";
import Charts from "./Charts";
import Carousel1 from "./Carousel1";
import Carousel2 from "./Carousel2";
import CardsPage from "./views/CardsPage";
import AreaData from "./AreaData";
const Analytics = () => {
  return (
    <div className="main">
      <Logo />
      <CardsPage />
      <div className="sub">
        <div className="sub-sub" id="car1">
          <Carousel1 />
        </div>
        <div className="area-graph">
          <Charts />
        </div>
        <div className="sub-sub" id="car2">
          <Carousel2 />
        </div>
      </div>

      {/* <Dropdown /> */}
      {/* <LineGraph /> */}

      <AreaData />
    </div>
  );
};

export default Analytics;
