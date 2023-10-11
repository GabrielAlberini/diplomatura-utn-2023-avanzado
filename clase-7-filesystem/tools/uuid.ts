import { v4 as uuid } from "uuid";

const persona: any = {
  nombre: "Gabriel",
  edad: 29,
};

persona.id = uuid();

console.log(persona);
