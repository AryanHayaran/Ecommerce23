import axios from "axios";
import React, { useEffect, useState } from "react";
import { Routes ,Route} from "react-router-dom";
import Home from "./component/Home"
import Detail from "./component/Detail";
import Cart from "./component/Cart";
import Wishlist from "./component/Wishlist";
import "./App.css"
import Header from "./component/Header";

const App = () => {

  return (
    <div>
      {/* <div className="fixed z-[100] ">
        <Header />
      </div> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </div>
  );
};

export default App;
