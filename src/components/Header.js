import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // вставь свою картинку логотипа в assets

function Header() {
  return (
    <header>
      <h1>
        <img src={logo} alt="FluxCinema Logo" />
        FluxCinema
      </h1>
      <nav>
        <Link to="/">Главная</Link>
        <Link to="/movies">Фильмы</Link>
        <Link to="/anime">Аниме</Link>
        <Link to="/series">Сериалы</Link>
      </nav>
    </header>
  );
}

export default Header;
