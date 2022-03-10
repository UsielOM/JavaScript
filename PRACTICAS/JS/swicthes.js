function clasificarValor(valor) {


    var respuesta;
    switch (valor) {
        case 1:
            respuesta = "alpha";
            break;
        case 2:
            respuesta = "beta";
            break;
        case 3:
            respuesta = "gamma";
            break;
        case 4:
            respuesta = "delta";
            break;
    }
    return respuesta;
}
console.log(clasificarValor(4));


var producto = "hamburguesa";
switch (producto) {
    case "pizza":
        console.log("La pizza cuesta $10.55");
        break;
    case "hamburguesa":
        console.log("La hamburguesa cuesta $6.78");
        break;
    case "helado":
        console.log("El helado cuesta $2.8");
        break;


}

console.log("Luego del switch");


//Sentencias Switch: Opcion Predeterminada 
function seleccionarIdioma(valordos) {
    var idioma;
    switch (valordos) {
        case 1:
            idioma = "Español";
            break;
        case 2:
            idioma = "Francés";
            break;
        case 3:
            idioma = "Italiano";
            break;


        default:
            idioma = "Ingles";
            break;
    }

    return idioma;

}

console.log(seleccionarIdioma(1));



//Sentencias Switch: Multiples casos

function clasificarVolumen(valortres) {
    var volumen;
    switch (valortres) {
        case 1:
            volumen = "bajo";
            break;
        case 2:
        case 3:
            volumen = "Inermedio";
            break;
        case 4:
        case 5:
        case 6:
            volumen = "Alto";
            break;
    }
    return volumen;
}


console.log(clasificarVolumen(6));

//REEMPLZAR ELSE IF POR SWITCHES