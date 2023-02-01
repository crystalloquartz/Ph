import CATEGORIAS from "../models/CATEGORIAS.js";
import PRODUCTOS from "../models/PRODUCTOS.js";
import MARCAS from "../models/MARCAS.js";
import IMAGENES from "../models/IMAGENES.js";

export default async function (){
    const productos = await PRODUCTOS.findAll({
        include: [
          {
            model: CATEGORIAS,
            attributes: ["nombre"],
            through: {
              attributes: [],
            },
          },
          {
            model: MARCAS,
            attributes: ["nombre"],
            through: {
              attributes: [],
            },
          },
    
        ],
      });
      const data = await Promise.all(productos.map(async (e) => {
        e = JSON.parse(JSON.stringify(e));
        e.categorias = e.categorias.map((e) => e.nombre).join();
        e.Marcas = e.Marcas.map((e) => e.nombre).join();
        e.imagen = await IMAGENES.findOne({where:{productoId:e.id}}) 
        return e;
      }).sort((a, b) => b.population - a.population))
 



      return data;
}