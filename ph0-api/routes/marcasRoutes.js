import { Router } from "express";
import getAllBrand from "../helpers/getAllBrand.js";
import MARCAS from "../models/MARCAS.js";

const marcasRoutes = Router();


marcasRoutes.get('/', async( req,res)=>{
   const {category} = req.query;
 try {
    const brand = await getAllBrand();
    const data = await brand.filter(b => b.categorias.includes(category));
    if (!data.length) return res.status(404).json("no se encontro :(");
    return res.status(200).json(data)
 } catch (error) {
    
 }
})
marcasRoutes.get('/:nombre', async( req,res)=>{
 
})


export default marcasRoutes