//Ejercicio 5
let edad = parseInt(prompt("Introduce la edad:")); //Pido que introduzca un valor, hago un parseint para pasarlo a tipo integer y lo guardo en la variable

if (edad < 18) {
    console.log('Menor de edad');
} else if (edad >= 18 && edad < 65) {
    console.log('Adult@');
} else {
    console.log('Jubilad@');
};