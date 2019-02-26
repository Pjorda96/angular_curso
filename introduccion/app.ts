function saludar( nombre:string ) {
    console.log('Hola ' + nombre);
}

let wolverine = {
    'nombre': 'Logan'
};

saludar (wolverine.nombre.toUpperCase());