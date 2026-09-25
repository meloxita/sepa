const name = "Adalberto López";

let age = 33;

let proyectoFavorito = "Mi App Web";
let NOMBRE = "Carlos Gómez";

function mostrarProyecto(nombreProyecto) {
    console.log(nombreProyecto);
}

mostrarProyecto(proyectoFavorito);
mostrarProyecto("Proyectofafafantasmeee");

console.log(NOMBRE.toUpperCase());

let edad = parseInt(prompt("Por favor, ingresa tu edad:"));

switch (true) {
    case (edad <= 17):
        alert("Eres un weoncitoo.");
        break;
    case (edad === 18):
        alert("Eres un weon weonado.");
        break;
    case (edad >= 19):
        alert("Eres un weon adulte.");   
    break;
    default:
        alert("LOL QUE MAL.");
        break;
}