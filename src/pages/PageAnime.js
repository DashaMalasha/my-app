import React, { useState } from 'react';
import CardAnime from '../components/CardAnime';
import { animeData } from '../data/anime';

function PageAnime() {
  const [search, setSearch] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('все');

  // 🎭 Все жанры из аниме
  const allGenres = ['все', ...new Set(animeData.flatMap(anime => anime.genre || []))];

  // 🔎 Фильтрация
  const filteredAnime = animeData.filter(anime => {
    const matchesSearch = anime.title.toLowerCase().includes(search.toLowerCase());
    const matchesGenre =
      selectedGenre === 'все' || (anime.genre && anime.genre.includes(selectedGenre));
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="page-movies">
      <h2
        style={{
          textAlign: 'center',
          fontFamily: "'Montserrat', sans-serif",
          marginTop: '20px'
        }}
      >
        Популярное аниме
      </h2>

      {/* 🔍 ПОИСК */}
      <div className="search-container">
        <input
          type="text"
          placeholder="🔍 Поиск по названию..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </div>

      {/* 🎭 ФИЛЬТР ПО ЖАНРАМ */}
      <div className="genres-filter">
        {allGenres.map((genre) => (
          <button
            key={genre}
            className={`genre-btn ${selectedGenre === genre ? 'active' : ''}`}
            onClick={() => setSelectedGenre(genre)}
          >
            {genre}
          </button>
        ))}
      </div>

      {/* 📊 СЧЕТЧИК */}
      <div className="filter-info">
        Найдено: {filteredAnime.length} из {animeData.length} аниме
      </div>

      {/* 🧩 КАРТОЧКИ */}
      <div className="cards-container">
        {filteredAnime.length > 0 ? (
          filteredAnime.map((anime) => <CardAnime key={anime.id} {...anime} />)
        ) : (
          <div className="no-results">Аниме не найдено 😔</div>
        )}
      </div>
    </div>
  );
}

export default PageAnime;
