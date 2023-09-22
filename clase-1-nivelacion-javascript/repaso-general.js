// input - proceso / almacenamiento - output

// Variables -> almacenan información en la memoria RAM
let nombre = "Gabriel" // -> variables de tipo let se pueden reasignar
const apellido = "Alberini" // -> variables de tipo const NO se pueden reasignar

nombre = "David"
// apellido = "Chamorro"

// Tipos de datos -> primitivos -> representan valores singulares -> inmutables
let string = "cadena de caracteres"
let number = 20
let boolean = true
let typeUndefined = undefined
let typeNull = null 
let typeNaN = NaN
let typeSymbol = Symbol

// Tipo de dato complejos / compuestos -> mutables
const array = [] // -> lista -> los datos (elementos) estan ordenados de forma indexada
const objetos = {} // -> colección de datos (representan entidades)

// Los datos dentro de los objetos se llaman propiedades
// PERO cuando una propiedad es una función se llama: método

// Arrow function

// Declaración -> enseñarle a la compu lo que tiene que hacer
// const saludar = (nombre) => {
//   const saludo = `Hola ${nombre}`
//   console.log(saludo)
// }

// Invocación -> ejecutar la función
// saludar("Gabriel")

const saludar = (nombre) => {
  const saludo = `Hola ${nombre}`
  return saludo
}

// const saludoCreado = saludar("Gabriel")
// console.log(saludoCreado)

// Operadores -> aritméticos | comparación | lógicos

// Aritmeticos -> computan
console.log(4+4)
console.log(4-4)
console.log(4/4)
console.log(4*4)
console.log(4**4)
console.log(4%4) 

// Comparación -> comparan valores -> devuelven siempre un booleano
console.log(4>4)
console.log(4>=4)
console.log(4<4)
console.log(4<=4)
console.log(4!==4)
console.log(4==4)
console.log(4===4)

let edad = 29 // asignación -> estoy guardando en una variable, un dato

// let validarEdad = edad == 29

let validadEdad = edad == "29" // comparación simple -> solo compara el valor
let validadEdad2 = edad === "29" // comparación simple -> compara valor y tipo de dato

console.log(validadEdad, "<-- validación simple")
console.log(validadEdad2, "<-- validación estricta")

// Lógicos -> validan dos expresiones
console.log(4 < 5 && 5 > 7) // false
console.log(4 < 5 || 5 > 7) // true
console.log(!true) // false

