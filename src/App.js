import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";

import Wishlist from "./components/Wishlist";
import { store } from "./redux/store/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
