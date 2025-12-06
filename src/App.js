import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CardSeries from './components/CardSeries';
import { seriesData } from './data/series';
import PageSeries from './pages/PageSeries';
import SeriesDetail from './pages/SeriesDetail';

function Home() {
  const popularSeries = seriesData.slice(0, 3);

  return (
    <div>
      {/* Баннер */}
      <div style={{padding: "40px", textAlign: "center", background: "#ddd"}}>
        <h2>Главный баннер сайта</h2>
        <p>Новинки и популярные подборки!</p>
      </div>

      {/* Карточки фильмов */}
      <div style={{padding: "20px"}}>
        <h3>Популярные фильмы</h3>
        <div style={{display: "flex", gap: "10px"}}>
          <div style={{border: "1px solid #000", padding: "10px"}}>Фильм 1</div>
          <div style={{border: "1px solid #000", padding: "10px"}}>Фильм 2</div>
          <div style={{border: "1px solid #000", padding: "10px"}}>Фильм 3</div>
        </div>
      </div>

      {/* Карточки аниме */}
      <div style={{padding: "20px"}}>
        <h3>Популярное аниме</h3>
        <div style={{display: "flex", gap: "10px"}}>
          <div style={{border: "1px solid #000", padding: "10px"}}>Аниме 1</div>
          <div style={{border: "1px solid #000", padding: "10px"}}>Аниме 2</div>
          <div style={{border: "1px solid #000", padding: "10px"}}>Аниме 3</div>
        </div>
      </div>

      {/* Карточки сериалов */}
      <div style={{padding: "20px"}}>
        <h3>Популярные сериалы</h3>
        <div style={{display: "flex", gap: "20px", justifyContent: "center"}}>
          {popularSeries.map(series => (
            <CardSeries
              key={series.id}
              id={series.id}
              title={series.title}
              image={series.image}
              rating={series.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <Header />  {/* шапка на всех страницах */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/series" element={<PageSeries />} />
        <Route path="/series/:id" element={<SeriesDetail />} />
      </Routes>
      <Footer />  {/* подвал на всех страницах */}
    </>
  );
}

export default App;
