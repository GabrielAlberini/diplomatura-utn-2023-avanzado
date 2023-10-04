// const productos1 = [
//   { id: 1, nombre: "Producto 1", categoria: "Electrónica", precio: 299.99 },
//   { id: 2, nombre: "Producto 2", categoria: "Ropa", precio: 49.99 },
//   { id: 3, nombre: "Producto 3", categoria: "Hogar", precio: 19.99 },
//   { id: 4, nombre: "Producto 4", categoria: "Electrónica", precio: 599.99 },
//   { id: 5, nombre: "Producto 5", categoria: "Ropa", precio: 29.99 },
//   { id: 6, nombre: "Producto 6", categoria: "Hogar", precio: 39.99 },
// ];

// const productoEncontrado = productos1.find((producto) => {
//   if (producto.precio < 30) {
//     return producto;
//   }
// });

// console.log(productoEncontrado);

// const productos = [
//   { id: 3, nombre: "Producto 3", categoria: "Hogar", precio: 19.99 },
//   { id: 5, nombre: "Producto 5", categoria: "Ropa", precio: 29.99 },
// ];

const numeros = [1, 2, 3, 4, 5];

const nuevaListaDeNumeros = numeros.filter((numero) => numero !== 1);

console.log(nuevaListaDeNumeros);
