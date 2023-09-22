// Inferencia de datos

// let edad = 29
// edad = "hola"
// console.log(edad)

// Tipado 

// string
let nombre: string = "Gabriel"
console.log(nombre)

let edad: number = 29
console.log(edad)

let esMayorDeEdad: boolean = true
console.log(esMayorDeEdad)

let tenesComida: null = null

let sabesVolar: undefined = undefined

// Tipo custom
type tipoMixto = string | number | boolean | string[]
let dato: tipoMixto = true

// Arrays

const nombres: string[] = ["gabriel", "braulio"]
const edades: number[] = [1,2,3,4,5,6]

// palabra reservada -> nombre -> asignacion (=) -> tipos de datos
type datosMixtos = string | number
const datos: datosMixtos[] = ["hola", 3, 3, 5, "gkegdrg"]

// any -> cualquiera
let datoRandom: any = "hola"
datoRandom = 3

// interfaces -> modelos 
interface Persona {
  nombre: string,
  edad: number,
  gustosDeHelado?: string[],
  tieneAuto?: boolean | string
}

// Como extender desde una interface ya existente
interface Extraterrestre extends Persona {
  planeta: string,
  poderes: string[]
}

const gabriel: Persona = {
  nombre: "Gabriel",
  edad: 29,
  gustosDeHelado: ["frutilla", "kinotos al whisky"],
  tieneAuto: "no"
}

const et: Extraterrestre = {
  nombre: "ET",
  edad: 1981237,
  planeta: "jupiter",
  poderes: ["tirar tiritos", "volar"]
}

// Enums -> enumeraciones posibles
enum DiasDeLaSemana {
  Lunes,
  Martes,
  Miercoles,
  Jueves,
  Viernes,
  Sábado,
  Domingo
}

const diasDeLaSemana = {
  1: "Lunes",
  2: "Martes",
  3: "Miércoles",
  4: "Jueves",
  5: "Viernes",
  6: "Sábado",
  7: "Domingo"
}
diasDeLaSemana[1] = "Pepito"

let hoy: DiasDeLaSemana = DiasDeLaSemana.Jueves

//-----------------------------------------------------------

// const saludar = (nombre: string): string => {
//   return `Hola ${nombre}, como estas?`
// }

// const saludo = saludar("lautaro")
// console.log(saludo)

const sumar = (n1: number, n2: number):void => {
  console.log(n1 + n2)
}

sumar(1,2)

// Lista de nombres
// Crea una lista de nombres e imprime cada nombre en la lista.

const nombres2: string[] = ["gabriel", "david"]

// callback -> una función que se ejecuta despues de que pasa algo
nombres2.forEach((nombre: string) => {
  console.log(nombre)
})

const nombresConIndice = nombres2.map((nombre: string, indice: number) => {
  const obj: object ={
    indice,
    nombre
  }
  return obj
})

console.log(nombresConIndice)