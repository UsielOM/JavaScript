//Objeto anidado 


var miReceta = {
    "descripcion": "mi postre favorite",
    "costo": 15.6,
    "ingredientes": {
        "masa": {
            "harina": "100 grs",
            "sal": "1 cucharadita",
            "agua": "1 taza"
        },
        "cobertura": {
            "azucar": "120 grs",
            "cocolate": "4 cucharadas",
            "mantequilla": "200 grs"
        }
    }


};

//Acceder a los valores de un objeto anidado

console.log(miReceta["ingredientes"]["masa"]["sal"]);

console.log(miReceta.ingredientes.masa.agua);

console.log(miReceta["ingredientes"]["cobertura"]["cocolate"]);

console.log(miReceta.ingredientes.cobertura.azucar);


console.log(miReceta.ingredientes.cobertura["mantequilla"]);