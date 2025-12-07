import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { moviesData } from '../data/movies';

function MoviesDetail() {
    const { id } = useParams();
    const movie = moviesData.find(m => m.id === parseInt(id));

    if (!movie) {
        return (
            <div style={{ textAlign: 'center', padding: '50px', color: '#f0f0f0' }}>
                <h2>Фильм не найден</h2>
                <Link to="/movies" className="back-button">← Назад к фильмам</Link>
            </div>
        );
    }

    return (
        <div className="series-detail">
            <img src={movie.image} alt={movie.title} />
            <div className="series-info">
                <h2>{movie.title}</h2>
                <div className="stars">{"★".repeat(movie.rating) + "☆".repeat(10 - movie.rating)}</div>
                {/* ЖАНРЫ */}
                <div className="genres-detail">
                    <h4>Жанры:</h4>
                    <div className="genres-list">
                        {movie.genre.map((g, i) => (
                            <span key={i} className="genre-tag-detail">{g}</span>
                        ))}
                    </div>
                </div>
                <p><strong>Год:</strong> {movie.release}</p>
                <p>{movie.description}</p>
                <Link to="/movies" className="back-button">← Назад к фильмам</Link>
            </div>
        </div>
    );
}

export default MoviesDetail;
