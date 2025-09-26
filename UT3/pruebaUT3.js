console.log("1. " + new Date().toString());

// Preguntar antes de ejecutar la función
let respuesta = prompt("¿Quieres ejecutar la función de mostrar la fecha en 5 segundos? (si/no)");

if (respuesta && respuesta.toLowerCase() === "si") {
    // Lanzar la función después de 5 segundos
    let id = setTimeout(() => {
        console.log("2. " + new Date().toString());
    }, 5000);
    console.log("La función se ejecutará en 5 segundos...");
} else {
    console.log("Función parada antes de ejecutarse.");
}

console.log("3. " + new Date().toString());
