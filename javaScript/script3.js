//Ejercicio 3
let num1 = parseInt(prompt("Introduce un numero:")); //Pido que introduzca un valor, hago un parseint para pasarlo a tipo integer y lo guardo en la variable
let num2 = parseInt(prompt("Introduce un numero:")); //Pido que introduzca un valor, hago un parseint para pasarlo a tipo integer y lo guardo en la variable


if (num1 > num2) { //Mediante el codicional comprobamos que numero es mayor
    console.log('El numero: ' + num1 + ' es mayor que el nuemro: ' + num2)
} else {
    console.log('El numero: ' + num2 + ' es mayor que el nuemro: ' + num1)
};

if(num1 > 0 && num2 > 0) { //Mediante el codicional comprobamos que numero es positivo
    console.log('Los dos positivo')
} else if (num1 > 0 && num2 <= 0) {
    console.log('El numero positivo es : ' + num1)
} else {
    console.log('El numero positivo es : ' + num2)
};

if (num1 == 0 && num2 == 0) { //Mediante el codicional comprobamos que numero es igual a 0
    console.log('Los dos son igual a 0')
} else if (num1 == 0 && num2 != 0) {
    console.log('Solo el primer numero introducido es 0')
} else if (num1 != 0 && num2 == 0) {
    console.log('Solo el segundo numero introducido es 0')
} else {
    console.log('Ninguno de los dos numeros es 0')
};