// Representación muy simplificada de un MODELO (hablando del patrón de diseño MODELO-VISTA-CONTROLADOR).
// Este array y el posterior bucle for emulan una base de datos.
const databaseCities = [
    "Nueva York",
    "París",
    "Londres",
    "Tokio",
    "Roma",
    "Sídney",
    "Los Ángeles",
    "Barcelona",
    "Río de Janeiro",
    "Ámsterdam",
    "Berlín",
    "Pekín",
    "Moscú",
    "San Francisco",
    "Dubái",
    "México, D.F.",
    "Singapur",
    "Estambul",
    "Bangkok",
    "Toronto",
    "Madrid",
    "San Petersburgo",
    "El Cairo",
    "Atenas",
    "Nueva Delhi",
    "Viena",
    "Praga",
    "Hong Kong",
    "Sao Paulo",
    "Chicago",
    "Budapest",
    "Seúl",
    "Sidney",
    "Kioto",
    "Buenos Aires",
    "Lima",
    "Santiago",
    "San Francisco",
    "Zúrich",
    "Venecia",
    "Copenhague",
    "Oslo",
    "Estocolmo",
    "Helsinki",
    "Varsovia",
    "Kiev",
    "Mumbai",
    "Pretoria",
    "Johannesburgo"
]

// Array vacío para almacenar las ciudades
let cities = [];

//V ariable para asignar IDs a las ciudades
let maxId = 1;

// Bucle for para cerar 5 objetos ciudad
for (let i = 0; i < 5; i++) {
    const newCity = {
        id: maxId, // Adinga ID único a la ciudad
        nameCity: databaseCities[i], // Selecciona una ciudad del array de la parte MODELO
        population: Math.floor(Math.random() * 10000000), // Damos una población aleatoria entre 0 y 10 millones
    };
    cities.push(newCity); // Agregamos cada nuevo objeto newCity al array cities
    maxId++; // Aumentamos en uno el id 'autonumérico'.
}

// CONTROLADOR (MVC)
// Función que devuelve todas las ciudades almacenadas en el array cities
const getAll = () => {
    return [null, cities]; // Devuelve un array con null (indicando éxito) y el array cities.
}

// Fn que busca una ciudad por su ID y la devuelve
const getById = (id) => {
    try {
        const city = cities.find(element => element.id == id); // Busca la city por su ID
        return [null, city]; // Devuelve un array con null (indicando éxito) y la ciudad encontrada
    } catch(e) {
        return [e.message, null]; // Si hay un error, devuelve un array el mensaje de error
    }
}

// Función para crear una nueva diudad especificando nombre y población
const create = (nameCity, population) => {
    if (nameCity === undefined || population === undefined) {
        const error = "Nombre ciudad y población deben ser indicados.";
        return [error, null]; // Si falta algún parámetro, devuelve un error.
    }
    const city = {
        id: maxId++, // Asignamos ID único y incrementamos posteriormente el valor de maxId
        nameCity: nameCity, // Asingamos nombre ciudad
        population: population // Asignamos población
    };
    cities.push(city); // Agregamos el nuevo objeto ciudad al array cities
    return [null, city]; // Devolvemos null indicando éxito en la operación y el objeto ciudad nuevo
}

// Fn para actualizar una ciudad existente, la localizamos por su ID y le asignamos nuevo nombre y nueva población
const update = (id, nameCity, population) => {
    if (id === undefined) {
        const error = "Tienes que indicar un ID de ciudad válido.";
        return [error, null]; // Si no se proporciona un ID válido, devuelve un error.
    }
    if (nameCity === undefined || population === undefined) {
        const error = "Nombre ciudad y población deben ser indicados.";
        return [error, null]; // Si no se indican los valores nombre ciudad y población, devuelve error.
    }
    try {
        const city = cities.find((element) => element.id == id); // Busca la ciudad por su ID
        city.nameCity = city; // Actualiza su nombre
        city.population = population; // Actualiza su población
        return [null, city]; // Devuelve un array con null (éxito) y los datos de la ciudad actualizada
    } catch(e) {
        return [e.message, null]; // Si hay un error, devuelve un array con el mensaje de error.
    }
}

// Fn para eliminar una ciudad por su ID.
const remove = (id) => {
    try {
        const city = cities.find((element) => element.id == id); // Busca la ciudad por ID
        cities = cities.filter((element) => element.id != id); // Elimina la ciudad del array, reasignandolo
        if (!city) {
            const error = "No se ha encontrado ningún elemento con ese ID.";
            return [error, null]; // Si no se encuentra la ciudad con ese ID, devuelve un error.
        }
        return [null, city]; // Devuelve null indicando éxito, y el nombre de la ciudad borrada.
    } catch(e) {
        return [e.message, null]; // Si hay un error, devuelve el mensaje de error correspondiente.
    }
}

// Exporta las funciones como un objeto por defecto para facilitar la importación.
// Tendremos que importarlo así: import citiesController from "./citiesController.js";
// Y llamar así a cada función: citiesController.getAll(), ...
export default {
    getAll,
    getById,
    create,
    update,
    remove,
};