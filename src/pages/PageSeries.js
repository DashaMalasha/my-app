import React from 'react';
import CardSeries from '../components/CardSeries';
import { seriesData } from '../data/series';

function PageSeries() {
  return (
    <div className="page-series">
      <h2 style={{textAlign: "center", fontFamily: "'Montserrat', sans-serif", marginTop: "20px"}}>Популярные сериалы</h2>
      <div className="cards-container">
        {seriesData.map(s => <CardSeries key={s.id} {...s} />)}
      </div>
    </div>
  );
}

export default PageSeries;
