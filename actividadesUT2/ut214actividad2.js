// EJERCICIO 14.2 Utiliza splice (en una sola sentencia) para que el siguiente array: [1, 2, "a", "d", "g"]
// Se modifique a: [1, 2, "pepe", 3, "H", "g"]

let array = [1, 2, "a", "d", "g"];
array.splice(2,2,"pepe",3,"H");
console.log(array);