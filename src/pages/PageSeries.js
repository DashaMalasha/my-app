import React, { useState } from 'react';
import CardSeries from '../components/CardSeries';
import { seriesData } from '../data/series';

function PageSeries() {
  const [search, setSearch] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('все');

  // Все жанры из сериалов
  const allGenres = ['все', ...new Set(seriesData.flatMap(series => series.genre || []))];

  // Фильтрация
  const filteredSeries = seriesData.filter(series => {
    const matchesSearch = series.title.toLowerCase().includes(search.toLowerCase());
    const matchesGenre = selectedGenre === 'все' || (series.genre && series.genre.includes(selectedGenre));
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="page-movies"> {/* используем тот же класс */}
      <h2 style={{textAlign: "center", fontFamily: "'Montserrat', sans-serif", marginTop: "20px"}}>
        Популярные сериалы
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
        {allGenres.map(genre => (
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
        Найдено: {filteredSeries.length} из {seriesData.length} сериалов
      </div>

      <div className="cards-container">
        {filteredSeries.length > 0 ? (
          filteredSeries.map(series => <CardSeries key={series.id} {...series} />)
        ) : (
          <div className="no-results">Сериалы не найдены 😔</div>
        )}
      </div>
    </div>
  );
}

export default PageSeries;
