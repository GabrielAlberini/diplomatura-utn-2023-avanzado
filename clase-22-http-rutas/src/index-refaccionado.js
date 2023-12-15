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
  const productsParsed = readDb();

  if (request.method === "GET" && request.url === "/") {
    const responseServer = {
      status: 200,
      app: "http-server-utn",
      routes: {
        index: "/",
        getProducts: "/product",
        addProducts: "/product",
      },
    };

    response.writeHead(200, { "Content-Type": "application/json" });

    response.end(JSON.stringify(responseServer));
  } else if (request.method === "GET" && request.url === "/product") {
    response.writeHead(200, { "Content-Type": "application/json" });

    response.end(JSON.stringify(productsParsed));
  } else if (request.method === "POST" && request.url === "/product") {
    let body = "";

    request.on("data", (chunk) => {
      console.log(chunk);
      body += chunk;
    });

    request.on("end", () => {
      const newProduct = JSON.parse(body);
      products.push(newProduct);

      fs.writeFileSync(
        "./src/database/products.json",
        JSON.stringify(products)
      );
    });

    response.end("Producto agregado con éxito...");
  } else {
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.end("Peticion incorrecta...");
  }
});

serverHttp.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}/`);
});
