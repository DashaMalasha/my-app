import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { seriesData } from '../data/series';

function SeriesDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const series = seriesData.find(s => s.id === Number(id));

  if (!series) return <p style={{textAlign: "center"}}>Сериал не найден</p>;

  return (
    <div className="series-detail">
      <img src={series.image} alt={series.title} />
      <div className="series-info">
        <h2>{series.title}</h2>
        <p className="stars">{"★".repeat(series.rating) + "☆".repeat(10 - series.rating)}</p>
        <p><strong>Дата выхода:</strong> {series.release}</p>
        <p>{series.description}</p>
        <button className="back-button" onClick={() => navigate(-1)}>← Вернуться назад</button>
      </div>
    </div>
  );
}

export default SeriesDetail;
