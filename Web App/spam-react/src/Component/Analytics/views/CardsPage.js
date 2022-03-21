import React from "react";
import "../cardstyles.css";
import Card from "./Card";

function CardsPage() {
  return (
    <div className="cont">
      <div className="card-container">
        <div className="grid">
          <div className="cards">
            <Card front="Analytics Based on City Distribution" back={`Manila - 29, Quezon City - 4, Caloocan - 2, Pasig - 2, Malabon - 2, Makati - 2, Marikina - 1, Mandaluyong - 1, Las Pinas - 1, Rizal - 6, Bulacan - 5, Cavite - 5, Pampanga - 2, Batangas - 1, Marinduque - 1`} />
          </div>
          <div className="cards">
            <Card front="Analytics Based on Gender" back={`Female - 29 \n Male - 36 \n Queer - 1`}/>
          </div>
        </div>
        <div className="grid">
          <div className="cards">
            <Card front="Analytics Based on Educational Attainment" back={`Junior High - 1 \n Senior High - 9 \n College - 53 \n Degree Holder - 3`} />
          </div>

          <div className="cards">
            <Card front="Analytics based on Convenience or Provacy" back={`For Convenience - 13 \n For Privacy - 53`} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsPage;
