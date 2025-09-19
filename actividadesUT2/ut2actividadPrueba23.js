// PRUEBA (23):
// Utiliza rest y spread para crear una función a la que le puedas pasar un número ilimitado de parámetros.
// Compruebe que todos esos parámetros sean números y devuelva el mayor de todos. Si algún parámetro no es
// un número devolverá undefined. Prueba tu función con varias entradas utilizando spread.

//let valores = ["RM", 14, 7, "UCL", "FCB", 8, 17, false];
let valores = [14, 7, 8, 17];

function funcionConRest(...valores) {
    // Otras formas de hacerlo
    // return valores.some(num => '0123456789'.includes(num)) ? undefined : valores.reduce((max, num) => (num > max ? num : max), valores[0]) (no recomendable para números mayores de un dígito)
    // return valores.some(num => isNaN(num)) ? undefined : valores.reduce((max, num) => (num > max ? num : max), valores[0])
    if (valores.some(x => typeof x !== "number")) {
        return undefined;
    } else {
        return valores.reduce((max, num) => (num > max ? num : max), 0)
    }

}

console.log(funcionConRest(...valores));
