var miPerro = {
    "nombre": "Gino",
    "edad": 5,
    "peso": 6,
    "raza": "Beagle"
};

var miObjeto = {
    5: "cinco"
};

//Acceder a Propiedades notacion de punto

console.log(miPerro.nombre);

//Acceder a Propiedades: Notacion de corchetes
var miCuaderno = {
    "color": "verde",
    "categoria": 3,
    "numero de paginas": 200,
    "numero de hojas": 100
};

console.log(miCuaderno["numero de hojas"]);

//Acceder a propiedades variables

var resultados = {
    1: "nora256",
    2: "gino577",
    3: "estef543",
    4: "kiara566"
};

var posicion = 4;
console.log(resultados[posicion]);

//Actualizar Propiedades

var mochila = {
    "color": "azul",
    "tamaño": "mediano",
    "contenido": ["botella de agua", "cuaderno"]
};

console.log(mochila.color);
mochila.color = "verde";
console.log(mochila.color);

console.log(mochila.contenido);

mochila.contenido.push("lapiz");


console.log(mochila.contenido);

//Agregar propiedades 

var curso = {
    "titulo": "Aprender Java",
    "idioma": "Español",
    "duracion": 30
};

curso.vistas = 34500;

console.log(curso.vistas);

//Eliminar propiedad

delete curso.duracion;

console.log(curso);

//BUSQUEDAS


function buscarElementoQuimico(simbolo) {

    var simbolosQuimicos = {
        "A1": "Aluminio",
        "S": "Azufre",
        "C1": "Cloro",
        "He": "Elio",
        "B": "Boro",
        "Li": "Litio"
    };

    // switch (simbolo) {
    //     case "A1":
    //         elementoQuimico = "Aluminio";
    //         break;
    //     case "S":
    //         elementoQuimico = "Azufre";
    //         break;
    //     case "C1":
    //         elementoQuimico = "Cloro";
    //         break;
    //     case "He":
    //         elementoQuimico = "Elio";
    //         break;
    //     case "B":
    //         elementoQuimico = "Boro";
    //         break;
    //     case "Li":
    //         elementoQuimico = "Litio";
    //         break;






    // }
    return simbolosQuimicos[simbolo];
}
console.log(buscarElementoQuimico("B"));

//Verificar propiedades 

var myCuaderno = {
    "color": "verde",
    "categoria": 3,
    "precio": 4.56
};

console.log(myCuaderno.hasOwnProperty("color"));

console.log(myCuaderno.hasOwnProperty("origen"));


function verificarPropiedad(obj, propiedad) {
    if (obj.hasOwnProperty(propiedad)) {
        return "Propiedad: " + obj[propiedad];
    } else {
        return "El objeto no tien esta propiedad";
    }



}

console.log(verificarPropiedad(myCuaderno, "precio"));




//Objet