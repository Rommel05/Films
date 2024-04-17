//Ejercicio 7
function parOimpar(num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
};

let res = parOimpar(parseInt(prompt('Introduce un numero: ')));

if (res == true) {
    console.log('Es par')
} else {
    console.log('Es impar')
};