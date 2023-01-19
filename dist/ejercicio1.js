"use strict";
//1. Área de un círculo
//Crear una función que calcule el área de un círculo dado su radio. Utiliza la fórmula: A = π, * r^2
const PI = 3.1416;
function areaCirculo(radio) {
    const perimetro = (2 * PI) * radio;
    const area = (perimetro * radio) / 2;
    return area;
}
console.log(`Area es: ${areaCirculo(5)}cm2`);
