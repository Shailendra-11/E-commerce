import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice/product"; 

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
