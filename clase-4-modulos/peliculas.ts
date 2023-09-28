let PELICULAS = [
  { id: 1, nombre: "Titanic", rating: 7.8 },
  { id: 2, nombre: "El Padrino", rating: 9.2 },
  { id: 3, nombre: "Star Wars: Episodio IV", rating: 8.6 },
  { id: 4, nombre: "Jurassic Park", rating: 7.9 },
  { id: 5, nombre: "ET", rating: 8.7 },
];

// Todos los módulos encargados de usar o manipular la data (PELICULAS)

// API -> CRUD -> create, read, update, delete

const mostrarPeliculas = () => {
  // Esta función debe RETORNAR el array completo de peliculas
  // Esta función retorta un array
};

const mostrarPelicula = (id) => {
  // Esta función debe RETORNAR la pelicula refente al id que se le pasa por parámetro
  // Esta función retorna un objeto
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
