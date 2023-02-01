import { Router } from "express";
import createProducts from "../helpers/createProducts.js";
import getAllProductsDB from "../helpers/getAllProductsDB.js";
import CATEGORIAS from "../models/CATEGORIAS.js";
import MARCAS from "../models/MARCAS.js";
import PRODUCTOS from "../models/PRODUCTOS.js";
import cloudinary from "../helpers/cloudinary.js";
import IMAGENES from "../models/IMAGENES.js";

const productsRoutes = Router();

productsRoutes.get("/", async (req, res) => {
  try {
    const productos = await getAllProductsDB();
    if (!productos) return res.status(404).json("no se encontro :(");
    return res.status(200).json(productos);
  } catch (error) {
    return res.status(500).json(error.menssage);
  }
});

productsRoutes.get("/categoria/:categoria", async (req, res) => {
  const { categoria } = req.params;
  const { Marca, SubCategoria } = req.query;
  try {
    const productos = await getAllProductsDB();
    const data = await productos.filter(
      (p) =>
        p.categorias.includes(categoria.toUpperCase() === "ALL" ? "" : categoria.toUpperCase() ) &&
        p.Marcas.includes(Marca? Marca : '')
    );
    if (!data.length) return res.status(404).json("no se encontro :(");
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error.menssage);
  }
});
productsRoutes.get("/marca/:marca", async (req, res) => {
  const { marca } = req.params;
  const { categoria } = req.query;

  try {
    const productos = await getAllProductsDB();
    const data = productos.filter((p) => 
    p.categorias.includes(marca.toUpperCase() === "ALL" ? "" : marca ) &&
    p.Marcas.includes(categoria? categoria : '')
    );
    if (!data.length) return res.status(404).json("no se encontro :(");
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error.message);
  }
});
productsRoutes.get("/filter?", async (req, res) => {
  const { marca } = req.params;

  try {
    const productos = await getAllProductsDB();
    const data = productos.filter((p) => p.Marcas.includes(marca));
    if (!data.length) return res.status(404).json("no se encontro :(");
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error.message);
  }
});
//---------------------------------------------------------------------------------------------------------------------------------//

productsRoutes.get("/detalle/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await PRODUCTOS.findOne({
      where: {
        id,
      },
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
    if (!product) return res.status(404).json("no se encontró producto por id");
    const data = JSON.parse(JSON.stringify(product));
   
    data.categorias = await data.categorias.map((e) => e.nombre);
    data.Marcas = await data.Marcas.map((e) => e.nombre);
    data.imagen = await IMAGENES.findOne({where:{productoId:data.id}}) 
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error.message);
  }
});
//modelo de pedido(post), sacaria la info del body y va a la base de datos.
//verificar los datos que esten bien;
productsRoutes.post("/", async (req, res) => {
  const { titulo, precio, categorias, Marcas, stock, imagen, detalle } = req.body;
  if (
    !titulo ||
    precio < 0 ||
    !categorias.length ||
    !Marcas.length ||
    stock < 0 ||
    !imagen
  )
    return res.status(400).json({ msg: "completa bien el formulario capo" });

    const uploadResponse = await cloudinary.uploader.upload(imagen, {
      upload_preset: 'Smonkey',
  }).then(e => e).catch(e => console.log(e));

  try {
    const data = await createProducts(
      titulo,
      precio,
      categorias,
      Marcas,
      stock,
      uploadResponse,
      detalle
    );
    return res.status(201).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({msg: error.message});
  }
});
productsRoutes.put("/", async (req, res) => {
  const { titulo, precio, categorias, Marcas, stock, imagen, detalle, id } = req.body;

  const product = await PRODUCTOS.findOne({where:{id}})
  if(!product) return res.status(404).json({msg:'no capo'})
  if (
    !titulo ||
    precio < 1 ||
    !categorias.length ||
    !Marcas.length ||
    stock < 1 ||
    !imagen
  )
    return res.status(400).json({ msg: "completa bien el formulario capo" });
  try {
      product.titulo = titulo;
      product.precio = precio;
      product.stock = stock
      if(product.imagen !== imagen.URL){
        const uploadResponse = await cloudinary.uploader.upload(imagen, {
          upload_preset: 'Smonkey',
      }).then(e => e).catch(e => {
        console.log(e);
      });
      await IMAGENES.create({id:img.public_id, URL:img.url, productoId: product.id})
      }
      product.detalle = detalle
      const categories = await Promise.all(
        await categorias.map( async c =>{
          const category = await CATEGORIAS.findOne({where:{
            nombre: c
          }})
          return category.id
        })
      )
      const brands = await Promise.all(
        await Marcas.map( async c =>{
          const brand = await MARCAS.findOne({where:{
            nombre: c
          }})
          return brand.id
        })
      )

      await product.setMarcas(brands)
      await product.setCategorias(categories)
    
      await product.save();
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({msg: error.message});
  }
});

productsRoutes.delete('/:id',async (req, res)=>{
  const { id } = req.params;

  const product = await PRODUCTOS.findOne({where:{id}, include:IMAGENES});

  await product.imagenes.forEach(async e => {
    await cloudinary.uploader.destroy(e.id);
    await e.destroy()
  });
  await product.destroy()
  return res.status(200).json(id)
})



productsRoutes.get('/img',async (req, res)=>{
  const date = await IMAGENES.findAll()
  return res.status(200).json(date)
})

export default productsRoutes;
