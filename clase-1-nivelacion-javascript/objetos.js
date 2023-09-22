// Objetos -> tipo de dato complejo para representar entidades

const persona = {
  nombre: "Gabriel",
  apellido: "Alberini",
  edad: 29
}

persona.tieneMascota = true

const agregarPropiedad = (obj, prop, value) => {
  // obj, prop, value === persona, "haceDeportes", false
  // obj.prop = value
  obj[prop] = value
}

agregarPropiedad(persona, "haceDeportes", false)

// console.log(persona)


const casa = {
  puertas: 2,
  ventanas: 3
}

casa.techo = "paja"

// Añadi una nueva caracteristica de tu casa:
let nuevaPropiedad = "tienePerro"
let nuevoValor = true

casa[nuevaPropiedad] = nuevoValor

console.log(casa)