import React from 'react';
import { Provider } from 'react-redux';

//Redux Store
import store from './redux/store';

//Components
import Navbar from './components/shared/Navbar';
import Banner from './components/Banner';
import Products from './components/Products';

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <Banner />
      <Products />
    </Provider>
  );
};

export default App;