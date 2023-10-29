# BACKEND CIUDADES
Paso a paso del proyecto y explicación del código.

## Instalaciones

###### Inicializamos NPM

NPM es el sistema de gestión de paquetes por defecto para NodeJS.
Inicializamos NPM (esto creará package.json).

```bash
npm init
```
ó con el flag YES, para que nos confirme todas las opciones por defecto.
```bash
npm init -y
```
###### package.json y package-lock.json
- package.json es el fichero que contiene información sobre la aplicación, repositorio, licencias, y donde se especifican las **las dependencias de las librerias necesarias y las veriones mínimas** para poder ejecutar la aplicación.

- package-lock.json es el fichero que contiene las **versiones exactas**. En principio nunca tendremos que modificar su contenido.

###### Instalamos Nodemon y ExpressJS
Usamos NodeJS como entorno de ejecución.

Durante el desarrollo, por comodidad, ejecutaremos el código con Nodemon en vez de con NodeJS.
Nodemon es como un live-server. Si usasemos NodeJS en nuestro trabajo de desarrollo, tendríamos que reiniciarlo cada vez que queramos probar un cambio.

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
  }

```

Quedando así el contenido de **package.json**:

```json
{
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

💡 Al ser un backend, el mensaje se muestra en la consola de la terminal y no en la del navegador.

```js
// Importa el módulo ExpressJS
import express from "express";

// Crea una instancia de ExpressJS
const app = express();

// Inicia el servidor en el puerto 3006 y muestra un mensaje en la consola
app.listen(3000, () => console.log("Servidor web en marcha en puerto 3000."));
```
💡 En nuestro archivo index.js es altamente recomendable que la última parte del codigo sea el app.listen(), y la anteúltima parte el router (veremos más adelante en que consiste el router).

Podemos añadir el siguiente trozo de código para comprobar que funciona correctamente: debería mostrar el texto 'Hola Mundo' en el navegador al llamar a `localhost:3000`.

```js
// Respuesta a la llamada GET para que devuelva un texto de prueba.
app.get("/", (req, res) => {
    res.send("Hola Mundo");
});
```

###### Creamos .gitignore y lo alimentamos
Creamos en la carpeta principal el archivo *.gitignore* y añadimos la siguiente línea:

```
node_modules
```

En este fichero añadiríamos todos los archivos y carpetas que queramos que sean excluidos de los procesos de GIT.

###### Express-Session
`express-session` es un módulo middleware de Node.js que se utiliza con Express.js. Permite gestionar sesiones de usuario en aplicaciones web. Con `express-session`, puedes crear, almacenar y administrar sesiones de usuario de forma segura en tu aplicación Express. Esto es útil para mantener un estado y autenticar a los usuarios a lo largo de sus interacciones con la aplicación web.

Instalamos Express-Session:
```bash
npm install express-session
```

<!-- ###### Instalamos JWT (JSON web token)
Un JSON Web Token (JWT) es un formato para transmitir información segura entre partes. Consiste en tres partes: un encabezado con información del token, un cuerpo con datos relevantes y una firma para verificar su autenticidad. Los JWT se utilizan comúnmente para la autenticación y autorización en aplicaciones web y servicios API. Son autocontenidos y no requieren consultar bases de datos adicionales. La seguridad depende de mantener la clave secreta segura.

Instalamos JWT:
```bash
npm install jsonwebtoken
``` -->

###### Instalamos DOTENV
Dotenv es una biblioteca de Node.js que permite cargar variables de entorno desde un archivo .env en una aplicación, lo que facilita la gestión de configuraciones sensibles como contraseñas, claves de API y otros valores de entorno. Estas variables se pueden acceder en el código como variables regulares, lo que simplifica la configuración de una aplicación y la hace más segura.

Lo instalamos:
```bash
npm install dotenv
```

Creamos nuestro fichero de variables de entorno .env en la ruta raíz: lo usaremos para almacenar tanto JSON_SECRET como SESSION_SECRET:

```env
JSON_SECRET=hola mundo
SESSION_SECRET=loquetusientesesunasesion
```
💡 Este fichero .env no está en el repositorio de GitHub. Habrá que crearlo.

Configuramos index.js para que tenga en cuenta las variables de entorno:

```js
//...
import dotenv from "dotenv";
// Carga las variables de entorno desde un archivo ".env".
dotenv.config();
```

###### Instalamos PUG
Pug, anteriormente conocido como Jade, es un **gestor de plantillas para JavaScript que simplifica la creación de HTML** al permitirte escribir código HTML de manera más concisa y legible utilizando una sintaxis simplificada.

Dentro de modelo-vista-controlador, pug será útil a la hora de crear las **vistas**.

Instalamos PUG:
```bash
npm install pug
```

Ejemplo de sintaxis de PUG:

```pug
html
  head
    title CITIES OF THE WORLD
    link(rel="stylesheet" href="./css/style.css")
body
    nav
        a(href="/") Home
        a(href="/cities") Cities
        a(href="/login") Login
        a(href="/logout") Logout
    block content

    script(type="module", src="./js/layout.js") 
    block script
```

###### Public Folder
Esta carpeta y su contenido será accesible en la parte cliente (navegador, frontend), y se usa fundamentalmente para albergar:
- Hojas de estilo CSS
- Ficheros JavaScript para la funcionalidad del front.
- Imagenes, ficheros de fuentes... todo lo que pueda ser necesario en la parte front del proyecto.

Primero, creamos la carpeta */public* en la carpeta raiz del proyecto y la definimos como pública.

Añadimos en esta carpeta lo que sea necesario.
Por último, debemos indicar a la instancia de ExpressJS que hay una carpeta desde la que se sirven ficheros estáticos a la parte cliente.

```js
// Configura el middleware para servir archivos estáticos desde el directorio "public".
app.use(express.static("public"));
```

## Código JS paso a paso
###### Estructura de ficheros
Procedemos a crear el árbol de carpetas.
- PROYECTO
    - /node_modules
        ...
    - /public
            - /css
            - /js
    - /src
        - /controllers
        - /middlewares
        - /routes
        - /views

A su vez, en cada una de las carpetas de `src` (`controllers`, `views`...) podemos organizar por *entidades*.


###### MODELO (MVC)
Como de momento no contamos con una bbdd MySQL, llevamos a cabo una representación simplificada de lo que sería un MODELO: un array con 50 ciudades:

`citiesController.js`
```js
// Representación muy simplificada de un MODELO (hablando del patrón de diseño MODELO-VISTA-CONTROLADOR).
const nombresCiudades = [
    "Nueva York",
    "París",
    "Londres",
    "Tokio",
    ...
]
```

Esta representación simplificada no nos permitirá ver como un módelo interactua con una base de datos, por ejemplo, MySQL.

###### CONTROLADORES (MVC)
Controladores de modelo y controladores de vistas
    - citiesController.js
    - citiesViewController.js
    - authController.js

###### VISTAS (MVC)
Creamos las vistas a la vez que, o teniendo en cuenta los controladores de vistas.
    - cities/
        - edit.pug
        - list.pug
    - auth/
        - login.pug
    - home.pug
    - layout.pug

###### ENRUTAMIENTO (con Router, de ExpressJS)
    - citiesRouter.js
    - authRouter.js
    - router.js

###### MIDDLEWARE
`authMiddleware.js` comprueba que se haya iniciado sesión.

###### INDEX.JS
El archivo index.js es el archivo principal de una aplicación web basada en Node.js y Express.

Este archivo es el punto de entrada principal de la aplicación web. Configura middleware, rutas, sesiones de usuario, y manejo de vistas. También inicia el servidor Express en el puerto 3006 y muestra un mensaje en la consola cuando se inicia la aplicación. La aplicación sirve vistas, gestiona sesiones de usuario y maneja solicitudes entrantes utilizando las rutas definidas en el enrutador.

###### CARPETA STATIC (CARPETA PUBLIC)
Almacena hojas de estilo (CSS) y otros recursos estáticos, como imágenes y scripts que son utilizados por el cliente (FrontEnd).
