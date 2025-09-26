
// 3) Crea una función a la cual se le pase un array. Esta función devolverá:
//    a) Cuántos elementos hay de tipo número y los pintará por pantalla.
//    b) Cuántos elementos hay de tipo cadena y los pintará por pantalla.
//    c) Cuántos elementos no son ni número ni cadena y los pintará por pantalla.
//    Prueba la ejecución con varias entradas.

let elArray = ["Real Madrid", 33, 15, "UCL", true, "cadenita", 2, 36];

function metodoArray(elArray) {
    let contarNum = 0;
    let contarCad = 0;
    let contarOtros = 0;

    // Se recorre el array
    for (let elemento of elArray) {
        if (typeof elemento === "number") {
            contarNum++;
        } else if (typeof elemento === "string") {
            contarCad++;
        } else {
            contarOtros++;
        }

    }

    console.log("Elementos que son números: " + contarNum);
    console.log("Elementos que son cadena: " + contarCad);
    console.log("Elementos que no son ni números ni cadenas: " + contarOtros);

}

metodoArray(elArray);