// Importa los módulos necesarios: express, dotenv (para cargar variables de entorno) y express-session.
import express from "express";
import dotenv from "dotenv";
import session from "express-session";

// Importa el módulo de enrutador definido en "router.js".
import router from "./routes/router.js";

// Carga las variables de entorno desde un archivo ".env".
dotenv.config();

// Crea una instancia de ExpressJS
const app = express();

// Configura el middleware "express-session" para gestionar sesiones de usuario.
app.use(session({
    secret: process.env.SESSION_SECRET, // Clave secreta para firmar las cookies de sesión.
    resave: false, // No vuelva a guardar la sesión en cada solicitud.
    saveUninitialized: false, // No guarde sesiones no inicializadas.
    cookie: {
        secure: false, // Configuración de seguridad de la cookie de sesión.
        maxAge: 1000 * 60 // Tiempo de vida máximo de la sesión en milisegundos (1 minuto).
    }
}));

// Configura el middleware para servir archivos estáticos desde el directorio "public".
app.use(express.static("public"));

// Configura el motor de vistas como "pug" y establece la ubicación de las vistas.
app.set('views', './src/views');
app.set('view engine', 'pug');

// Configura middleware para el manejo de datos JSON y URL codificada en las solicitudes.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta de inicio que renderiza una vista llamada "home".
app.get("/", (req, res) => {
    res.render("home");
});

// Utiliza el enrutador definido en "router.js" para manejar las rutas.
app.use("/", router);

// Inicia el servidor en el puerto 3006 y muestra un mensaje en la consola
app.listen(3000, () => console.log("Servidor web en marcha en puerto 3000."));