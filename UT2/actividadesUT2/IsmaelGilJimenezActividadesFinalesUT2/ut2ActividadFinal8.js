// 8) Crea una función procesarArray que realice los siguientes pasos:
//    a) Checkea que todos los elementos son de tipo número. Si no, termina con alert("Error").
//    b) En caso afirmativo modifica el valor del array multiplicando cada elemento por 2. (se debe almacenar sobre el mismo array).
//    c) Por último comprueba que todos los elementos son pares. Si es así muestra un mensaje por pantalla de éxito, en caso contrario, de error.

let arrayNumeros = [4,5,3,1,6,9,8,5,7,2,6,4];
let arrayNoNum = [4,5,3,1,6,"no soy un número",4];

function procesarArray(arrayNumeros) {
    let indice = 0;
    for (let elemento of arrayNumeros) {
        if (typeof elemento !== "number") {
            alert("Error");
            return;
        } else {
            arrayNumeros[indice] = elemento*2;
        }
        indice++;
    }
    arrayNumeros.every(numeros => numeros % 2 == 0) ? console.log("Todos son pares.") : console.log("Hay algunos impares.");
}

procesarArray(arrayNumeros);
procesarArray(arrayNoNum);
