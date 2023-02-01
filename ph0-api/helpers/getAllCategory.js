import CATEGORIAS from "../models/CATEGORIAS.js";
import MARCAS from "../models/MARCAS.js";


//FiltroProducto.sort((a, b) => {
//   if (a.titulo.toLowerCase() > b.titulo.toLowerCase()) {
//     return 1;
//   }
//   if (b.titulo.toLowerCase() > a.titulo.toLowerCase()) {
//     return -1;
//   }
//   return 0;
// })

export default async function getAllCategory(){
    const categoria = await CATEGORIAS.findAll({
        include: [
          {
            model: MARCAS,
            attributes: ["nombre"],
            through: {
              attributes: [],
            },
          },
        ],
      });
      const data = await categoria.map((e) => {
        e = JSON.parse(JSON.stringify(e));
        e.Marcas = e.Marcas.map((e) => e.nombre).join();
        return e;
      });

    
      
      return data;
}