import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../features/cartAppSlice.js";
import productsSlice from "../features/productsSlice.js";

export const store = configureStore({
  reducer: { cart: cartReducer, products: productsSlice },
});
