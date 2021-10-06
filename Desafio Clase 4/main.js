
var capital=prompt("Introduzca el monto");
var interes=prompt("Indique el interes anual o tasa");
var anos=prompt("Introduzca el numero de años");


var n=anos*12;
var i=interes/100;


var cuota= capital*(interes*anos/365);


alert ("El calculo de un capital de  "+capital+ " a "+ n+ " meses y interés mensual de "+i+"% es " + cuota);
