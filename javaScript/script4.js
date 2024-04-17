//Ejercicio 4
let nota = parseInt(prompt("Introduce la nota:")); //Pido que introduzca un valor, hago un parseint para pasarlo a tipo integer y lo guardo en la variable

if (nota >= 0 && nota <= 10) { //Mendiante este condicional determinamos la calificación según la nota
    if (nota >= 0 && nota < 3) {
        console.log('Insuficiente');
    } else if (nota >= 3 && nota < 5) {
        console.log('Regular');
    } else if (nota >= 5 && nota < 6) {
        console.log('Suficiente');
    } else if (nota >= 6 && nota < 7) {
        console.log('Bien');
    } else if (nota >= 7 && nota < 9) {
        console.log('Muy bien');
    } else {
        console.log('Excelente');
    }
} else {
    console.log('La nota debe estar entre el 0 y el 10');
};