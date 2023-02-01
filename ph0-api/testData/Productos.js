import CATEGORIAS from "../models/CATEGORIAS.js";
import PRODUCTOS from "../models/PRODUCTOS.js";
import MARCAS from "../models/MARCAS.js";
import ExcelAJSON from "./CrearTablas.js";
import IMAGENES from "../models/IMAGENES.js";

const Productos = async () => {
  const dataExcel = await ExcelAJSON();
  for (let i = 0; i < dataExcel.length; i++) {
    const p = dataExcel[i];

    const producto = await PRODUCTOS.create({
      titulo: p.Nombre,
      precio: p["Precio total"],
      population:0,
      detalle:'Agregar detalle',
      stock:'10'
    });
  
    const [category, boolean] = await CATEGORIAS.findOrCreate({
      where: {
        nombre: p.Categoria,
      },
    });
   
    await producto.addCategoria(category);

    const [marca, bool] = await MARCAS.findOrCreate({
      where: {
        nombre: p.Marca.toString(),
      },
    });
    await IMAGENES.create({URL : p.Imagenes, productoId : producto.id, id : i});
    await producto.addMarca(marca);
    await category.addMarca(marca)
  }
};

export default Productos;