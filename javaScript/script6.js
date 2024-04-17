//Ejercicio 6
function saludar(nombre) { //Esta función
    let mensaje = 'Bienvenid@ ' + nombre;
    return console.log(mensaje);
};

saludar(prompt('Introduce un nombre: '));