const ListaEnlazada = require('../src/ListaEnlazada.js');

const lista = new ListaEnlazada();

console.log("----CASO BORDE: Lista Vacia----");
console.log("La lista está vacía:", lista.estaVacia());
console.log("El tamaño de la lista es:", lista.obtenerTamanio());
console.log("cabeza:", lista.cabeza);
console.log("cola:", lista.cola);

