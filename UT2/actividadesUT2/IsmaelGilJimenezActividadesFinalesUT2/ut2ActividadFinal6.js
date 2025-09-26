// 6) Crea un array con 4 valores y realiza los siguientes pasos:
//    1) Añade dos elementos al inicio.
//    2) Añade 3 más al final.
//    3) Elimina las posiciones 3,4,5
//    4) Inserta 2 elementos antes del último elemento.
// NOTA: En cada cambio muestra los elementos del array separados por u utilices bucles, utiliza las funciones predefinidas de arrays).

let arrayValores = ["Paco", 15, "Sua", 33];
for (let index = 0; index < arrayValores.length; index++) {
    console.log(arrayValores.join('#'));
}

arrayValores.unshift("Cristiano", "Ronaldo");
for (let index = 0; index < arrayValores.length; index++) {
    console.log(arrayValores.join('#'));
}

arrayValores.push(45,"Loco","extra");
for (let index = 0; index < arrayValores.length; index++) {
    console.log(arrayValores.join('#'));
}

arrayValores.splice(3, 3);
for (let index = 0; index < arrayValores.length; index++) {
    console.log(arrayValores.join('#'));
}

arrayValores.splice(arrayValores.length - 1, 0, "The last", "Joker");
for (let index = 0; index < arrayValores.length; index++) {
    console.log(arrayValores.join('#'));
}
