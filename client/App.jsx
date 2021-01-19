import React from 'react';
import { Header } from './components/defaults/Header.js';
import { ProductOverview } from './components/ProductOverview/index';
import RatingsAndReviews from './components/RatingsReviews/RatingsReviews.jsx';
import QuestionsAndAnswers from './components/QuestionsAndAnswers/QuestionsAndAnswers.jsx';
import RelatedAndOutfit from './components/RelatedAndOutfit/RelatedAndOutfit.jsx';

export const App = () => {
  return (
    <div>
      <Header />
      <br />
      <div className="container">
        <ProductOverview />
      </div>
      <div>
        <RelatedAndOutfit />
      </div>
      <QuestionsAndAnswers />
      <div> <br />
        <RatingsAndReviews />
      </div>

    </div>
  );
};
