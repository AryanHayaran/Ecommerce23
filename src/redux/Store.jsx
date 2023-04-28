import { WishlistReducer, cartReducer } from "./ActionReducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    carts: cartReducer,
    wishlists:WishlistReducer
  },
});

export default store;
