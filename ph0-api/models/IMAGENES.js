import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import PRODUCTOS from "./PRODUCTOS.js";


const IMAGENES = sequelize.define("imagenes", {
  id: {
    type: DataTypes.STRING,
    unique: true,
    primaryKey: true,
  },

  URL: {
    type: DataTypes.TEXT,
    require: true,
  },
});

IMAGENES.belongsTo(PRODUCTOS);
PRODUCTOS.hasMany(IMAGENES);


export default IMAGENES;
