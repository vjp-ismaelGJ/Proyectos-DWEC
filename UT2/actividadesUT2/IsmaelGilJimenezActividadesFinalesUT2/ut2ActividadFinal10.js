// 10) OPCIONAL: Crea una función en la que puedan entrar un número indeterminado de argumentos.
// Comprueba que todos son cadenas(si no devuelve error) y pinta por pantalla la suma total de todas las longitudes de las cadenas.
// Utiliza rest y reduce. Prueba con varias entradas.


function sumarLongitudes(...args) {
    if (!args.every(arg => typeof arg === "string")) {
        console.log("Error: todos los argumentos deben ser cadenas");
        return;
    } else {
        let suma = args.reduce((total, longitud) => total + longitud.length, 0);
        console.log("Suma total de longitudes:", suma);
    }
}

sumarLongitudes("Hola","madrid","Locura","gonzalez");
sumarLongitudes("Hola",33,"Locura","gonzalez");