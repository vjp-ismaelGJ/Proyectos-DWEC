// 5) Crea una función que dado un array lo ordene (mira funciones predefinidas).
// Intenta hacer un método para ordenarlo por tí mismo considerando que el array siempre incluyese números (Es decir, sin utilizar .sort()).



function ordenarArray(unArray) {
    
    for (let i = 0; i < unArray.length - 1; i++) {
        for (let j = i + 1; j < unArray.length; j++) {
            if (unArray[i] > unArray[j]) {
                let aux = unArray[i];
                unArray[i] = unArray[j];
                unArray[j] = aux;
            }
        }
    }

    console.log(unArray);

}


let unArray = [8,6,2,7,9,8,3,4,2];
ordenarArray(unArray);