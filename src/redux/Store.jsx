import { ProductsReducer, WishlistReducer, cartReducer } from "./ActionReducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    carts: cartReducer,
    wishlists: WishlistReducer,
    productsData:ProductsReducer,
  },
});

export default store;
