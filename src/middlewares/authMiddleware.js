// Middleware de autenticación que verifica si un usuario ha iniciado sesión.
const isAuthenticated = (req, res, next) => {
    if (req.session.user) {
        // Si existe una sesión de usuario, se considera autenticado.
        console.log("session ", req.session); // Muestra información sobre la sesión en la consola.
        console.log(req.session.cookie.maxAge); // Muestra la duración máxima de la sesión en la consola.
        next(); // Llama a la siguiente función en la cadena de middleware.
    } else {
        // Si no existe una sesión de usuario, se redirige al usuario a la página de inicio de sesión.
        res.redirect("/login");
    }
}

// Exporta el middleware de autenticación.
export default isAuthenticated;