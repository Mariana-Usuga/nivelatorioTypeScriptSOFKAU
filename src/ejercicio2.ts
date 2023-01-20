//2. Potencia
//Crear una función que calcule el resultado de elevar un número dado a una potencia dada.
//Utiliza la fórmula: base^exponente

function potencia(base: number, exponente:number): number{
  let potencia = 1
  for(let i = 0; i< exponente; i++){
    potencia *= base;
}
return potencia
}

console.log(`La potencia es ${potencia(2,3)}`)