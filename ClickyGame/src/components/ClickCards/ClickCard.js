import React from "react";
import "./ClickCard.css";

const ClickCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);


export default ClickCard;