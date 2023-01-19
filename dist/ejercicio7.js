"use strict";
/*7. Crear un palíndromo usando los métodos de los strings
1. Crear una función llamada "crearPalindromo" que reciba una cadena de texto como
argumento.
2. La función debe devolver la cadena resultante, que es un palíndromo.
3. Llamar la función "crearPalindromo" pasando diferentes palabras como argumentos y
comprueba los resultados.*/
function crearPalindromo(cadena) {
    const c = cadena.replace(/[\W_]/g, "").toLowerCase();
    const strReversed = c.split("").reverse().join("");
    if (c === strReversed)
        return cadena;
    return false;
}
console.log('crear Palindromo ', crearPalindromo('oso'));
console.log('crear Palindromo ', crearPalindromo('somos o no somos'));
console.log('crear Palindromo ', crearPalindromo('sandra'));
