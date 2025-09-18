// Genera una función que dada una cadena pinte: El número de caracteres que hay. El número de vocales. Si empieza por "A" o no.

function analizarcadena(cadena) {
    let numCaracteres = cadena.length;
    let vocales = cadena.match(/[aeiou]/gi);
    let numVocales = vocales ? vocales.length : 0;
    let empiezaPorA = cadena.startsWith("A");

    // Mostrar resultados
    alert("Número de caracteres: " + numCaracteres + "\nNúmero de vocales: " + numVocales + "\nEmpieza por A?: " + (empiezaPorA ? "Si" : "No"));
}

let cadena = prompt("Introduzca una cadena de texto: ");
analizarcadena(cadena);