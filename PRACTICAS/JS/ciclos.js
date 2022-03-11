//While
var miArreglo = [];

var i = 0;

console.log(miArreglo);

while (i < 10) {
    miArreglo.push(i);
    i++;
}

console.log(miArreglo);

//For


var miArreglo2 = [];

for (var j = 0; j < 10; j++) {

    miArreglo2.push(j);

}

console.log(miArreglo2);

//impares
var miArreglo3 = [];

for (var x = 1; x < 20; x += 2) {

    miArreglo3.push(x);
}
console.log(miArreglo3)


//Contar hacia atras for

for (var z = 15; z >= 10; z--) {

    console.log(z);
}


var miArreglo4 = [];

for (var w = 10; w > 0; w -= 2) {

    miArreglo4.push(w);
}
console.log(miArreglo4);


// Iterar sobre un arreglo con un ciclo "for" 

var miArreglo5 = [4, 6, 8, 2];
var total = 0;

for (var u = 0; u < miArreglo5.length; u++) {

    total += miArreglo5[u];

}
console.log(total);

//

var lenguajes = ["JavaScript", "Python", "Java", "C++"];

for (var v = 0; v < lenguajes.length; v++) {
    console.log(lenguajes[v].toUpperCase());
}

function contarNumerosPares(arreglo) {
    var total = 0;
    for (var s = 0; s < arreglo.length; s++) {
        if (arreglo[s] % 2 === 0) {
            total++;
        }
    }
    return total;
}
console.log(contarNumerosPares([2, 4, 8, 10]));

//Ciclo for anidado

var miArreglo6 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (var t = 0; t < miArreglo6.length; t++) {
    console.log("Nueva iteración");


    var arregloAnidado = miArreglo6[t];
    console.log("Arreglo: " + arregloAnidado);

    for (var o = 0; o < arregloAnidado.length; o++) {

        console.log("---Ciclo anidado");
        console.log("Elemento: ");

        console.log(arregloAnidado[o]);
    }
}

//Ciclos "do...while"


var x;
x = 5;

while (x < 10) {
    console.log(x);
    x++;
}