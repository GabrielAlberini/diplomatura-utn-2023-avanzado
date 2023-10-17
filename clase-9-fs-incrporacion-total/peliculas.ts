import fs from "node:fs";
import { v4 as uuid } from "uuid";

interface Pelicula {
  id?: string;
  nombre: string;
  rating: number;
}

// getter
const mostrarPeliculas = () => {
  const data = fs.readFileSync("./database/films.json", "utf8");
  const parsedData = JSON.parse(data);

  const mappedData = parsedData.map((pelicula: Pelicula) => {
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
  const data = fs.readFileSync("./database/films.json", "utf8");
  const parsedData = JSON.parse(data);

  const peliculaEncontrada = parsedData.find((pelicula: Pelicula) => {
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
const agregarPelicula = (pelicula: Pelicula): string => {
  const data = fs.readFileSync("./database/films.json", "utf8");
  const parsedData = JSON.parse(data);

  const foundFilm = parsedData.find(
    (film: Pelicula) => film.nombre === pelicula.nombre
  );

  if (!foundFilm) {
    pelicula.id = uuid();
    parsedData.push(pelicula);

    const jsonData = JSON.stringify(parsedData);
    fs.writeFileSync("./database/films.json", jsonData);

    return "Pelicula agregada con éxito.";
  } else {
    return "La pelicula ya existe en la base de datos.";
  }
};

// setter
const borrarPelicula = (id: string): string => {
  const data = fs.readFileSync("./database/films.json", "utf8");
  const parsedData = JSON.parse(data);

  let peliculaBorrada: Pelicula | undefined;

  const nuevoArrayDePeliculas: Pelicula[] = parsedData.filter(
    (pelicula: Pelicula) => {
      if (pelicula.id !== id) {
        return pelicula;
      } else {
        peliculaBorrada = pelicula;
      }
    }
  );

  const jsonData = JSON.stringify(nuevoArrayDePeliculas);
  fs.writeFileSync("./database/films.json", jsonData);

  if (peliculaBorrada) {
    return `La pelicula: ${peliculaBorrada?.nombre} fue borrada con éxito.`;
  } else {
    return `La pelicula no existe en la base de datos.`;
  }
};

export {
  mostrarPelicula,
  mostrarPeliculas,
  agregarPelicula,
  borrarPelicula,
  Pelicula,
};
