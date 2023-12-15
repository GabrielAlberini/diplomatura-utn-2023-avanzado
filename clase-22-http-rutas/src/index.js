import fs from "node:fs";
import http from "node:http";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;

const readDb = () => {
  const productsBuffer = fs.readFileSync("./src/database/products.json");
  const productsParsed = JSON.parse(productsBuffer.toString());
  return productsParsed;
};

// Enviar datos al servidor http mediante método POST
const serverHttp = http.createServer((request, response) => {
  console.log(request.method);
  switch (request.method) {
    case "GET":
      response.writeHead(200, {
        "Content-Type": "application/json; charset=utf-8",
      });
      if (request.url === "/products") {
        const productsParsed = readDb();
        const productsJson = JSON.stringify(productsParsed);

        response.end(productsJson);
      } else {
        response.end("Petición invalida");
      }
      break;
    case "POST":
      response.writeHead(200, {
        "Content-Type": "application/json; charset=utf-8",
      });

      if (request.url === "/products") {
        const products = readDb();

        let body = "";

        request.on("data", (chunk) => {
          body += chunk;
        });

        request.on("end", () => {
          const product = JSON.parse(body);
          products.push(product);

          fs.writeFileSync(
            "./src/database/products.json",
            JSON.stringify(products)
          );

          response.end("Producto agregado con éxito...");
        });
      } else {
        response.end("Petición POST invalida...");
      }
      break;
  }
});

serverHttp.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}/`);
});
