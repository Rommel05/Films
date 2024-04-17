function contarFS(cadena) {
    let contador = 0;
    let caracter;
    for (let i = 0; i <= cadena.length; i++) {
        caracter = cadena[i]; 
        if (caracter === 'F') {
            contador += 1;
        }
    }
    return contador;
}

console.log(contarFS(prompt('Introduce una cadena')));

function contarCaracteres(cadena1, letra) {
    let contador1 = 0;
    let caracter1;
    for (let i = 0; i <= cadena1.length; i++) {
        caracter1 = cadena1[i];
        if (caracter1 == letra) {
            contador1 ++;
        }
    }
    return contador1;
}

console.log(contarCaracteres(prompt('Introduce una cadena'), prompt('Introduce la letra')));