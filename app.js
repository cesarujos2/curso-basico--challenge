// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


const input = document.getElementById("amigo");
const textError = document.getElementById("text-error");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

class Amigos {
    constructor() {
        this.amigos = [];
    }

    agregarAmigo(nombre) {
        this.amigos.push(nombre);
        if (this.amigosChangeCallback) {
            this.amigosChangeCallback(this.amigos);
        }
    }

    olvidarseAmigos(){
        this.amigos = [];
        if (this.amigosChangeCallback) {
            this.amigosChangeCallback(this.amigos);
        }
    }

    obtenerAmigos() {
        return this.amigos;
    }

    obtenerAmigoAleatorio() {
        const amigos = this.obtenerAmigos();
        if (amigos.length === 0) {
            return null;
        }
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        return amigos[indiceAleatorio];
    }

    onAmigosChange(callback) {
        this.amigosChangeCallback = callback;
    }
}


function inputChange() {
    textError.innerText = "";
}

const amigos = new Amigos();

amigos.onAmigosChange((amigos) => {
    listaAmigos.innerHTML = "";
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
})

function agregarAmigo(event) {
    event.preventDefault();
    const nombre = input.value;
    if (!nombre || nombre.length === 0) {
        textError.innerText = "El nombre no puede estar vacío.";
        return;
    }
    amigos.agregarAmigo(nombre);
    input.value = "";
}

function sortearAmigo(){
    const amigo = amigos.obtenerAmigoAleatorio();
    if (amigo) {
        resultado.innerHTML = `El amigo secreto es ${amigo}`;
    }
}

function resetearSorteo(){
    amigos.olvidarseAmigos();
    listaAmigos.innerHTML = "";
    resultado.innerHTML = "";
    textError.innerText = "";
    input.value = "";
}
