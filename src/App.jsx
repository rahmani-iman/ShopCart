import React from 'react';
import { Provider } from 'react-redux';
import { Route, Routes, Navigate, useParams } from 'react-router-dom';

//Redux Store
import store from './redux/store';

//Components
import Navbar from './components/shared/Navbar';
import Products from './components/Products';
import ProductsDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Footer from './components/shared/Footer';

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/products/:id" element={<ProductsDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Navigate to="/products"/>} />
      </Routes>
      <Footer />
    </Provider>
  );
};

export default App;