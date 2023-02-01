import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import productsRoutes from '../routes/ProdRoutes.js';
import marcasRoutes from '../routes/marcasRoutes.js';
import categoriasRoutes from '../routes/categoriasRoutes.js';
import bodyParser from 'body-parser';

const App = express();

// Middlewares
App.use(morgan("dev"));
App.use(cors());
App.use(bodyParser.json({limit: "50mb"}));
App.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
// App.use(cookieParser());
App.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', '*');
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});



// Routes
App.use('/productos', productsRoutes)
App.use('/marcas', marcasRoutes)
App.use('/categorias', categoriasRoutes)

// Error catching endware.
App.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  console.log(req); 

  const status = err.status || 500;
  const message = err.message || err;
  console.log(err);
  res.status(status).send(message);
});



export default App;