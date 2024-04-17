function esMayor(num1, num2) {
    if (num1 > num2) {
        return true;
    } else {
        return false;
    }
}

function dameUnNumero() {
    return parseInt(prompt('dame un numero: '));
}

let num1, num2;

do {
    num1 = dameUnNumero();
    num2 = dameUnNumero();
    if (esMayor(num1, num2)) {
        console.log("El primero es mayor.");
    } else {
        console.log("El segundo es mayor. FIN de la ejecución.");
    }
} while (num1 > num2);
