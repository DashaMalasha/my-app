import React from "react";
import { Link } from "react-router-dom";

function CardAnime({ id, title, image, rating }) {
  return (
    <Link to={`/anime/${id}`} className="card-link">
      <div className="card-anime">
        <img src={image} alt={title} />
        <h4>{title}</h4>

        <div className="stars">
          {"★".repeat(rating) + "☆".repeat(10 - rating)}
        </div>
      </div>
    </Link>
  );
}

export default CardAnime;
