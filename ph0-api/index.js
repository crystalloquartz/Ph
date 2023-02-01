console.clear()

import sequelize from "./config/db.js";
import dotenv from "dotenv";
import httpServer from "./config/http.js";
import Productos from "./testData/Productos.js";


dotenv.config({ path: "./.env" });

async function bootstrap() {
  await sequelize.sync({ force: true });
  await Productos();
  httpServer.listen(process.env.PORT, () => {
    console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
  });
}

bootstrap();