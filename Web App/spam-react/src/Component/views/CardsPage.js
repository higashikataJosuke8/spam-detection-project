import React from "react";
import "../cardstyles.css";
import Card from "./Card";

function CardsPage() {
  return (
    <div className="cont">
      <div className="card-container">
        <div className="grid">
          <div className="cards">
            <Card front="Analytics Based on Age" back="C1 Back" />
          </div>
          <div className="cards">
            <Card front="Analytics Based on Gender" back="C2 Back" />
          </div>
        </div>
        <div className="grid">
          <div className="cards">
            <Card front="Analytics Based on Educational Attainment" back="C3 Back" />
          </div>

          <div className="cards">
            <Card front="Analytics based on Hacked by Spams" back="C4 Back" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsPage;
