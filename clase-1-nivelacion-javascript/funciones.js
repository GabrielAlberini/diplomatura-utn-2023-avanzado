// hoisting !== hosting -> Proceso de js de elevar las declaraciones de las funciones arriba de todo

function hablar1 () {
  return "Holaaaaaaa"
}
// hablar()

// Return implicito solo en arrow functions
const hablar2 = () => "Holaaaaaaaaaaaa"

const saludo = hablar2()
console.log(saludo)