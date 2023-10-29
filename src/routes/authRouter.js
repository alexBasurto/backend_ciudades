// Importa el módulo "Router" desde "express" para definir rutas.
import { Router } from "express";

// Importa el controlador "authController" que maneja operaciones relacionadas con la autenticación.
import authController from "../controllers/auth/authController.js";

// Crea una instancia de Router para definir rutas.
const router = Router();

// Ruta para mostrar un formulario de inicio de sesión.
router.get("/login", (req, res) => {
    authController.loginForm(req, res);
});

// Ruta para procesar el inicio de sesión (a través de una solicitud POST).
router.post("/login", (req, res) => {
    authController.login(req, res);
});

// Ruta para cerrar sesión.
router.get("/logout", authController.logout);

// Exporta el objeto de rutas para su uso en la aplicación.
export default router;