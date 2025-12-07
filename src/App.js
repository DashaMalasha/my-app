import React, { useState, useEffect } from 'react';  
import { Routes, Route, Link } from 'react-router-dom';  
import Header from './components/Header';
import Footer from './components/Footer';
import CardSeries from './components/CardSeries';
import CardMovies from './components/CardMovies';
import CardAnime from "./components/CardAnime";
import { seriesData } from './data/series';
import { moviesData } from './data/movies';
import { animeData } from "./data/anime";
import PageSeries from './pages/PageSeries';
import PageMovies from './pages/PageMovies';
import PageAnime from './pages/PageAnime';
import SeriesDetail from './pages/SeriesDetail';
import MoviesDetail from './pages/MoviesDetail';
import AnimeDetail from './pages/AnimeDetail';
function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "🎥 Лучшие фильмы",
      subtitle: "Эксклюзивные новинки и топовые хиты",
      buttonText: "Смотреть фильмы",
      buttonLink: "/movies",
      bgImage: "https://i.pinimg.com/originals/6b/5f/71/6b5f71ac1d1c93a4ef86eaae9a55a4c5.jpg"
    },
    {
      title: "📺 Популярные сериалы", 
      subtitle: "Захватывающие истории и драмы",
      buttonText: "Смотреть сериалы",
      buttonLink: "/series",
      bgImage: "https://i.ytimg.com/vi/MKS21OV69s0/maxresdefault.jpg"
    },
    {
      title: "🎌 Лучшее аниме",
      subtitle: "Легендарные саги и новые сезоны",
      buttonText: "Смотреть аниме", 
      buttonLink: "/anime",
      bgImage: "https://i.pinimg.com/originals/7f/9b/5b/7f9b5beb6cb7a37010be63ff890d6523.jpg"
    }
  ];

  // Автопрокрутка
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const popularSeries = seriesData.slice(0, 3);
  const popularMovies = moviesData.slice(0, 3);
  const popularAnime = animeData.slice(0, 3);


  return (
    <div>
      {/* 🎨 1. СЛАЙДЕР БАННЕР (ПЕРВЫЙ) */}
      <div className="slider-container">
        <div className="slide active" style={{ backgroundImage: `url(${slides[currentSlide].bgImage})` }}>
          <div className="slide-content">
            <h1>{slides[currentSlide].title}</h1>
            <p>{slides[currentSlide].subtitle}</p>
            <Link to={slides[currentSlide].buttonLink} className="banner-btn">
              {slides[currentSlide].buttonText} →
            </Link>
          </div>
        </div>

        <div className="slide-indicators">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`indicator ${currentSlide === index ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* 🎬 2. ПОПУЛЯРНЫЕ ФИЛЬМЫ (ОСТАЮТСЯ) */}
      <div style={{padding: "20px"}}>
        <h3>Популярные фильмы</h3>
        <div style={{display: "flex", gap: "20px", justifyContent: "center"}}>
          {popularMovies.map(movie => (
            <CardMovies key={movie.id} {...movie} />
          ))}
        </div>
      </div>

      {/* 📺 3. ПОПУЛЯРНЫЕ СЕРИАЛЫ (ОСТАЮТСЯ) */}
      <div style={{padding: "20px"}}>
        <h3>Популярные сериалы</h3>
        <div style={{display: "flex", gap: "20px", justifyContent: "center"}}>
          {popularSeries.map(series => (
            <CardSeries key={series.id} {...series} />
          ))}
        </div>
      </div>

      {/* АНИМЕ (пока заглушки - останутся как есть) */}
      <div style={{ padding: "20px" }}>
        <h3>Популярное аниме</h3>
        <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
          {popularAnime.map(anime => (
            <CardAnime key={anime.id} {...anime} />
          ))}
        </div>
      </div>
    </div>
  );
}
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/series" element={<PageSeries />} />
        <Route path="/series/:id" element={<SeriesDetail />} />
        <Route path="/movies" element={<PageMovies />} /> {/* ← ДОБАВИТЬ */}
        <Route path="/movies/:id" element={<MoviesDetail />} /> {/* ← ДОБАВИТЬ */}
        <Route path="/anime" element={<PageAnime />} />
        <Route path="/anime/:id" element={<AnimeDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
