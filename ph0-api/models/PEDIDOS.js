import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const PEDIDOS = sequelize.define("pedidos", {
  id: {
    type: DataTypes.STRING,
    unique: true,
    require: true,
    primaryKey: true,
  },

  pedido: {
    type: DataTypes.STRING,
    require: true,
  },

  preciofinal: {
    type: DataTypes.STRING,
    require: true,
  },

  direccion: {
    type: DataTypes.STRING,
    require: true,
  },

  payment: {
    type: DataTypes.STRING,
    require: true,
  },

  nombre: {
    type: DataTypes.STRING,
    require: true,
  },

  numpedido: {
    type: DataTypes.STRING,
    require: true,
    unique: true,
  },
});

export default PedidoModel;
