/*3. Obtener el número mayor
1. Redacte una función llamada 'obtenerMayor' que acepte una cantidad variable de
argumentos y devuelva el valor máximo entre ellos. Utilice el operador spread (...) para
recibir los argumentos en un arreglo.
2. La función debe devolver el valor de la variable “mayor” al final del ciclo de iteración.
3. Invoque la función “obtenerMayor” pasando distintos conjuntos de números como
argumentos y verifique los resultados en la consola utilizando una sentencia
“console.log”.*/

function obtenerMayor(...numeros: number[]): number{
  let mayor = 0
  for(let numero of numeros){
    if(numero > mayor){
      mayor = numero
    }
  }
  return mayor
}
console.log(`El numero mayor es ${obtenerMayor(1,2,3,5,2,29)}`)