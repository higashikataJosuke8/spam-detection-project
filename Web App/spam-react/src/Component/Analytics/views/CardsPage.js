import React from "react";
import "../cardstyles.css";
import Card from "./Card";

function CardsPage() {
  return (
    <div className="cont">
      <div className="card-container">
        <div className="grid">
          <div className="cards">
            <Card front="Analytics Based on City Distribution" back={`NCR - 64 \n CALABARZON - 18 \n Central Luzon - 9 \n MIMAROPA - 2 \n Eastern Visayas - 2 \n Zamboanga Peninsula - 1`} />
          </div>
          <div className="cards">
            <Card front="Analytics Based on Gender" back={`Female - 49 \n Male - 47 \n Queer - 1 \n Prefer Not to say - 3`}/>
          </div>
        </div>
        <div className="grid">
          <div className="cards">
            <Card front="Analytics Based on Educational Attainment" back={`Junior High - 1 \n Senior High - 14 \n College - 76 \n Degree Holder - 9`} />
          </div>

          <div className="cards">
            <Card front="Analytics based on Convenience or Privacy" back={`For Convenience - 19 \n For Privacy - 81`} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsPage;
