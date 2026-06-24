import express from 'express';
import { startDB } from "./src/config/database.js";
import { movie } from "./src/models/movie.model.js"; 
const app = express();

const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send(`Servidor de catálogo de películas corriendo en el puerto ${PORT}`);

});

startDB();

app.listen(PORT, () => {
    console.log(`servidor escuchado desde el puerto ${PORT}`);
});