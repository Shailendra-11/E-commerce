import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { carts, cartState, products, ProductState } from "../interface/interface";

const initialState: cartState = {
     cart: [],
}


export const cartSlice = createSlice({
     name: "cart",
     initialState,
     reducers: {
          addToCart: (state, action: PayloadAction<carts>) => {
               const existingItem = state.cart.find(
                    (item) => item?.id === action.payload.id
               )
               if (existingItem) {
                    existingItem.quantity += 1;
               } else {
                    state.cart.push({
                         ...action.payload,
                         quantity: 1,
                    });
               }
          },

          removeFromCart: (state, action: PayloadAction<number>) => {
               state.cart = state.cart.filter(
                    (item) => item.id !== action.payload
               );
          },

          // ✅ Increase Quantity
          increaseQty: (state, action: PayloadAction<number>) => {
               const item = state.cart.find((i) => i.id === action.payload);
               if (item) item.quantity += 1;
          },

          // ✅ Decrease Quantity
          decreaseQty: (state, action: PayloadAction<number>) => {
               const item = state.cart.find((i) => i.id === action.payload);
               if (item && item.quantity > 1) {
                    item.quantity -= 1;
               }
          },

          // ✅ Clear Cart
          clearCart: (state) => {
               state.cart = [];
          },

     }

})


export const {
     addToCart,
     removeFromCart,
     increaseQty,
     decreaseQty,
     clearCart,
} = cartSlice.actions;

export default cartSlice.reducer