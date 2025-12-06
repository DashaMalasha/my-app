import React from 'react';
import { Link } from 'react-router-dom';

function CardSeries({ id, title, image, rating }) {
  return (
    <Link to={`/series/${id}`} className="card-link">
      <div className="card-series">
        <img src={image} alt={title} />
        <h4>{title}</h4>
        <div className="stars">
          {"★".repeat(rating) + "☆".repeat(10 - rating)}
        </div>
      </div>
    </Link>
  );
}

export default CardSeries;
