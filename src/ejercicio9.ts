/*9. Imprimir un árbol de navidad con asteriscos ( * )
1. Crear una función llamada "imprimirArbol" que reciba un número entero "n" como
argumento, representando la altura del árbol.
2. Utilizar un ciclo “for” para generar cada línea del árbol.
3. En cada iteración del ciclo “for”, debe crear dos variables: "espacios" y "estrellas".
4. Utilizar un ciclo “for” dentro de la iteración del ciclo principal para generar una cadena
con "n - i - 1" espacios en blanco para la variable "espacios".
5. Utilizar otro ciclo “for” dentro de la iteración del ciclo principal para generar una cadena
con "i * 2 + 1" estrellas para la variable "estrellas".
6. Imprimir las variables "espacios" y "estrellas" juntas y suma espacios para formar
un árbol.
7. Al final del ciclo principal, crea una variable "base" vacía y utiliza otro ciclo “for” para
generar "n - 2" espacios en blanco.
8. Agrega "***" a la variable "base" e imprime la variable "base" como la base del árbol. */

function imprimirArbol(n: number){
  for(let i = 0; i < n; i++){ 
    let espacios = ''
    let estrellas = ''
    for(let j = 0; j < n - i - 1; j++){
      espacios += ' '
    }
    for(let j = 0; j < i * 2 + 1; j++){
      estrellas += '*'
    }
    console.log(espacios, estrellas)
  }
  let base = ''
  for(let j = 0; j < n - 2; j++){
    base += ' '
  }    
    console.log(base,"***")
}
imprimirArbol(6)