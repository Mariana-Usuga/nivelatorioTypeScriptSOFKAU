/*8. Crear un Palíndromo sin usar los métodos de los strings
1. Crear una función llamada "crearPalindromo" que reciba una cadena como
argumento.
2. La función debe devolver un arreglo con el resultado, ejemplo, sí se pasa la palabra
“HOLA” el resultado deberá ser: [H,O,L,A,L,O,H].
3. Llamar a la función "crearPalindromo" pasando diferentes palabras como argumentos
y comprueba los resultados.*/

function crearPalindromo2(cadena: string): string[] {
  const cadenaArray = cadena.split('')
  const newArrayCadena: string[] = []
  let n = 0
  while(n < cadenaArray.length - 1){
    newArrayCadena.push(cadenaArray[n])
    n++
  }
  const cadenaAlReves = newArrayCadena.reverse()
  return cadenaArray.concat(cadenaAlReves)
}

console.log('crear a palindromo ', crearPalindromo2('hola'))