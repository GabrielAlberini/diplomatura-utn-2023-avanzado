const nombres = ["leandro", "braulio", "alexis", "agustina", "daniel"]

// valor inicial, condición, modificador 
for(let i = 0; i < nombres.length; i++){
  const nombre = nombres[i]
  
  if(nombre.length > 6) {
    console.log(nombre)
  }
}