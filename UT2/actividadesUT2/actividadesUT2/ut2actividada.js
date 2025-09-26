// Introducir 3 números por pantalla, si suman 100 devolverá un alert de éxito, sinio uno de fracaso

// Variables
let numIntro;
let suma = 0;

for (let i = 0; i < 3; i++) {
    numIntro = parseInt(prompt("Introduce el " + (i+1) + " número: ")) ;
    suma = suma + numIntro;
}

if (suma === 100) {
    alert("Éxito: la suma es 100");
} else {
    alert("Fracaso: la suma no es 100, fue " + suma);
}