import React from "react";
import './Price.scss';

const Price = () => {
  return (
    <div className="price">
      <div className="price-block">
        <h2 className="price-block__title">Price</h2>
        <div className="price-block__rates">
          <div className="price-block__rates-item">
            <h2 className="price-block__rates-item__title">Standard</h2>
            <h3 className="price-block__rates-item__cost">500&nbsp;$</h3>
            <p className="price-block__rates-item__description">
              One location<br/>
              120 photos in color<br/>
              12 photos in retouch<br/>
              Readiness 2-3 weeks<br/>
              Make up, visage<br/>
              </p>
            <button className="price-block__rates-item__btn">Order shooting</button>
          </div>
          <div className="price-block__rates-item">
            <h2 className="price-block__rates-item__title">Premium</h2>
            <h3 className="price-block__rates-item__cost">700&nbsp;$</h3>
            <p className="price-block__rates-item__description">
              One or two locations<br/>
              200 photos in color<br/>
              20 photos in retouch<br/>
              Readiness 1-2 weeks<br/>
              Make up, visage<br/>
            </p>
            <button className="price-block__rates-item__btn">Order shooting</button>
          </div>
          <div className="price-block__rates-item">
            <h2 className="price-block__rates-item__title">Gold</h2>
            <h3 className="price-block__rates-item__cost">1000 $</h3>
            <p className="price-block__rates-item__description">
              Three locations or more<br/>
              300 photos in color<br/>
              50 photos in retouch<br/>
              Readiness 1 week<br/>
              Make up, visage, hairstyle<br/>
            </p>
            <button className="price-block__rates-item__btn">Order shooting</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Price;