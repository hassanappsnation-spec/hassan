import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch products from API safely
export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const res = await fetch("https://fakestoreapiserver.reactbd.org/api/products");
    const json = await res.json();

    // API direct array return kar sakti hai, ya data array inside object
    const productsArray = json.data || json; // agar json.data nahi hai to json use karo

    return productsArray.map((p) => ({
      ...p,
      uid: `product-${p._id}`, // unique React key
      slug: p.title?.toLowerCase().replace(/\s+/g, "-") || `${p._id}`, // URL slug,
      
    }));
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    items: [],
    loading: false,
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
        state.items = [];
      });
  },
});

export default productSlice.reducer;