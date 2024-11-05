import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../modules/auth/AuthContext';
// import ProtectedRoute from '../modules/auth/ProtectedRoute';

const Home = lazy(() => import('../pages/Home'));
const ProductsList = lazy(() => import('../modules/products/ProductsList'));
// const Profile = lazy(() => import('../modules/users/Profile'));

const AppRoutes: React.FC = () => (
  <AuthProvider>
    <Router>
      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsList />} />
          {/* <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} /> */}
        </Routes>
      </Suspense>
    </Router>
  </AuthProvider>
);

export default AppRoutes;