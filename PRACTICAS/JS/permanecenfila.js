//UNA COLA QUEUE

function PriximoEnLaFila(array, elemento) {
    array.push(elemento); //Agregar al final del arreglo

    return array.shift(); //Elimina el primer elemento 



}

var myArray = [1, 2, 3, 4, 5];

console.log("Antes: " + JSON.stringify(myArray));


console.log(PriximoEnLaFila(myArray, 20));

console.log("Despues: " + JSON.stringify(myArray));