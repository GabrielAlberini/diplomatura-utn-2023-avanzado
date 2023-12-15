import http from "node:http";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;

// Petición libre, sin discriminar el tipo de método indicado
// const serverHttp = http.createServer((request, response) => {
//   response.writeHead(200, {
//     "Content-Type": "application/json; charset=utf-8",
//   });

//   const data = {
//     id: randomUUID(),
//     name: "Simón",
//     lastname: "Alberini",
//   };

//   const jsonData = JSON.stringify(data);

//   response.end(jsonData);
// });

// Discriminando el método en la petición
// const serverHttp = http.createServer((request, response) => {
//   switch (request.method) {
//     case "GET":
//       response.writeHead(200, {
//         "Content-Type": "text/plain; charset=utf-8",
//       });
//       response.end("Solicitud GET recibida");
//       break;
//     case "POST":
//       response.writeHead(200, {
//         "Content-Type": "text/plain; charset=utf-8",
//       });

//       response.end("Solicitud POST recibida");
//       break;
//     default:
//       response.writeHead(200, {
//         "Content-Type": "text/plain; charset=utf-8",
//       });
//       response.end("Solicitud recibida");
//       break;
//   }
// });

// Enviar datos al servidor http mediante método POST
const serverHttp = http.createServer((request, response) => {
  switch (request.method) {
    case "GET":
      response.writeHead(200, {
        "Content-Type": "text/plain; charset=utf-8",
      });

      response.end("Hola Mundo");
      break;
    case "POST":
      let body = "";

      request.on("data", (chunk) => {
        body += chunk;
      });

      request.on("end", () => {
        response.writeHead(200, {
          "Content-Type": "application/json; charset=utf-8",
        });

        response.end(body);
      });
      break;
  }
});

serverHttp.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}/`);
});
