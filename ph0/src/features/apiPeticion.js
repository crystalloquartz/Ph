import axios from "./api.js";
import { setAllCategory, setAllMarcas, setAllProducts, setFilter } from "./productsSlice";

export async function getAllProducts(state, type) {
  try {
    const peticion = await axios.get("/productos");
    const data = peticion.data;
    if (type === "local") return state(data);
    // STATE DISPATCH
    state(setAllProducts(data));
  } catch (error) {}
}


export async function getAllCategory(state, type) {
  try {
    const peticion = await axios.get("/categorias?Marca=");
    const data = peticion.data;
    if (type === "local") return state(data);
    state(setAllCategory(data));
  } catch (error) {}
}
export async function getAllCategoryByBrand(state,brand,type) {
  try {
    const peticion = await axios.get("/categorias?Marca="+brand);
    const data = peticion.data;
    if (type === "local") return state(data);
    state(setAllCategory(data));
  } catch (error) {}
}
export async function getAllBrand(state, type) {
  try {
    const peticion = await axios.get("/marcas?category=");
    const data = peticion.data;
    if (type === "local") return state(data);
    state(setAllMarcas(data));
  } catch (error) {}
}

export async function getProductsByCategoryAndBrand(state, category, Marca='',type) {
  try {
    const res = await axios.get("/productos/categoria/" + category +'?Marca=' +Marca);
    if(type === 'local')return state(res.data);
    return(state(setFilter(res.data)))

  } catch (error) {}
}
export async function createProduct(body) {
  try {
    console.log(body);
    const res = await axios.post("/productos", body);
    window.alert('joya')

  } catch (error) {
    window.alert('asd')
  }
}
export async function editProduct(body) {
  try {
    console.log(body);
    const res = await axios.put("/productos", body);
    window.alert(res.data.msg)

  } catch (error) {
    window.alert('asd')
  }
}
export async function deleteProduct(body) {
  try {
    console.log(body);
    const res = await axios.delete(`/productos/${body}`);
    console.log(res);
    window.alert('joya')

  } catch (error) {
    window.alert('asd')
  }
}
export async function getBrandByCategory(state, category='') {
  try {
    if(category.toLowerCase()==="all") category = '';
    const res = await axios.get("/marcas?category="+category);
    state(res.data);
  } catch (error) {}
}

export async function getProductsById(state, id) {
  try {
    const res = await axios.get("/productos/detalle/" + id);
    state(res.data);
  } catch (error) {}
}
