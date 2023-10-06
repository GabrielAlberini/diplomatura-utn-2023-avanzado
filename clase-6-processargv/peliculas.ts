interface Pelicula {
  id?: string;
  nombre: string;
  rating: number;
}

let PELICULAS = [
  {
    id: "aBcDeFgHiJ",
    nombre: "Pelicula 1",
    rating: 4.5,
  },
  {
    id: "KlMnOpQrS",
    nombre: "Pelicula 2",
    rating: 3.9,
  },
  {
    id: "TuVwXyZaB",
    nombre: "Pelicula 3",
    rating: 4.8,
  },
  {
    id: "CdEfGhIjK",
    nombre: "Pelicula 4",
    rating: 3.7,
  },
  {
    id: "LmNoPqRsT",
    nombre: "Pelicula 5",
    rating: 4.2,
  },
  {
    id: "UvWxYzAbC",
    nombre: "Pelicula 6",
    rating: 4.1,
  },
  {
    id: "DdEfFgHhIi",
    nombre: "Pelicula 7",
    rating: 3.5,
  },
  {
    id: "JjKkLlMmNn",
    nombre: "Pelicula 8",
    rating: 4.7,
  },
  {
    id: "OoPpQqRrSs",
    nombre: "Pelicula 9",
    rating: 4.0,
  },
  {
    id: "TtUuVvWwXx",
    nombre: "Pelicula 10",
    rating: 3.8,
  },
];

// getter
const mostrarPeliculas = (): Pelicula[] => {
  const mappedData = PELICULAS.map((pelicula) => {
    const nuevaPelicula = {
      nombre: pelicula.nombre,
      rating: pelicula.rating,
    };
    return nuevaPelicula;
  });

  return mappedData;
};

// getter
const mostrarPelicula = (id: string): Pelicula | false => {
  const peliculaEncontrada = PELICULAS.find((pelicula) => {
    if (pelicula.id === id) {
      return pelicula;
    }
  });

  if (peliculaEncontrada === undefined) {
    return false;
  }

  return peliculaEncontrada;
};

// setter
const agregarPelicula = (pelicula: any): string => {
  PELICULAS.push(pelicula);
  return "Pelicula agregada con éxito.";
};

// setter
const borrarPelicula = (id: string): string => {
  const nuevoArrayDePeliculas = PELICULAS.filter((pelicula) => {
    if (pelicula.id !== id) {
      return pelicula;
    }
  });

  PELICULAS = nuevoArrayDePeliculas;

  return "La pelicula fue borrada con éxito.";
};

export {
  mostrarPelicula,
  mostrarPeliculas,
  agregarPelicula,
  borrarPelicula,
  Pelicula,
};
