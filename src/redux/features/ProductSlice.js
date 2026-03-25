  import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

 export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    // const res1 = await fetch("https://dummyjson.com/products");
    // const data1 = await res1.json();

    const res2 = await fetch("https://fakestoreapi.com/products");
    const data2 = await res2.json();

    // ✅ Combine both arrays
  return [
  // ...data1.products.map(p => ({ ...p, source: "dummy", uid: `dummy-${p.id}` })),
  ...data2.map(p => ({ ...p, source: "fake", uid: `fake-${p.id}` })),
];
  }
);

  const productSlice = createSlice({
    name: "product",
    initialState: {
      item: [],
      loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchProducts.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
          state.loading = false;
          state.item = action.payload;
        });
    },
  });

  export default productSlice.reducer;