"use strict";
/*4. Cálculo de promedio y comparación
1. Codifique una función llamada “promedio” que calcule el promedio de una cantidad
variable de argumentos utilizando el operador de propagación (...). La función debe
devolver el resultado como un número.*/
function promedio(...numeros) {
    let total = 0;
    for (let n of numeros) {
        total += n;
    }
    return total / numeros.length;
}
//const promed = promedio(1,4,5,6)
//console.log(`el promedio es ${promed}`)
/*2. Codifique una función llamada “compararPromedio” que reciba un número (el
  promedio) y otro número a comparar. Utilice una estructura de control de flujo para
  determinar si el promedio es mayor o menor al número dado y devuelva el resultado en
  forma de cadena de texto (“mayor” o “menor”).*/
function compararPromedio(numeroPromedio, numeroAComparar) {
    if (numeroPromedio > numeroAComparar)
        return `mayor`;
    if (numeroPromedio < numeroAComparar)
        return `menor`;
    return `igual`;
}
const promed = promedio(1, 4, 5, 6);
console.log('el promedio es ', compararPromedio(promed, 7));
/*3. Codifique una función llamada “promedioMayorMenor” que combine las funciones
anteriores, reciba un número a comparar y una cantidad variable de argumentos. Utilice el
operador spread para pasar los argumentos a la función “promedio”. Luego, utilice el
resultado de la función “promedio” y el número a comparar como argumentos para la
función “compararPromedio” y devuelva el resultado en una cadena de texto.*/
function promedioMayorMenor(numeroAComparar, ...numeros) {
    const p = promedio(...numeros);
    const comparacion = compararPromedio(p, numeroAComparar);
    if (p > numeroAComparar)
        return `El numero promedio es ${p} y es ${comparacion} a ${numeroAComparar}`;
    if (p < numeroAComparar)
        return `El numero promedio es ${p} y es ${comparacion} a ${numeroAComparar}`;
    return `El numero promedio es ${p} y es ${comparacion} a ${numeroAComparar}`;
}
/*4. Invoque la función “promedioMayorMenor” pasando distintos conjuntos de números y
un número a comparar como argumentos, y verifique los resultados en la consola utilizando
una sentencia “console.log”.*/
console.log('promedio y comparacion ', promedioMayorMenor(5, 1, 2, 3));
