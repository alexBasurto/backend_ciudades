import citiesController from "./citiesController.js";

// Fn para obtener y mostrar todas las ciudades
const getAll = (req, res) => {
    const [error, cities] = citiesController.getAll();
    // Renderiza una vista llamada cities/list con datos de error ó ciudades
    res.render("cities/list", { error, cities });
}

// Fn para obtener y mostrar una ciudad por su ID
const getById = (req, res) => {
    const id = req.params.id;
    const [error, city] = citiesController.getById(id);
    // Renderiza una vista llamada cities/show con datos de error o una ciudad
    res.render("cities/show", { error, city });
}

// Fn para mostrar un formulario de creación de ciudad
const createForm = (req, res) => {
    const error = req.query.error;
    // Renderiza una vista llamada cities/new con datos de error (si los hay)
    res.render("cities/new", { error });
}

// Fn para cerar una nueva ciudad
const create = (req, res) => {
    const { nameCity, population } = req.body;
    const [error, city] = citiesController.create(city, population);
    if (error) {
        // Redirige a la página de creación con un mensaje de error codificado en la URL.
        const uriError = encodeURIComponent(error);
        return res.redirect(`/cities/new?error=${uriError}`);
    }
    // Redirige a la página de lista de ciudades después de la creación exitosa.
    res.redirect("/cities")
}

// Fn para mostrar un formulario de actualización de ciudad
const updateForm = (req, res) => {
    const errorMessage = req.query.error;
    const id = req.params.id;
    const [error, city] = citiesController.getById(id);
    if (error) {
        // Si se produce un error al obtener la ciudad, redirige a la página de la lista de ciudades
        res.redirect("cities");
    }
    // Renderiza una vista llamada cities/edit con los datos de error o de la ciudad
    res.render("cities/edit", { error: errorMessage, city });
}

// Fn para actualizar una ciudad existente
const update = (req, res) => {
    const id = req.params.id;
    const {nameCity, population } = req.body;
    const [error, city] = citiesController.update(id, nameCity, population);
    if (error) {
        // Redirige a la página de edición con un mensaje de error codificado en la URL.
        const uriError = encodeURIComponent(error);
        return res.redirect(`/cities/${id}/edit?error=${uriError}}`);
    }
    // Redirige a la página de visualización de la aceituna actualizada después de la edición exitosa.
    res.redirect(`/cities/${id}`);
}

// Fn para eliminar una ciudad por su ID
const remove = (req, res) => {
    const id = req.params.id;
    const [error, city] = citiesController.remove(id);
    // Redirige a la página de la lista de ciudades después de la eliminación exitosa
    res.redirect("/cities");
}

// Exporta las funciones getAll, getById, createForm, create, updateForm, update y remove.
export default {
    getAll, getById, createForm, create, updateForm, update, remove
}