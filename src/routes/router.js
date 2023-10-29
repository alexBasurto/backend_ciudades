// Importa el módulo "Router" desde "express" para definir rutas.
import { Router } from "express";

// Importa el módulo "citiesRouter" que contiene rutas relacionadas con ciudades.
import citiesRouter from "./citiesRouter.js";

// Importa el módulo "authRouter" que contiene rutas relacionadas con la autenticación de usuarios.
import authRouter from "./authRouter.js";

// Crea una instancia de Router para definir rutas.
const router = Router();

// Utiliza las rutas definidas en "citiesRouter" bajo el prefijo "/cities".
router.use("/cities", citiesRouter);

// Utiliza las rutas definidas en "authRouter" en la ruta raíz ("/").
router.use("/", authRouter);

// Exporta el objeto de rutas para su uso en la aplicación.
export default router;