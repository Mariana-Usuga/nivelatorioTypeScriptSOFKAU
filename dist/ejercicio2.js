"use strict";
//2. Potencia
//Crear una función que calcule el resultado de elevar un número dado a una potencia dada.
//Utiliza la fórmula: base^exponente
function potencia(base, exponente) {
    let potencia = 1;
    for (let i = 0; i < exponente; i++) {
        potencia = potencia * base;
    }
    return potencia;
}
console.log(`La potencia es ${potencia(2, 3)}`);
