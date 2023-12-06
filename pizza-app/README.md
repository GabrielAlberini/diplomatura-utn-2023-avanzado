# Pizza Manager App

Bienvenido a la aplicación de gestión de pizzas. Esta aplicación te permite realizar operaciones básicas en una base de datos de MongoDB Atlas para administrar información sobre pizzas.

## Requisitos previos

Antes de comenzar, asegúrate de tener Node.js instalado en tu sistema. Además, necesitarás obtener las credenciales de conexión de tu proyecto en MongoDB Atlas. Estas credenciales se utilizarán como una variable de entorno llamada uri_db.

## Configuración

Clona este repositorio en tu máquina local.
Ejecuta el siguiente comando para instalar las dependencias:

```bash
npm install
```

Crea un archivo .env en la raíz del proyecto y agrega tu variable de entorno uri_db:

```javascript
uri_db = TU_CREDENCIAL_DE_MONGO_ATLAS;
```

## Uso

La aplicación se maneja a través de la línea de comandos usando argumentos. Aquí tienes las acciones disponibles:

### Obtener todas las pizzas

**npm run start get all**

### Obtener una pizza por ID

**npm run start get id "ID_DE_LA_PIZZA"**

### Agregar una nueva pizza

**npm run start add "INGREDIENTES-SEPARADOS-CON-GUIONES" "NOMBRE" "PRECIO" "TAMAÑO"**

### Eliminar una pizza por ID

**npm run start delete id "ID_DE_LA_PIZZA"**
