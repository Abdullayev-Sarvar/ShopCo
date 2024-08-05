import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Card.scss';
import Stars from '../../../assets/images/Stars.png';

const Card = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios("https://dummyjson.com/products")
      .then(response => {
        const allProducts = response.data.products;
        if (category === 'topSailing') {
          setProducts(allProducts.slice(0, 4)); // Top Sailing
        } else if (category === 'newArrivals') {
          setProducts(allProducts.slice(4, 8)); // New Arrivals
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [category]);

  if (loading) {
    return <div className='Cards-Loading'>Loading...</div>;
  }

  return (
    <div className='Card-wrapper'>
      {
        products.map((product) => (
          <div className='Card' key={product.id}>
            <img className='Card-image' src={product.images[0]} alt={product.title} />
            <strong className='Card-title'>{product.title}</strong>
            <div className='Card-rating'>
              <img src={Stars} alt="Stars" />
              <span>{product.rating}</span>
            </div>
            <b className='Card-price'>${product.price}</b>
          </div>
        ))
      }
    </div>
  );
}

export default Card;
