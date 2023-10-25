// Tomar el input del usurio, validarlo y enviarle la petición "curada" a books.ts
// Devolverle al usuario la respuesta en forma visual
import { addNewBook, deleteBookById, getAll, getBookById } from "./books";

const main = () => {
  const args = process.argv.splice(2);

  if (args[0] === "--get" && args[1] === "--all") {
    const books = getAll();
    console.log(books);
  } else if (args[0] === "--get" && args[1] === "--id" && args.length === 3) {
    const book = getBookById(args[2]);
    console.log(book);
  } else if (
    args[0] === "--delete" &&
    args[1] === "--id" &&
    args.length === 3
  ) {
    const status = deleteBookById(args[2]);
    console.log(status);
  } else if (
    args[0] === "--add" &&
    args[1] === "--nombre" &&
    args[2] !== "--lanzamiento" &&
    args[3] === "--lanzamiento" &&
    args[4] !== "--rating" &&
    args[5] === "--rating" &&
    args[6] !== "--atp" &&
    args[7] === "--atp" &&
    args[8]
  ) {
    let atp: string | boolean;

    if (args[8] === "true") {
      atp = true;
    } else {
      atp = false;
    }

    const status = addNewBook({
      name: args[2],
      premiere: Number(args[4]),
      rating: Number(args[6]),
      atp,
    });

    console.log(status);
  } else {
    console.log("Error en la petición.");
  }
};

main();
