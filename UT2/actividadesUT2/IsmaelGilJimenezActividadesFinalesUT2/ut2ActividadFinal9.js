// 9) Crea un programa en el que existan 3 objetos de tipo platoCocina, que tengan los atributos: nombrePlato(cadena), duracionMinutos(un número) y dificultad(un número).
// Almacena en un mapa la relación de cada plato con un array que guarde los ingredientes que se utilizan como cadenas.
// Crea una función que pinte el mapa (platos->Ingredientes):
// let mapaPlatos = new Map();
// mapaPlatos.set(new PlatoCocina ('... 
// mapaPlatos.set(new PlatoCocina ('...
// mapaPlatos.set(new PlatoCocina ('...
// Deberéis definir la clase con el toString sobreescrito

class PlatoCocina {

    constructor(nombrePlato, duracionMinutos, dificultad) {
        this.nombrePlato = nombrePlato;
        this.duracionMinutos = duracionMinutos;
        this.dificultad = dificultad;
    }

    toString() {
        return `${this.nombrePlato}: \n\tTiempo de cocinado: ${this.duracionMinutos} minutos.\n\tDificultad: ${this.dificultad}.\n\tIngredientes: `;
    }
}

let mapaPlatos = new Map();
mapaPlatos.set(new PlatoCocina ("Cocido",60,6), ["Sal","Patatas","Chorizo","Zanahorias"]);
mapaPlatos.set(new PlatoCocina ("Tortilla Española",45,8), ["Sal","Patatas","Aceite","Cebolla"]);
mapaPlatos.set(new PlatoCocina ("Berenjenas Rellenas",150,7), ["Carne","Aceite","Sal","Queso","Pimientos","Tomates","Bechamel"]);

for (let [plato, ingredientes] of mapaPlatos) {
    console.log(plato.toString() + ingredientes.join(", "));
}
