class Cola {

constructor() {

this.frente = null;

this.final = null;

this.cantidad = 0;

}
encolar(dato) {

const nuevo = new Nodo(dato);

if (this.final) this.final.siguiente = nuevo;

else this.frente = nuevo;

this.final = nuevo;

this.cantidad++;

}
desencolar() {

if (!this.frente) return null;

const dato = this.frente.dato;

this.frente = this.frente.siguiente;

if (!this.frente) this.final = null;

this.cantidad--;

return dato;

}

verFrente() {

return this.frente ? this.frente.dato : null;

}

estaVacia() {

return this.cantidad === 0;

}

tamanio() {

return this.cantidad;

}

} 