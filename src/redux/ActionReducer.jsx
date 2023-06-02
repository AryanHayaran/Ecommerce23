import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const cartsSlice = createSlice({
  name: "cart",
  initialState: { itemCart: [], priceCart: 0, totalItemCart: 0, itemById: [] },
  reducers: {
    addCart: (state, { payload }) => {
      // state.priceCart = state.priceCart + Number(payload.price);
      const isPresent = state.itemById.find((item) => item.id === payload.id)
      if (isPresent) {
          state.itemById = state.itemById.map((item) => {
            if (item.id === payload.id) {
        state.priceCart =
          state.priceCart +
          Number(payload.price * 70 * payload.quantity) -
          Number(item.price * 70 * item.quantity);

              return payload;
            } else {
              return item;
            }
          });
      }
      else {
        state.priceCart =
          state.priceCart + Number(payload.price * payload.quantity * 70);
        state.itemById.push(payload)
      }
    
    },

    delCart: (state, { payload }) => {
        state.priceCart = state.priceCart - Number(payload.price * 70);

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


const productSlice = createSlice({
  name: "productsData",
  initialState: { products: "",loading:true },
  reducers: {
    setProductsData: (state, { payload }) => {
      state.products = payload;
      state.loading=false
    },
    setLoading: (state, { payload }) => {
      state.loading= true;
    }
  }
})

export const getProductsData = (state) => state.productsData.products;
export const getLoading = (state) => state.productsData.loading;
export const { setProductsData,setLoading } = productSlice.actions;
export const ProductsReducer = productSlice.reducer;