import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type { ProductState } from "../interface/interface";



const initialState: ProductState = {
     product :[],
     loading: false,
     error: null,

};



export const fetchProducts = createAsyncThunk(
     "products/fetchProducts",
     async (_, { rejectWithValue }) => {
          try {
               const response = await axios.get("https://dummyjson.com/products");
               return response.data; // 👈 important
          } catch (error: any) {
               return rejectWithValue(error.message);
          }
     }
);


export const productSlice = createSlice({
     name: "product",
     initialState,
     reducers: {
     },
     extraReducers: (builder) => {
          builder
               .addCase(fetchProducts.pending, (state) => {
                    state.loading = true;
                    state.error = null;
               })
               .addCase(fetchProducts.fulfilled, (state, action) => {
                    state.loading = false;
                    state.product = action.payload;
               })
               .addCase(fetchProducts.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.payload as string;
               });
     },
});






export default productSlice.reducer;
