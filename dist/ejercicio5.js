"use strict";
/*5. Ejercicio de POO
1. Crear una interfaz llamada “FiguraGeometrica” que contenga dos métodos sin valor
de retorno llamados “calcularArea” y “calcularPerimetro”.
2. Codifique una clase abstracta denominada “Figura” que implemente la interfaz
“FiguraGeometrica”; lo anterior debe contener dos métodos abstractos "calcularArea" y
"calcularPerimetro", los cuales, no tienen valor de retorno. Además, incluya una
propiedad protegida "nombre" y un constructor que reciba un parámetro y lo asigne a dicha
propiedad.
3. Crear una clase llamada "Circulo" que extienda de la clase "Figura", esta debe tener
una propiedad "radio" y un constructor que reciba dos parámetros "nombre" y "radio".Los debe asignar a las propiedades correspondientes de la clase. Implementa los métodos
"calcularArea" y "calcularPerimetro" de la interfaz "FiguraGeometrica"
utilizando las fórmulas para calcular el área y perímetro de un círculo.
4. Codificar una clase llamada "Cuadrado" que extienda de la clase "Figura", con una
propiedad "lado" y un constructor que reciba dos parámetros "nombre" y "lado". Estos
deben ser asignados a las propiedades correspondientes de la clase. Implementa los
métodos "calcularArea" y "calcularPerimetro" de la interfaz
"FiguraGeometrica" utilizando las fórmulas para calcular el área y perímetro de un
cuadrado.
5. Crear una clase "CrearFiguras" que tenga un método "crear", este debe recibir tres
parámetros "nombre", "tipo" y "valor". Devolver un objeto de la clase "Circulo" o
"Cuadrado" según el valor del parámetro "tipo".
6. En un archivo principal, crea un objeto de la clase "CrearFiguras" y utilizarlo para
crear dos objetos, uno de tipo "Circulo" y otro de tipo "Cuadrado". Utiliza los objetos para
imprimir el área y perímetro de cada figura utilizando los métodos de la interfaz
"FiguraGeometrica".*/
class Figura {
    constructor(nombre) {
        this.nombre = nombre;
    }
    calcularArea() { }
    calcularPerimetro() { }
}
class Circulo extends Figura {
    constructor(radio, nombre) {
        super(nombre);
        this.radio = radio;
    }
    calcularArea() {
        const perimetro = (2 * PI) * this.radio;
        const area = (perimetro * this.radio) / 2;
        console.log('Area del Circulo es ', area);
    }
    calcularPerimetro() {
        const perimetro = (2 * PI) * this.radio;
        console.log('Perimetro del Circulo es ', perimetro);
    }
}
class Cuadrado extends Figura {
    constructor(lado, nombre) {
        super(nombre);
        this.lado = lado;
    }
    calcularArea() {
        const area = Math.pow(this.lado, 2);
        console.log('Area del Cuadrado es ', area);
    }
    calcularPerimetro() {
        const perimetro = 4 * this.lado;
        console.log('Perimetro del Cuadrado es ', perimetro);
    }
}
class CrearFiguras {
    crear(nombre, tipo, valor) {
        let c1;
        if (tipo === 'circulo') {
            c1 = new Circulo(valor, nombre);
        }
        else {
            c1 = new Cuadrado(valor, nombre);
        }
        return c1;
    }
}
const circulo = new CrearFiguras();
circulo.crear('circulo', 'circulo', 8).calcularArea();
circulo.crear('circulo', 'circulo', 8).calcularPerimetro();
const cuadrado = new CrearFiguras();
cuadrado.crear('cuadrado', '', 8).calcularArea();
cuadrado.crear('cuadrado', '', 8).calcularPerimetro();
