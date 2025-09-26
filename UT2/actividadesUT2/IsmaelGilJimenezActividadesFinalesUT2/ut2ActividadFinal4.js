// 4) Crea una función que recibe 3 parámetros con valores por defecto (producto → "Producto genérico", precio → 100, impuestos → 21). La función convierte las entradas a cadena, entero y entero. Si no se pudiesen convertir las entradas, devolvería los valores por defecto. Prueba esta función varias veces, omitiendo valores y poniendo valores incorrectos.


function productos(producto = "Producto genérico", precio = 100, impuestos = 21) {
    productoS = String(producto);
    precioInt = parseInt(precio);
    impuestoInt = parseInt(impuestos);

    if (isNaN(precioInt)) precio = 100;
    if (isNaN(impuestoInt)) impuestos = 21;
    
    console.log("Producto: " + producto);
    console.log("Precio: " + precio);
    console.log("Impuestos: " + impuestos);
}

productos("Camiseta", "200", "10");
productos("Zapatos", "abc", 15);
productos();
