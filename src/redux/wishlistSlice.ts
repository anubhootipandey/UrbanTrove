import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../data/products";

interface WishlistState {
  items: Product[];
}

const initialState: WishlistState = {
  items: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleWishlist: (state, action: PayloadAction<Product>) => {
      const exists = state.items.some((i) => i.id === action.payload.id);

      if (exists) {
        state.items = state.items.filter((i) => i.id !== action.payload.id);
      } else {
        state.items.push(action.payload);
      }
    },

    removeWishlist: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
  },
});

export const { toggleWishlist, removeWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
