import * as controller from "../controllers/productsController.js";

// Enrutador. Maneja las diferentes rutas de la app. Maneja los endpoints.

export const handleRoutes = (request, response) => {
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
    controller.getProducts(request, response);
  } else if (request.method === "POST" && request.url === "/product") {
    let body = "";

    request.on("data", (chunk) => {
      body += chunk;
    });

    request.on("end", () => {
      controller.addProduct(request, response, body);
    });
  } else {
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.end("Peticion incorrecta...");
  }
};
