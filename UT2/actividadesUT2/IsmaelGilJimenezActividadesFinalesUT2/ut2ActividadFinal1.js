// 1) Crea una función que reciba dos cadenas y pinte cuál es la más corta de las dos. Si alguno de los dos argumentos no es una cadena devuelve un mensaje de error en su lugar. Probarlo con varias entradas directamente introducidas con código. Las salidas se harán con console.log.

let cadena1 = "Esta es la cadena número 1.";
let cadena2 = "Ahora estás leyendo la cadena 2.";
let cadena3 = 1234566789;

function contarCadena(cadena1, cadena2) {
    if (typeof cadena1 !== "string" || typeof cadena2 !== "string") {
        console.log("Error: Una de los datos introducidos no es una cadena.");
        return;
    }

    if (cadena1.length < cadena2.length) {
        console.log("La cadena más corta es " + cadena1);
    } else if (cadena1.length > cadena2.length) {
        console.log("La cadena más corta es " + cadena2);
    } else {
        console.log("Ambas cadenas son igual de cortas."); 
    }

}

contarCadena(cadena1, cadena2);
contarCadena(cadena1, cadena3);