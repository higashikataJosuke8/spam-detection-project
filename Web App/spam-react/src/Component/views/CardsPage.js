import React from "react";
import "../cardstyles.css";
import Card from "./Card";

function CardsPage() {
  return (
    <div className="cont">
      <div className="card-container">
        <Card front="C1 Front" back="C1 Back" />

        <Card front="C2 Front" back="C2 Back" />

        <Card front="C3 Front" back="C3 Back" />

        <Card front="C4 Front" back="C4 Back" />
      </div>
    </div>
  );
}

export default CardsPage;
