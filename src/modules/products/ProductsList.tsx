import React, { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';
import { fetchProducts } from './services/productService';

const ProductsList: React.FC = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((data) => setProducts(data));
  }, []);

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard /*key={product.id}*/ product={product} />
      ))}
    </div>
  );
};

export default ProductsList;