import "dotenv/config";
import Express  from "express";
import Cors from "cors";
import {router} from "./routes/index"
import { sequelize } from './models/index';



const PORT = process.env.PORT || 3001;

const app = Express();
app.use(Cors());
app.use(Express.json());
app.use(router);


// Verificar conexión a la base de datos antes de arrancar el servidor
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión establecida exitosamente.');

    // Sincroniza todos los modelos con la base de datos
    return sequelize.sync();
  })
  .then(() => {
    console.log('Base de datos sincronizada correctamente.');

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  })
  .catch((error: any) => {
    console.error('Error al conectar a la base de datos:', error);
  });