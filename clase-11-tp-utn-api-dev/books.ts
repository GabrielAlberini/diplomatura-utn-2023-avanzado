// Recibe la "request" y devuelve a index la respuesta en relación a la lectura de la base de datos
import { randomUUID } from "node:crypto";
import fs, { writeFileSync } from "node:fs";

const readDb = () => {
  const jsonData = fs.readFileSync("./db/books.json", "utf-8");
  const books = JSON.parse(jsonData);
  return books;
};

const getAll = (): object[] | string => {
  const books = readDb();
  if (books.length > 0) {
    return books;
  } else {
    return "No hay libros en la base de datos.";
  }
};

const getBookById = (id: string) => {};

const deleteBookById = (id: string) => {};

const addNewBook = (dataBook: any) => {
  const books = readDb();

  const foundBook = books.find((book: any) => book.name === dataBook.name);

  if (!foundBook) {
    dataBook.id = randomUUID();
    books.push(dataBook);
    writeFileSync("./db/books.json", JSON.stringify(books));
    return "Libro agregado con éxito.";
  } else {
    return "El libro ya existe en la base de datos.";
  }
};

export { getAll, getBookById, deleteBookById, addNewBook };
