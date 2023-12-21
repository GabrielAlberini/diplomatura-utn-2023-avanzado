export const middlewareProductStructure = (product) => {
  const requiredProperties = [
    "id",
    "nombre",
    "colores",
    "tamanios",
    "precio",
    "stock",
    "sku",
    "envios",
    "aceptaCuponDescuento",
  ];
  for (const property of requiredProperties) {
    if (!product.hasOwnProperty(property)) {
      return false;
    }
  }

  return true;
};
