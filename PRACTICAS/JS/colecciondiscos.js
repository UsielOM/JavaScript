var colecionDeDiscos = {

    7853: {
        tituloDelAlbum: "Bee Gees Greatest",
        artista: "Bee Gees",
        canciones: ["Stayin' Alive"]
    },


    5439: {
        tituloDelAlbum: "ABB Gold"
    }
};


function actulizarDiscos(discos, id, propiedad, valor) {
    if (valor === "") {
        delete colecionDeDiscos[id][propiedad];

    } else if (propiedad === "canciones") {

        discos[id][propiedad] = discos[id][propiedad] || []; //Si no es undefine se le asi
        discos[id][propiedad].push(valor);


    } else {

        discos[id][propiedad] = valor;


    }

}


console.log(colecionDeDiscos[5439].artista);

actulizarDiscos(colecionDeDiscos, 5439, "artista", "ABBA");
console.log(colecionDeDiscos[5439].artista);