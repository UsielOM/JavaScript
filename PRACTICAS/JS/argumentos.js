// a y b son parametros o lista de parametros  
function sum(a, b) {

    var sumtwo = a + b;

    console.log("El resultado de " + a + " + " + b + " es: " + sumtwo);



}

sum(15, 10);

//Por que es mejor las funciones ya que podemos llamar la funcion varas veces 
sum(25, 40);
//Los valores que se escriben son argumentos 


var x = 5;
var y = 3;
sum(x, y);
// Funciones con cadenas 
function concatenateThreeChain(chain1, chain2, chain3) {

    console.log(chain1 + " " + chain2 + " " + chain3);
}

concatenateThreeChain("Estoy", "Aprendiendo", "a programar ");