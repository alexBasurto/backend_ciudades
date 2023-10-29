// Aquí está mezclado controlador de auth como tal y controlador de vistas de auth.
// Controlador para el inicio de sesión.
const login = (req, res) => {
    // Obtiene el nombre de usuario y la contraseña del cuerpo de la solicitud.
    const { username, password } = req.body;

    // Almacena el nombre de usuario en la sesión del usuario.
    req.session.user = username;

    // Redirige al usuario a la página de inicio después de iniciar sesión.
    res.redirect("/");
}

// Controlador para mostrar el formulario de inicio de sesión.
const loginForm = (req, res) => {
    // Renderiza una vista de formulario de inicio de sesión (posiblemente para que el usuario complete).
    res.render("auth/login");
}

// Controlador para cerrar sesión.
const logout = (req, res) => {
    // Destruye la sesión del usuario (cierra la sesión del usuario actual).
    req.session.destroy();

    // Redirige al usuario a la página de inicio de sesión.
    res.redirect("/login");
}

// Exporta los controladores relacionados con la autenticación.
export default {
    login,
    loginForm,
    logout
}
