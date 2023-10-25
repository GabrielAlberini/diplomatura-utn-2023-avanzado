// Recibe la "request" y devuelve a index la respuesta en relación a la lectura de la base de datos

import { readDb, writeDb } from "./utils/manipulateDb";
import { randomUUID } from "node:crypto";
import { Book } from "./interfaces/book";

const getAll = (): Book[] | string => {
  const books = readDb();
  if (books.length > 0) {
    return books;
  } else {
    return "No hay libros en la base de datos.";
  }
};

const getBookById = (id: string) => {
  const books: Book[] = readDb();

  const foundBook: Book | undefined = books.find(
    (book: Book) => book.id === id
  );

  if (foundBook) {
    return foundBook;
  } else {
    return "El libro no existe en la base de datos.";
  }
};

const deleteBookById = (id: string) => {
  const books = readDb();

  const foundBook: Book | undefined = books.find(
    (book: Book) => book.id === id
  );

  if (!foundBook) {
    return "El libro no existe en la base de datos.";
  }

  const newBooks: Book[] = books.filter((book: Book) => book.id !== id);
  writeDb(newBooks);
  return "Libro borrado con éxito.";
};

const addNewBook = (dataBook: Book) => {
  const books = readDb();

  const foundBook = books.find((book: Book) => book.name === dataBook.name);

  if (!foundBook) {
    dataBook.id = randomUUID();
    books.push(dataBook);
    writeDb(books);
    return "Libro agregado con éxito.";
  } else {
    return "El libro ya existe en la base de datos.";
  }
};

export { getAll, getBookById, deleteBookById, addNewBook };
