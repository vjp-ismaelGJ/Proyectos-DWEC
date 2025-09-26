// EJERCICIO 14.1: Crea un programa que dada la siguiente cadena y utilizando un bucle for...of devuelva cuáles de las letraMinuss son letraMinus y cuáles son consonantes. NOTA: Los caracteres de las cadenas se pueden recorrer con un bucle de este tipo.

let str = "ab1c3de4fg";


for (let letra of str) {
    let letraMinus = letra.toLowerCase();
    if (letraMinus >= 'a' && letraMinus <= 'z') {
        if (letraMinus === 'a' || letraMinus === 'e' || letraMinus === 'i' || letraMinus === 'o' || letraMinus === 'u') {
            console.log(letra + ": vocal")
        } else {
            console.log(letra + ": consonante")
        }
    } else {
        console.log(letra + ": no es letra");
    }
}