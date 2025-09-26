// 7) Utiliza la función every para comprobar que todos los elementos de un array son pares.

let numeros = [1,50,20,4,3,5,9,7,6,2,5,8,11];
let numeros2 = [2,4,6,8,10,100];

numeros.every(numeros => numeros % 2 == 0) ? console.log("Todos son pares.") : console.log("No todos son pares.");
numeros2.every(numeros2 => numeros2 % 2 == 0) ? console.log("Todos son pares.") : console.log("No todos son pares.");
