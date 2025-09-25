// 6) Crea un array con 4 valores y realiza los siguientes pasos:
//    1) Añade dos elementos al inicio.
//    2) Añade 3 más al final.
//    3) Elimina las posiciones 3,4,5
//    4) Inserta 2 elementos antes del último elemento.
// NOTA: En cada cambio muestra los elementos del array separados por u utilices bucles, utiliza las funciones predefinidas de arrays).

let arrayValores = ["Paco", 15, "Sua", 33];
console.log("Array por defecto: " + arrayValores);

arrayValores.unshift("Cristiano", "Ronaldo");
console.log("Se añaden 2 valores delante: " + arrayValores);

arrayValores.push(45,"Loco","extra");
console.log("Se añaden 3 valores al final: " + arrayValores);

arrayValores.splice();