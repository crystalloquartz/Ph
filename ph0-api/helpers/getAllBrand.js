import CATEGORIAS from "../models/CATEGORIAS.js";
import MARCAS from "../models/MARCAS.js";

export default async function (){
    const brand = await MARCAS.findAll({
        include: [
          {
            model: CATEGORIAS,
            attributes: ["nombre"],
            through: {
              attributes: [],
            },
          },
        ],
      });
      const data = await brand.map((e) => {
        e = JSON.parse(JSON.stringify(e));
        e.categorias = e.categorias.map((e) => e.nombre).join();
        return e;
      });


      return data;
}