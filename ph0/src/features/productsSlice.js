import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Marcas: [],
  Productos: [],
  Categorias: [],
  FiltroProducto: [],
};

const cartSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setAllProducts(state, { payload }) {
      state.Productos = payload;
      state.FiltroProducto = payload;
    },

    setAllMarcas(state, { payload }) {
      state.Marcas = payload;
    },

    setAllCategory(state, { payload }) {
      state.Categorias = payload;
    },
    setFilter(state, { payload }) {
      state.FiltroProducto = payload;
    },
    sortByPrice({ FiltroProducto }, { payload }) {
      FiltroProducto =
        payload === "max"
          ? FiltroProducto.sort((a, b) => b.precio - a.precio)
          : FiltroProducto.sort((a, b) => a.precio - b.precio);
    },
    sortByABC({ FiltroProducto }, { payload }) {
      FiltroProducto =
        payload === "A-Z"
          ? FiltroProducto.sort((a, b) => {
              if (a.titulo.toLowerCase() > b.titulo.toLowerCase()) {
                return 1;
              }
              if (b.titulo.toLowerCase() > a.titulo.toLowerCase()) {
                return -1;
              }
              return 0;
            })
          : FiltroProducto.sort(function (a, b) {
              if (a.titulo.toLowerCase() > b.titulo.toLowerCase()) {
                return -1;
              }
              if (b.titulo.toLowerCase() > a.titulo.toLowerCase()) {
                return 1;
              }
              return 0;
            });
    },
  },
});
export const {
  setAllCategory,
  setAllProducts,
  setAllMarcas,
  setFilter,
  sortByPrice,
  sortByABC,
} = cartSlice.actions;
export default cartSlice.reducer;
