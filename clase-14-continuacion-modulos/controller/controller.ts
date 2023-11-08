// Declarar las funciones, convertirlas a módulos y exportarlas
import { Multiple } from "../types/index";

const moduloUno = (n1: number, n2: number): number => {
  return n1 + n2;
};

const moduloDos = (n: number): number => {
  return n ** 2;
};

const moduloTres = (array: number[]): number => {
  // [1,2,3,6,6]
  let contador = 0; // 18
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      contador += array[i];
    }
  }
  return contador;
};

// "hola como estas" -> "HOLA COMO ESTAS"
// const moduloCuatro = (frase: string): number => {
//   const string = frase.toUpperCase();
//   let vowels = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (
//       string[i] === "A" ||
//       string[i] === "E" ||
//       string[i] === "I" ||
//       string[i] === "O" ||
//       string[i] === "U" ||
//       string[i] === "Á" ||
//       string[i] === "É" ||
//       string[i] === "Í" ||
//       string[i] === "Ó" ||
//       string[i] === "Ú"
//     ) {
//       vowels = vowels + 1;
//     }
//   }
//   return vowels;
// };

const moduloCuatro = (frase: string): number => {
  // arbol
  const vocales = "aeiouáéíóúAEIOUÁÉÍÓÚ";
  let contador = 0;

  for (let i = 0; i < frase.length; i++) {
    if (vocales.includes(frase[i])) {
      contador++;
    }
  }

  return contador;
};

const moduloCinco = (string: string): string[] => {
  const array = string.split("-");
  const arrayOrdenado = array.sort();
  return arrayOrdenado;
};

export { moduloUno, moduloDos, moduloTres, moduloCuatro, moduloCinco };
