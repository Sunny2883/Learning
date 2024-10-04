import React from 'react';
import ProductItem from './ProductItem';
import '../styles/ProductList.css';
const products = [
  { id: 1, name: 'Product A', price: 10 },
  { id: 2, name: 'Product B', price: 15 },
  { id: 3, name: 'Product C', price: 20 },
];

function ProductList({ addToCart }) {
  return (
    <div>
      <h2>Our Products</h2>
      <div>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
