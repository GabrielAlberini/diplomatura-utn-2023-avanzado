// Ejercicio 1: Calculadora
// Escribe un programa que tome dos números como entrada y realice la suma de esos dos números.
// Escribe un programa que tome dos números como entrada y realice la resta de esos dos números.
// Escribe un programa que tome dos números como entrada y realice la división de esos dos números. Ten en cuenta que no se puede dividir por 0.
// Escribe un programa que tome dos números como entrada y realice la multiplicación de esos dos números.
// Escribe un programa que tome dos números como entrada y realice la potencia de esos dos números. Esta función tomará la base y el exponente como parametros.

// Declarar las funciones -> elección de nombres
// Declarar las variables -> elección de nombres

// Declaración -> le enseño a la pc lo que tiene que hacer (no llevan datos reales)
const sumar = (n1: number, n2: number): number => {
  return n1 + n2;
};
const restar = (n1: number, n2: number): number => {
  return n1 - n2;
};
const divir = (divisor: number, dividendo: number): number | string => {
  if (dividendo === 0) {
    return "Ingrese un valor distino a 0";
  }
  return divisor / dividendo;
};
const multiplicar = (n1: number, n2: number): number => {
  return n1 * n2;
};
const potencia = (base: number, exponente: number): number => {
  return base ** exponente;
};

// Ejercicio 2: Saludo personalizado
const saludar = (nombre: string): string => {
  // backsticks -> templates string
  const saludo = `Hola ${nombre}, como estas?`;
  return saludo;
};

// Ejercicio 3: Verificar si un número es par o impar
// Escribe un programa que tome un número como entrada y determine si es par o impar.
const validarParOImpar = (numero: number): string => {
  if (numero % 2 === 0) {
    return "Numero par";
  } else {
    return "El numero es impar";
  }
};

// Ejercicio 5: Lista de nombres
// Crea una array de nombres e imprime cada nombre en la consola.

const nombres: string[] = ["Jhoel", "Gabriel", "Braulio", "Sebastian"];
const mostrarNombres = (listaDeNombres: string[]): void => {
  // valor inicial = 0
  // condición = el bucle se va a repetir HASTA que i deje de ser menor a la longitud del array
  // modificador del indice
  for (let i = 0; i < listaDeNombres.length; i++) {
    console.log(listaDeNombres[i]);
  }
  // for (let nombre of listaDeNombres) {
  //   console.log(nombre);
  // }
  // listaDeNombres.forEach((nombre) => {
  //   console.log(nombre);
  // });
};

// Ejercicio 6: Mayor de tres números
const validarNumMayor = (n1: number, n2: number, n3: number): number => {
  return Math.max(n1, n2, n3);
};

// Ejercicio 7: Contar elementos en un arreglo

const arrayDeNumeros: number[] = [
  1, 2, 3, 4, 5, 6, 7, 78, 8, 9, 6, 5, 43, 3, 4, 5, 6, 7, 6, 5, 4, 3123, 1, 2,
  3, 23, 2, 234, 2, 34, 2, 1,
];
const arrayDeCaracteres: string[] = ["sa", "sdf", "v", "b"];

const contarElementosDeUnArray = (array: any[]): number => {
  return array.length;
};

// Ejercicio 8: Validar contraseña (al menos 8 caracteres)
const validarContrasenia = (pass: string): boolean => {
  if (pass.length >= 8) {
    return true;
  } else {
    return false;
  }
};
