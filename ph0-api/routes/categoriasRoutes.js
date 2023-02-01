import { Router } from "express";
import getAllCategory from "../helpers/getAllCategory.js";

const categoriasRoutes = Router();

categoriasRoutes.get("/", async (req, res) => {
  const { Marca } = req.query;
  try {
    const categorias = await getAllCategory();
    const data = await categorias.filter((c) => c.Marcas.includes(Marca));
    console.log(data);
   // if (!data.length) return res.status(404).json("No se encontró categoría :(");
    return res.status(200).json(data);
  } catch (error) {}
});

export default categoriasRoutes;
