import React, { useState } from 'react';
import ratingCalculations from './ratingCalculations.js';

const RatingBreakdown = ({ allRatings }) => {
  //set ratings with 0 reviews to 0 and convert to array
  let ratingStats = ratingCalculations(allRatings);
  let ratingPercentages = [];
  // individual star review / ratingsCount
  for (let x = 1; x < 6; x++) {
    if (!allRatings[x]) {
      allRatings[x] = 0;
    }
    ratingPercentages.unshift((allRatings[x] / ratingStats.ratingsCount) * 100);
  }
  var counter = 6;
  return (
    <div className="jbarGraph">
      <div className="row">
        {ratingPercentages.map((percentage) => {
          counter--;
          return (
            <div key={counter}>
              <div className="side">
                <div className="jXAxis">{counter} stars</div>
              </div>
              <div className="middle">
                <div className="jbar-container">
                  <div
                    className="jbars"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RatingBreakdown;
