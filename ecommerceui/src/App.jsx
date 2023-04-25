import React from 'react'
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
const App = () => {
  const isLoggedIn=true;
  return(
    <Router>
      <Routes >
        <Route exact path="/"  element={<Home  />}/>
      </Routes>
      <Routes >
        <Route exact path="/products/:category"  element={<ProductList  />}/>
      </Routes>
      <Routes >
        <Route exact path="/product/:id"  element={<Product  />}/>
      </Routes>
      <Routes >
        <Route exact path="/cart"  element={<Cart  />}/>
      </Routes>
      <Routes >
        <Route exact path="/login"/>
        {isLoggedIn ? <Navigate to="/" /> : <Login />}
        
      </Routes>
      <Routes >
        <Route exact path="register"  element={<Register  />}/>
      </Routes>
    </Router >

  );
};
export default App;
