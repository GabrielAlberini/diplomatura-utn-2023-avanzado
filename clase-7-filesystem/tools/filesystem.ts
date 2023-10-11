import { v4 as uuid } from "uuid";
import fs from "node:fs";

const data = fs.readFileSync("./database/films.json", "utf-8");
const parsedData = JSON.parse(data);

const mappedFilms = parsedData.map((pelicula: any) => {
  return {
    ...pelicula,
    id: uuid(),
  };
});

const jsonData = JSON.stringify(mappedFilms);

fs.writeFileSync("./database/films.json", jsonData);

console.log(mappedFilms);
