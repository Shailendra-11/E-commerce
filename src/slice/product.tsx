import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type { ProductState } from "../interface/interface";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  stock: number;
  brand: string;
  thumbnail: string;
  images: string[];
}

const initialState: ProductState = {
     product: [],
     category: [],
     details : null,
     loading: false,
     error: null,
}





export const fetchProducts = createAsyncThunk(
     "products/fetchProducts",
     async (params: { limit: number, skip: number }, { rejectWithValue }) => {
          try {
               const { limit, skip } = params;
               const response = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
               return response.data;
          } catch (error: any) {
               return rejectWithValue(error.message);
          }
     }
);


export const fetchProductDetails = createAsyncThunk(
     "productDetails/fetchProductDetails",
     async (params: { Id: number }, { rejectWithValue }) => {
          const { Id } = params;
          try {
               const response = await axios.get(`https://dummyjson.com/products/${Id}`);
               return response.data
          } catch (error: any) {
               return rejectWithValue(error.message);
          }
     }
)


export const fetchCategory = createAsyncThunk(
     "category/fetchCategory",
     async (_, { rejectWithValue }) => {
          try {
               const response = await axios.get("https://dummyjson.com/products/categories")
               return response.data;

          } catch (error: any) {
               return rejectWithValue(error.message);

          }
     }
)


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
               })

               //  category
               .addCase(fetchCategory.pending, (state) => {
                    state.loading = true;
                    state.error = null;
               })
               .addCase(fetchCategory.fulfilled, (state, action) => {
                    state.loading = false;
                    state.category = action.payload;
               })
               .addCase(fetchCategory.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.payload as string;
               })

               // details

               .addCase(fetchProductDetails.pending, (state) => {
                    state.loading = true;
                    state.error = null;
                })
               .addCase(fetchProductDetails.fulfilled, (state, action) => {
                    state.loading = false;
                    state.details = action.payload;
               })
               .addCase(fetchProductDetails.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.payload as string;
               });
     },
});






export default productSlice.reducer;
