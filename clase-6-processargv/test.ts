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

// console.log(nuevaListaDeNumeros);

// ------------------------------------------------------------------------

// Find
const peliculas = [
  { id: 1, nombre: "Titanic", rating: 7.8 },
  { id: 2, nombre: "El Padrino", rating: 9.2 },
  { id: 3, nombre: "Star Wars: Episodio IV", rating: 8.6 },
  { id: 4, nombre: "Jurassic Park", rating: 7.9 },
  { id: 5, nombre: "ET", rating: 8.7 },
  { id: 6, nombre: "Manuelita", rating: 10 },
  { id: 7, nombre: "300", rating: 8 },
  { id: 8, nombre: "Test", rating: 1 },
  { id: 8, nombre: "EL chavo", rating: 10 },
];

const id = 8;

const peliculaEncontrada = peliculas.find((pelicula) => {
  if (pelicula.id === id) {
    return pelicula;
  }
});

// console.log(peliculaEncontrada);

const remeras = [
  { id: 1, talle: "S", color: "Rojo" },
  { id: 2, talle: "M", color: "Azul" },
  { id: 3, talle: "L", color: "Verde" },
];

const remerasRojas = remeras.filter((remera) => {
  if (remera.color === "Negro") {
    return remera;
  }
});

// console.log(remerasRojas);

const alumnos = [
  {
    nombre: "Juan",
    edad: 20,
    genero: "Masculino",
    apellido: "Pérez",
    materias_rendidas: ["Matemáticas", "Historia"],
  },
  {
    nombre: "Ana",
    edad: 22,
    genero: "Femenino",
    apellido: "Gómez",
    materias_rendidas: ["Literatura", "Química", "Física", "Matemática"],
  },
  {
    nombre: "Carlos",
    edad: 19,
    genero: "Masculino",
    apellido: "Martínez",
    materias_rendidas: ["Inglés", "Química", "Física"],
  },
];

const alumnosValidados = alumnos.filter((alumno) => {
  if (alumno.materias_rendidas.length > 2) {
    return alumno;
  }
});

console.log(alumnosValidados);
