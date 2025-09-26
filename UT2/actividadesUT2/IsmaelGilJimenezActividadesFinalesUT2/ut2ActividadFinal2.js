// 2) Crea una función que reciba dos cadenas. Comprobará que ambos argumentos son cadenas y en caso afirmativo pintará mediante console.log si una cadena es igual a la otra del revés. Prueba con varias entradas.

let cadena1 = "";
let cadena2 = "";
let cadena3 = 1234566789;
let cadenaReves = ""

function compararCadenas(cadena1, cadena2) {
    if (typeof cadena1 !== "string" || typeof cadena2 !== "string") {
        console.log("Error: Una de los datos introducidos no es una cadena.");
        return;
    }

    for (let i = cadena2.length - 1; i >= 0; i--) {
        cadenaReves += cadena2[i];
    }

    if (cadena1 === cadenaReves) {
        console.log("La cadena 1 es igual a la cadena 2 al revés.");
    } else {
        console.log("La cadena 1 NO es igual a la cadena 2 al revés.");
    }

}

compararCadenas("hola", "aloh");
compararCadenas("panenca", "perca");
compararCadenas(cadena1, cadena3);