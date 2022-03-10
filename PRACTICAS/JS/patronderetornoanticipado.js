function myFuncion() {
    console.log("Hola");
    return "Mundo"; //Todo lo que este depues de retun no se corre
    console.log("Adios");
}

console.log(myFuncion());

function retornoAnticipado(num) {
    if (num < 0) {
        return undefined;
    }
    return Math.sqrt(num);
}

console.log(retornoAnticipado(25));