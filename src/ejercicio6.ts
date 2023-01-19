/*6. Saber sí es un palíndromo.
1. Crear una función llamada "esPalindromo" que reciba una cadena como argumento.
2. Sí las cadenas son iguales, la función debe devolver "true" indicando que la cadena es
un palíndromo. Sí las cadenas son diferentes, la función debe devolver "false" indicando
que la cadena no es un palíndromo.
3. Llamar a la función "esPalindromo" pasando diferentes palabras y frases como
argumentos y comprueba los resultados.*/

function esPalindromo(cadena: string){
  const c = cadena.replace(/[\W_]/g, "").toLowerCase()
  const strReversed = c.split("").reverse().join("")
  return c === strReversed
}
console.log('la palabra es palindromo: ',esPalindromo('sandra'))
console.log('la palabra es palindromo: ', esPalindromo('somos o no somos'))