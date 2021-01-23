import React, { useContext, useEffect, useState } from 'react';
import { ImageGallery } from './layouts/ImageGallery';
import { ProductContext } from '../../context/ProductContext';
import { ProductMainInfos } from './layouts/ProductMainInfos';

export const ProductOverview = () => {
  const { curProduct, zoomIn, setZoomIn } = useContext(ProductContext);
  const [curWidth, setCurWidth] = useState(null);

  window.addEventListener('resize', () => {
    setCurWidth(window.innerWidth);
  });

  return (
    <div className="d-block">
      <div className="row">
        <div className={`d-flex ${zoomIn ? 'col-12' : 'col-7'}`}>
          <ImageGallery />
        </div>
        <div
          className={`row flex-wrap ${curWidth > 1400 ? 'd-flex' : 'd-none'} ${
            zoomIn
              ? 'col-12 align-content-around'
              : 'col-5 align-content-center'
          } `}
        >
          <ProductMainInfos />
        </div>
      </div>
      <div className="row">
        <div className="col-7">
          <div className="fs-3">{curProduct.slogan}</div>
          <div className="fs-6">{curProduct.description}</div>
        </div>
        <div className="col-5">
          {curProduct.features.map((feature, i) => {
            return feature.value ? (
              <div key={feature.feature} className="fs-4">
                {feature.feature}: {feature.value}
              </div>
            ) : (
              <div key={i}></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
