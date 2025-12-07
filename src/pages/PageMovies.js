import React, { useState } from 'react';
import CardMovies from '../components/CardMovies';
import { moviesData } from '../data/movies';

function PageMovies() {
    const [search, setSearch] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('все');

    // Все жанры из фильмов
    const allGenres = ['все', ...new Set(moviesData.flatMap(movie => movie.genre))];

    // Фильтрация
    const filteredMovies = moviesData.filter(movie => {
        const matchesSearch = movie.title.toLowerCase().includes(search.toLowerCase());
        const matchesGenre = selectedGenre === 'все' || movie.genre.includes(selectedGenre);
        return matchesSearch && matchesGenre;
    });

    return (
        <div className="page-movies">
            <h2 style={{ textAlign: "center", fontFamily: "'Montserrat', sans-serif", marginTop: "20px" }}>
                Популярные фильмы
            </h2>

            {/* ПОИСК */}
            <div className="search-container">
                <input
                    type="text"
                    placeholder="🔍 Поиск по названию..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="search-input"
                />
            </div>

            {/* ФИЛЬТР ПО ЖАНРАМ */}
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

            {/* РЕЗУЛЬТАТ */}
            <div className="filter-info">
                Найдено: {filteredMovies.length} из {moviesData.length} фильмов
            </div>

            <div className="cards-container">
                {filteredMovies.length > 0 ? (
                    filteredMovies.map(movie => <CardMovies key={movie.id} {...movie} />)
                ) : (
                    <div className="no-results">Фильмы не найдены 😔</div>
                )}
            </div>
        </div>
    );
}

export default PageMovies;
