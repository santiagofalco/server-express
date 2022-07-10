import express from 'express';
import Contenedor from './contenedor/contenedor.js';

const app = express()

const PORT = 8080

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})

const products = new Contenedor('../products.json')


app.get("/productos", async (req, res) => {
    let productos = await products.getAll()
    console.log(productos)
    res.send(productos)
});

app.get("/productoRandom", async (req, res) => {
    let productos = await products.getAll()
    let random = productos[Math.floor(Math.random() * productos.length)]
    res.send(random)
});



app.get("/", (req, res) => {
    res.send("anda");
});
