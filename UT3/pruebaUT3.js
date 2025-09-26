let id = setTimeout(() => {
    console.log("2. " + new Date().toString());
    let respuesta = prompt("¿Quieres parar la función? (si para parar)");
    if (respuesta && respuesta.toLowerCase() === "si") {
        clearTimeout(id);
        console.log("Función parada.");
    }
}, 5000);