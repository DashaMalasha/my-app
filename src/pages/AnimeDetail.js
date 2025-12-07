import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { animeData } from '../data/anime';

function AnimeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Находим выбранное аниме по ID
  const anime = animeData.find(a => a.id === Number(id));

  if (!anime) {
    return <p style={{ textAlign: "center" }}>Аниме не найдено</p>;
  }

  return (
    <div className="series-detail">
      <img src={anime.image} alt={anime.title} />

      <div className="series-info">
        <h2>{anime.title}</h2>

        {/* ⭐ РЕЙТИНГ */}
        <p className="stars">
          {"★".repeat(anime.rating) + "☆".repeat(10 - anime.rating)}
        </p>

        {/* 🎭 ЖАНРЫ */}
        <div className="genres-detail">
          <h4>Жанры:</h4>
          <div className="genres-list">
            {anime.genre.map((g, i) => (
              <span key={i} className="genre-tag-detail">{g}</span>
            ))}
          </div>
        </div>

        <p><strong>Дата выхода:</strong> {anime.release}</p>

        <p>{anime.description}</p>

        <button className="back-button" onClick={() => navigate(-1)}>
          ← Вернуться назад
        </button>
      </div>
    </div>
  );
}

export default AnimeDetail;
