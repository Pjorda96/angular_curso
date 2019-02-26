"use strict";
function saludar(nombre) {
    console.log('Hola ' + nombre);
}
var wolverine = {
    'nombre': 'Logan'
};
saludar(wolverine.nombre.toUpperCase());
