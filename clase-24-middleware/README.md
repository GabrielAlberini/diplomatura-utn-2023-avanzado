# Estructura del proyecto siguiendo el patrón de arquitectura MVC.
- src
  - database/
    - products.json
  - controllers/
    - productsController.js
  - models/
    - productsModel.js
  - routes/
    - routes.js
  - views/
    - responseView.js
  - server.js
- index.js

---

## Arquitectura MCV

### Models - productsModel.js - usersModel.js
Procesar recursos. Ejecutan acciones en la base de datos.

### Controllers - productsController.js - usersController.js
Manejar la respuesta.

### Views - responseViews.js
Manejar el output: "lo que le devuelvo al cliente".

--- 

## Resursos

### Utils
Directorio para funcionalidades generales.

### Routes
Enrutador. Maneja los diferentes endpoints de la app.

## Consiga para el jueves 21 de diciembre

1. Crear un controlador para la raiz de la api: "localhost:1234/"