import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import CATEGORIAS from "./CATEGORIAS.js";
import MARCAS from "./MARCAS.js";

const PRODUCTOS = sequelize.define(
  "productos",
  {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      autoIncrement:true,
      primaryKey: true,
    },
  
    titulo: {
      type: DataTypes.STRING,
    },

    precio: {
      type: DataTypes.STRING,
      //   require: true,
    },

    detalle: {
      type: DataTypes.TEXT,
      //   require: true,
    },

    // imagen: {
    //   type: DataTypes.TEXT,
    //   //   require: true,
    // },

    stock: {
      type: DataTypes.INTEGER,
      //   require: true,
    },
    population: {
      type: DataTypes.INTEGER,
      //   require: true,
    },
  },
  {
    timestamp: false,
  }
);

// Normalizar base de datos
PRODUCTOS.belongsToMany(CATEGORIAS, {
  through: "Categoria-Producto",
  timestamp: false,
});
CATEGORIAS.belongsToMany(PRODUCTOS, {
  through: "Producto-Categoria",
  timestamp: false,
});

PRODUCTOS.belongsToMany(MARCAS, {
  through: "MARCAS-Producto",
  timestamp: false,
});
MARCAS.belongsToMany(PRODUCTOS, {
  through: "Producto-MARCAS",
  timestamp: false,
});

export default PRODUCTOS;
