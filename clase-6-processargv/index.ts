// npm i --save-dev @types/node
import {
  mostrarPelicula,
  mostrarPeliculas,
  agregarPelicula,
  borrarPelicula,
  Pelicula,
} from "./peliculas";

// Params siempre sera un array que contiene los parametros pasados por la terminal como string
// Si paso un número, este también será un string
const params = process.argv;

if (params[2] === "mostrarPeliculas") {
  const peliculas = mostrarPeliculas();
  console.log(peliculas);
} else if (params[2] === "mostrarPelicula") {
  const pelicula = mostrarPelicula(params[3]); // "3" -> 3
  console.log(pelicula);
} else if (params[2] === "borrarPelicula") {
  const status = borrarPelicula(params[3]);
  console.log(status);
} else {
  console.log("Petición incorrecta o faltaron datos. Fijate loquito.");
}
