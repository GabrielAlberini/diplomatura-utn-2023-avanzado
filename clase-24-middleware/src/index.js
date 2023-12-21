import http from "node:http";

import dotenv from "dotenv";
import { handleRoutes } from "./routes/routes.js";
dotenv.config();

const port = process.env.PORT;

// Enviar datos al servidor http mediante método POST
const serverHttp = http.createServer((request, response) => {
  handleRoutes(request, response);
});

serverHttp.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}/`);
});

// Petición -> pedirle algun recurso al servidor
// GET
// POST
