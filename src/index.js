// Importa el módulo ExpressJS
import express from "express";

// Crea una instancia de ExpressJS
const app = express();

// Inicia el servidor en el puerto 3006 y muestra un mensaje en la consola
app.listen(3000, () => console.log("Servidor web en marcha en puerto 3000."));