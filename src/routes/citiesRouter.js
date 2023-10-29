// Importa el módulo "Router" desde "express" para definir rutas.
import { Router } from "express";

// Importa el controlador "citiesViewController" que maneja las operaciones relacionadas con ciudades.
import citiesViewController from "../controllers/cities/citiesViewController.js";

// Importa el middleware "isAuthenticated" para verificar si un usuario ha iniciado sesión.
import isAuthenticated from "../middlewares/authMiddleware.js";

// Crea una instancia de Router para definir rutas.
const router = Router();

// Ruta principal que muestra todas las ciudades. Utiliza el middleware "isAuthenticated" para verificar la autenticación.
router.get("/", isAuthenticated, (req, res) => {
    citiesViewController.getAll(req, res);
});

// Ruta para mostrar una ciudad específica por su ID.
router.get("/:id", (req, res) => {
    citiesViewController.getById(req, res);
});

// Ruta para mostrar un formulario de creación de ciudad.
router.get("/new", citiesViewController.createForm);

// Ruta para procesar la creación de una nueva ciudad (a través de una solicitud POST).
router.post("/", (req, res) => {
    citiesViewController.create(req, res);
});

// Ruta para mostrar un formulario de actualización de una ciudad.
router.get("/:id/edit", citiesViewController.updateForm);

// Ruta para procesar la actualización de una aceituna (a través de una solicitud PUT).
router.put("/:id", (req, res) => {
    citiesViewController.update(req, res);
});

// Ruta para eliminar una aceituna por su ID (a través de una solicitud DELETE).
router.delete("/:id/delete", (req, res) => {
    citiesViewController.remove(req, res);
});

// Exporta el objeto de rutas para su uso en la aplicación.
export default router;