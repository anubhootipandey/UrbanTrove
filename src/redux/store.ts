import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import wishlistReducer from "./wishlistSlice";

const loadState = () => {
  try {
    const data = localStorage.getItem("appState");
    const parsed = data ? JSON.parse(data) : {};

    return {
      cart: {
        items: [],
        total: 0,
        ...parsed.cart,
      },
      wishlist: {
        items: [],
        ...parsed.wishlist,
      },
    };
  } catch {
    return undefined;
  }
};


const saveState = (state: any) => {
  try {
    localStorage.setItem("appState", JSON.stringify(state));
  } catch {}
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  saveState({
    cart: store.getState().cart,
    wishlist: store.getState().wishlist,
  });
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
