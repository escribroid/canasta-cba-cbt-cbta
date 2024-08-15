// mimodulo.js
export const saludo = "Hola Mundo";

export function saludar(nombre) {
    return `Hola, ${nombre}!`;
}

export class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }

    presentarse() {
        return `Hola, soy ${this.nombre}`;
    }
}