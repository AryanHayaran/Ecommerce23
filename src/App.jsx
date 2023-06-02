
// import React from "react";
// import { Routes ,Route} from "react-router-dom";
// import Home from "./component/Home"
// import Detail from "./component/Detail";
// import Cart from "./component/Cart";
// import Wishlist from "./component/Wishlist";
// import "./App.css"

// const App = () => {

//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/detail/:id" element={<Detail />} />
//         <Route path="/wishlist" element={<Wishlist />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;



import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Detail from "./component/Detail";
import Cart from "./component/Cart";
import Wishlist from "./component/Wishlist";
import "./App.css";
import Layout from "./Layout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
