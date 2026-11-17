const Nodo = require('../src/Nodo.js');



const nodo1 = new Nodo({
    fecha: '02/02',
    motivo: 'vacunación',
    veterinario: 'Dra. Ríos',
    costo: 85000,
});

const nodo2 = new Nodo({
    fecha: '15/03',
    motivo: 'control de peso',
    veterinario: 'Dr. Gómez',
    costo: 40000,
});

const nodo3 = new Nodo({
    fecha: '20/05',
    motivo: 'limpieza dental',
    veterinario: 'Dra. Ríos',
    costo: 150000,
});

nodo1.siguiente = nodo2;
nodo2.siguiente = nodo3;
nodo3.siguiente = null; 

const cabeza = nodo1;
let actual = cabeza;

while (actual !== null) {
    console.log(actual.dato);
    actual = actual.siguiente;
}


let acumulador = 0;
actual = cabeza; 
while (actual !== null) {
    acumulador += actual.dato.costo;
    actual = actual.siguiente;
}

console.log(`El costo total de las atenciones es: ${acumulador}`);