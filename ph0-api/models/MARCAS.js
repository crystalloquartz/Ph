import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import CATEGORIAS from "./CATEGORIAS.js";


const MARCAS = sequelize.define("Marcas", {
  id: {
    type: DataTypes.INTEGER,
    unique: true,
    autoIncrement:true,
    primaryKey: true,
  },

  nombre: {
    type: DataTypes.STRING,
    require: true,
  },
});

MARCAS.belongsToMany(CATEGORIAS, {
  through: "Categoria-Marca",
  timestamp: false,
});
CATEGORIAS.belongsToMany(MARCAS, {
  through: "Categoria-Marca",
  timestamp: false,
});


export default MARCAS;
