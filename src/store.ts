import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice/product"; 
import cartReducer from "./slice/cart"
export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer, // ✅ add cart reducer

  },
});

// Infer the `RootState` and `AppDispatch` types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
