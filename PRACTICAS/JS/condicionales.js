//SI o no 
//IF SI
var x = 5
if (x > 2) {
    console.log("La condicion es verdadera. ");

}

//estaciones

var estacion = "Invierno";
if (estacion == "Invierno") {
    console.log("Si me encanta el " + estacion);
}


//Else
if (estacion == "Verano") {
    console.log("Si me encanta el " + estacion);
} else {
    console.log("Que pena que no sea " + estacion);
}

//ELSE IF


function clasificarValor(valor) {
    if (valor % 2 == 0) {
        console.log("Divisible entre 2");

    } else if (valor % 3 == 0) {

        console.log("Divisible entre 3 ")

    } else {

        console.log("No es divisible entre las opciones ")
    }
}

clasificarValor(15);


//Condicionales oreden logico


function clasificarValor2(valor) {

    if (valor < 5) {
        console.log("Menor que 5")
    } else if (valor < 10) {
        console.log("Menor que 10")
    } else {
        console.log("Mayor o igual a 10");
    }
}
clasificarValor2(2);


//

function peso(indicador) {

    if (indicador < 18.5) {
        console.log("Bajo Peso");
    } else if (indicador <= 24.9) {
        console.log("Normal");


    } else if (indicador <= 29.9) {
        console.log("Sobre peso");

    } else {
        console.log("Marrano ");
    }
}

peso(20);