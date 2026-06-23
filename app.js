import express from 'express';

const app = express();

const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send(`Servidor de catálogo de películas corriendo en el puerto ${PORT}`);

});

app.listen(PORT, () => {
    console.log(`servidor escuchado desde el puerto ${PORT}`);
});