import React from "react";
import "./Analytics.css";
import CardsPage from "./views/CardsPage";
import Title from "./Title";
// import Dropdown from "./components/Dropdown";
import Charts from "./Charts";
import Carousel1 from "./Carousel1";
import Carousel2 from "./Carousel2";
// import LineGraph from "./LineGraph";

import AreaData from "./AreaData";


const Analytics = () => {
    return (
        <div className="main">
            <Title />
            <CardsPage />
            <div className="sub">
                <div>
                <Carousel1 />
                </div>
                <div>
                <br />
                <br />
                <Charts />
                </div>
                <div>
                <Carousel2 />
                </div>
            </div>

            {/* <Dropdown /> */}
            {/* <LineGraph /> */}

            <AreaData />
        </div>
    )
}

export default Analytics
