import React from "react";
import "./Analytics.css";
import Logo from "../Logo";
import Charts3 from "./Charts3";
import Charts2 from "./Charts2";
import Carousel1 from "./Carousel1";
import Carousel2 from "./Carousel2";
import CardsPage from "./views/CardsPage";
import AreaData from "./AreaData";
//import AnalyticsWebsite from "./AnalyticsWebsite";

const Analytics = () => {
  return (
    <div className="main">
      <Logo />

      <CardsPage />
      {/* <AnalyticsWebsite /> */}
      <div className="sub">
        <div className="sub-sub" id="car1">
          <Carousel1 />
        </div>
        <div className="sub-sub" id="car2">
          <Carousel2 />
        </div>
      </div>
      <div className="area-graph">
        <Charts2 />
        <Charts3 />
      </div>
      <div>
        <AreaData />
      </div>
      <div id="footer">
        <h6>Source: Big Data Group</h6>
      </div>
    </div>
  );
};

export default Analytics;
