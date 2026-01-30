import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

// ✅ Product Type

interface Product {
  id: number;
  title: string;
  price: number;
  size?: string;
  quantity?: number;
}


// ✅ API Response Type
interface ProductResponse {
     products: Product[];
}

// ✅ State Type
interface ProductState {
     products: Product[];
     loading: boolean;
     error: string | null;
}

// ✅ Initial State
const initialState: ProductState = {
     products: [],
     loading: false,
     error: null,
};

// ✅ Async Thunk
export const fetchProducts = createAsyncThunk<ProductResponse>(
     "products/fetch",
     async () => {
          const res = await fetch("https://dummyjson.com/products");
          return res.json();
     }
);

// ✅ Slice
const productSlice = createSlice({
     name: "products",
     initialState,
     reducers: {
          addProduct: (state, action: PayloadAction<Product>) => {
               state.products.push(action.payload);
          },
          removeProduct: (state, action: PayloadAction<number>) => {
               state.products = state.products.filter((p) => p.id !== action.payload);
          },
          updateProduct: (
               state,
               action: PayloadAction<{ id: number; size?: string; quantity?: number }>
          ) => {
               const product = state.products.find((p) => p.id === action.payload.id);

               if (product) {
                    if (action.payload.size) {
                         product.size = action.payload.size;
                    }
                    if (action.payload.quantity) {
                         product.quantity = action.payload.quantity;
                    }
               }
          },

     },

     extraReducers: (builder) => {
          builder
               .addCase(fetchProducts.pending, (state) => {
                    state.loading = true;
                    state.error = null;
               })
               .addCase(fetchProducts.fulfilled, (state, action) => {
                    state.loading = false;
                    state.products = action.payload.products; // dummyjson returns { products: [] }
               })
               .addCase(fetchProducts.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.error.message || "Failed to fetch data";
               });
     },
});

export const { addProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;
