import React from 'react';
import co from './cookiesdata'; // Adjust the path as necessary
import '../components/caksicle.css';
import dia from '../assets/bluediamond.png';
import front from '../assets/frontcake.png';
import { Link } from 'react-router-dom';

const Cookies = () => {
  return (
    <div className="popular">
      <h1>Cookies</h1>
      <img src={dia} alt="Diamond" className="diamond-image" />
      <p>
        Any celebration, whether a cozy gathering or party, is incomplete without Cookies! We offer a wide range of
        handcrafted specialized cookies that are a treat to the eyes and also the taste buds.
      </p>
      <div className="front-cake-">
        <img src={front} alt="Front Cake" />
      </div>

      <hr />

      <div className="popular-item">
        {co.map((product) => (
          <div key={product.id}>
            <Link to={`/cookie/${product.id}`}>
              <img src={product.image} alt={product.name} />
              <div className="overlay">
                <h2>{product.name}</h2>
                <p className="prices">
                  <span className="new-price">Rs {product.new_price}</span>
                  <span className="old-price">Rs {product.old_price}</span>
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cookies;
