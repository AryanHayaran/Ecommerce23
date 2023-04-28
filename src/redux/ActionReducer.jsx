import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const cartsSlice = createSlice({
  name: "cart",
  initialState: { itemCart: [], priceCart: 0, totalItemCart: 0, itemById: [] },
  reducers: {
    addCart: (state, { payload }) => {
      state.priceCart = state.priceCart + Number(payload.price);
      const { id } = payload;
      const doesItemExist = state.itemById.find((item) => item.id === id);
      if (doesItemExist) {
        state.itemById = state.itemById.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
      } else {
        state.itemById.push({
          ...payload,
          quantity: 1,
        });

      }
    },
    delCart: (state, { payload }) => {
      state.itemById = state.itemById.map((item) => {
        if (item.id === payload.id) {
          if (item.quantity > 1)
            return {
              ...item,
              quantity: item.quantity - 1,
            };
        } else {
          return item;
        }
      });
      state.priceCart = state.priceCart - Number(payload.price);
    },
    deleteCart: (state, { payload }) => {
      state.itemById = state.itemById.filter((item) => item.id !== payload.id);
    },
  },
});

export const getALLCart = (state) => state.carts.itemById;
export const getPriceCart = (state) => state.carts.priceCart;
export const getTotalCart = (state) => state.carts.getALLCart;

export const { addCart, delCart, deleteCart } = cartsSlice.actions;
export const cartReducer = cartsSlice.reducer;

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: { itemWishlist: [], totalItemWishlist: 0 },
  reducers: {
    addWishlist: (state, { payload }) => {
      state.totalItemWishlist = state.totalItemWishlist + 1;
      const isExist = state.itemWishlist.find((item) => item.id === payload.id);
      if (!isExist) {
        state.itemWishlist.push(payload)
      }
    },
    delWishlist: (state, { payload }) => {
      state.itemWishlist = state.itemWishlist.filter(
        (item) => item.id !== payload
      );
      state.totalItemWishlist = state.totalItemWishlist - 1;
    },
  },
});

export const getALLWishlist = (state) => state.wishlists.itemWishlist;
export const getTotalWishlist = (state) => state.wishlists.totalItemWishlist;

export const { addWishlist, delWishlist } = wishlistSlice.actions;
export const WishlistReducer = wishlistSlice.reducer;
