const totalArgs = process.argv;
const args = totalArgs.splice(2);

const accion = args[0];
const param = args[1];
const valor = args[2];

// ts-node process.ts --getFilm id DdEfFgHhIi

console.log(accion, "<-- este es el accion");
console.log(param, "<-- este es el parametro");
console.log(valor, "<-- este es el valor del parametro");
