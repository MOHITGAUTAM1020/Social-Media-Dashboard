import React from "react";
import "../../public/assets/Card-small.css";

function CardSmall({ growth, pageViews, icon }) {
  return (
    <div className="card-small">
      <p className="card-small-views">page views</p>
      <p className="card-small-icon">
        <img src={icon} />
      </p>
      <p className="card-small-number">{pageViews}</p>
      <p className="card-small-percentage">
        <span>
          <img src="images/up.png" />
          {growth}%
        </span>
      </p>
    </div>
  );
}

export default CardSmall;
