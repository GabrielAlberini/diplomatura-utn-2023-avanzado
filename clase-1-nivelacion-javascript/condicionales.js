// Si afuera esta lloviendo lleva paraguas, si no, no.

// Un condicional es una estructura de flujo

// palabra reservada - condición - scope (alcance)

const validarEntreTresNumeros = (n1, n2, n3) => {
  if(n1 > n2 && n1 > n3) {
    console.log("n1 es el número mayor")
  } else if (n2 > n3) {
       console.log("n2 es el numero mayor")
  } else {
    console.log("n3 es el numero mayor")
  }
}

validarEntreTresNumeros(1,2,3)
validarEntreTresNumeros(2,10,4)
validarEntreTresNumeros(4,3,2)



    