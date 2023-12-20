import fs from "node:fs";

// Models
// Procesar recursos. Ejecutan acciones en la base de datos.
// Enviarle a controller los diferentes casos de respuesta.

export const getProducts = () =>
  JSON.parse(fs.readFileSync("./src/database/products.json"));

export const addProduct = (product) => {
  const products = getProducts();
  products.push(product);
  fs.writeFileSync("./src/database/products.json", JSON.stringify(products));
};
