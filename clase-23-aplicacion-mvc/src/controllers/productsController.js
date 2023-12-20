// Manejar la respuesta que recibe de model.
// Según el caso de la respuesta da diferente output.

import * as productModel from "../models/productsModel.js";
import * as responseView from "../views/responseView.js";

export const getProducts = (__, response) => {
  try {
    const data = productModel.getProducts();
    responseView.sendJson(response, 200, data);
  } catch (error) {
    responseView.sendJson(response, 404, { message: "ERROR" });
  }
};

export const addProduct = (__, response, body) => {
  const newProduct = JSON.parse(body);

  try {
    productModel.addProduct(newProduct);
    responseView.sendJson(response, 200, {
      message: "Producto agregado con éxito.",
    });
  } catch (error) {
    responseView.sendJson(response, 403, { message: "ERROR" });
  }
};
