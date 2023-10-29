# backend_ciudades
backend_ciudades


# Paso a paso
## Instalaciones

###### Inicializamos npm (esto creará package.json)
```bash
npm init
```
ó con el flag YES
```bash
npm init -y
```

###### Instalamos nodemon y express
Durante el desarrollo, por comodidad, ejecutaremos el código con Nodemon en vez de con NodeJS.
ExpressJS es el framework que usaremos en NodeJS.

⚠️ Importante instalarlo en la carpeta del proyecto (cuidado si estamos usando la terminal de Ubuntu y no la de VSCode).

```bash
npm install express nodemon
```

###### Modificamos el contenido de 'package.json'
Añadimos y/o modificamos lo siguiente:
```json
"type": "module",
  "scripts": {
    "start": "nodemon src/index.js"

```

Quedando así el contenido de **package.json**:

```json{
  "name": "backend_ciudades",
  "version": "1.0.0",
  "description": "backend_ciudades",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon src/index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2",
    "nodemon": "^3.0.1"
  }
}
```

Con este cambio en **package.json** logramos dos cosas:
- Nodemon: Durante el desarrollo el código se ejecutará con Nodemon.
- Type Module: podremos desarrollar separando el código en distintos archivos .js

###### Creamos src/index.js
- En la carpeta principal del proyecto creamos la carpeta */src*. En esta carpeta irá el archivo principal de JavaScript (index.js) y el resto de ficheros y carpetas con código JavaScript, de forma estructurada.
- Creamos index.js en */src*.

Ahora deberíamos poder poner en marcha nuestro proyecto, aunque no tenga ninguna línea de código:
```bash
npm start
```

Debemos tener en cuenta varias cosas:
- Estamos ejecutando con Nodemon: esto nos evitará tener que reiniciar Node cada vez que guardemos cambios en nuestro proyecto.
- Si queremos finalizar Nodemon: *Ctrl + C*.
- Tendremos que cambiar el fichero *package.json* en el momento en que subamos el proyecto a producción.

###### Configuramos un puerto de escucha en nuestro fichero principal (index.js)
Configuramos el puerto del proyecto backend:
- IMportamos el módulo ExpressJS
- Creamos una instancia de ExpressJS
- Configuramos el puerto de escucha

💡 al ser un backend, el mensaje se muestra en la consola de la terminal y no en la del navegador.

```js
// Importa el módulo ExpressJS
import express from "express";

// Crea una instancia de ExpressJS
const app = express();

// Inicia el servidor en el puerto 3006 y muestra un mensaje en la consola
app.listen(3000, () => console.log("Servidor web en marcha en puerto 3000."));
```

###### Creamos .gitignore y lo alimentamos
Creamos en la carpeta principal el archivo *.gitignore* y añadimos la siguiente línea:

```
node_modules
```