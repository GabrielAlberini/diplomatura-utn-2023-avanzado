// Interface === molde
// Interface === contrato
interface Pelicula {
  id: number;
  nombre: string;
  rating: number;
}

let PELICULAS: Pelicula[] = [
  { id: 1, nombre: "Titanic", rating: 7.8 },
  { id: 2, nombre: "El Padrino", rating: 9.2 },
  { id: 3, nombre: "Star Wars: Episodio IV", rating: 8.6 },
  { id: 4, nombre: "Jurassic Park", rating: 7.9 },
  { id: 5, nombre: "ET", rating: 8.7 },
  { id: 6, nombre: "Manuelita", rating: 10 },
  { id: 7, nombre: "300", rating: 8 },
  { id: 8, nombre: "EL chavo", rating: 10 },
];

// Todos los módulos encargados de usar o manipular la data (PELICULAS)

// API -> CRUD -> create, read, update, delete

const mostrarPeliculas = (): Pelicula[] => {
  // Esta función debe RETORNAR el array completo de peliculas
  // Esta función retorta un array
  return PELICULAS;
};

const mostrarPelicula = (id: number): Pelicula => {
  // Esta función debe RETORNAR la pelicula refente al id que se le pasa por parámetro
  // Esta función retorna un objeto
  // return de una pelicula, o que hacemos en caso de que la pelicula no exista?
};

const agregarPelicula = (pelicula) => {
  // Esta función debe agregar una pelicula pasada por parametro en el array de peliculas
  // Para indicar un caso exitoso (que la pelicula fue agregada) RETORNAR un mensaje
};

const borrarPelicula = (id) => {
  // Esta función debe borrar una pelicula referente al id pasado por parametro en el array de peliculas
  // Para indicar un caso exitoso (que la pelicula fue agregada) RETORNAR un mensaje
};

export { mostrarPelicula, mostrarPeliculas, agregarPelicula, borrarPelicula };
