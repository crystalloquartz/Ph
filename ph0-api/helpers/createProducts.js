import CATEGORIAS from "../models/CATEGORIAS.js";
import IMAGENES from "../models/IMAGENES.js";
import MARCAS from "../models/MARCAS.js";
import PRODUCTOS from "../models/PRODUCTOS.js";

export default async function ( nombre, precio, categorias, marcas, stock, img, detalle){
   const newProduct = await PRODUCTOS.create({ titulo:nombre, precio,stock, detalle});



   const categories = await Promise.all(categorias.map(async c =>{
       const category = await CATEGORIAS.findOne({where:{nombre:c}});
       await newProduct.addCategoria(category)
       return category;
   }))
//    const images = await Promise.all(categorias.map(async c =>{
//        const category = await CATEGORIAS.findOne({where:{nombre:c}});
//        await newProduct.addCategoria(category)
//        return category;
//    }))
   const image = await IMAGENES.create({id:img.public_id, URL:img.url, productoId: newProduct.id})

   const brands = await Promise.all(marcas.map(async c =>{
       const brand = await MARCAS.findOne({where:{nombre:c}});
       await newProduct.addMarca(brand)
       return brand;
   }))

   for (var i = 0; i < categories.length; i++) {
    for (var j = 0; j < brands.length; j++) {
        await brands[j].addCategoria(categories[i])
    }
   }

      return newProduct;
}