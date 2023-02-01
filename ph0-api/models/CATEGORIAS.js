import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";


const CATEGORIAS = sequelize.define(
    "categorias", {

        id:{
            type: DataTypes.INTEGER,
            unique:true,
            require:true,
            primaryKey: true,
            autoIncrement: true,
        },

        nombre: {
            type: DataTypes.STRING,
            require:true,
        }

    });

export default CATEGORIAS;