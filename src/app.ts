import "dotenv/config";
import Express  from "express";
import Cors from "cors";
const PORT = process.env.PORT || 3001;
console.log(process.env.PORT)

const app = Express();
app.use(Cors());

app.listen(PORT, () => console.log(`el servicio esta corriendo ${PORT}`));