import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Bienvenido a nuestra tienda</h1>
      <p>Explora nuestros productos hechos a mano.</p>
      <Link to="/products">Ver Productos</Link>
    </div>
  );
};

export default Home;