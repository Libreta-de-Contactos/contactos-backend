import "dotenv/config";
import Express  from "express";
import Cors from "cors";
import {router} from "./routes/index"


const PORT = process.env.PORT || 3001;

const app = Express();
app.use(Cors());
app.use(router);


app.listen(PORT, () => console.log(`el servicio esta corriendo ${PORT}`));