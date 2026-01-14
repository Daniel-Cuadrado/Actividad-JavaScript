// --- Parte 1: Gestión de Eventos (Iframe) ---

// Obtenemos referencias a los elementos del DOM
const btnMostrar = document.getElementById('btnMostrar');
const btnOcultar = document.getElementById('btnOcultar');
const iframeContainer = document.getElementById('iframeContainer');
// Seleccionamos el iframe dentro del contenedor para controlar su reproducción
const iframeVideo = iframeContainer.querySelector('iframe');
// URL del video de YouTube (Usamos un video estándar que permite inserción: Big Buck Bunny o similar)
const videoID = "aqz-KE-bpKQ"; // Big Buck Bunny
const baseUrl = `https://www.youtube.com/embed/${videoID}`;

// Evento para mostrar el iframe
btnMostrar.addEventListener('click', () => {
    // 1. Mostrar el contenedor
    iframeContainer.style.display = 'block';
    iframeContainer.classList.remove('hidden'); 
    
    // 2. Cargar el video asignando el src CON autoplay y mute
    // autoplay=1 : Reproducir automáticamente
    // mute=1     : Silenciar (Requisito de navegadores para autoplay sin interacción previa)
    iframeVideo.src = `${baseUrl}?autoplay=1&mute=1`;
    
    console.log('Evento: Iframe mostrado y cargado');
});

// Evento para ocultar el iframe
btnOcultar.addEventListener('click', () => {
    // 1. Ocultar el contenedor
    iframeContainer.style.display = 'none';
    iframeContainer.classList.add('hidden');
    
    // 2. Limpiar el src para detener el video y el sonido completamente
    iframeVideo.src = ""; 
    
    console.log('Evento: Iframe ocultado y descargado');
});


// --- Parte 2: Validación del Formulario (Blur) ---

const inputNombre = document.getElementById('nombre');

// Evento 'blur' se dispara cuando el elemento pierde el foco (al salir de la caja de texto)
inputNombre.addEventListener('blur', (evento) => {
    const valor = evento.target.value.trim(); // Eliminamos espacios al inicio y final

    if (valor === "") {
        console.error("ERROR: El usuario no ha introducido su nombre.");
        // Opcional: También podríamos mostrar un alert o cambiar el estilo del borde
        inputNombre.style.borderColor = "red";
    } else {
        console.log(`Nombre introducido correctamente: ${valor}`);
        inputNombre.style.borderColor = "green";
    }
});


// --- Parte 3: Demostración en Consola (let vs var) ---

console.group("Demostración: let vs var");

console.log("--- Ejemplo con VAR ---");
// Var tiene ámbito de función y permite redeclaración
var tester = "hey, hola";
var tester = "decir hola de nuevo"; // No da error
console.log("valor de tester (var):", tester);

if (true) {
    var ambitoVar = "Soy visible fuera del if";
}
console.log(ambitoVar); // Funciona!


console.log("--- Ejemplo con LET ---");
// Let tiene ámbito de bloque
let hello = "di hola";
// let hello = "di hola de nuevo"; // Esto lanzaría un error: SyntaxError: Identifier 'hello' has already been declared

if (true) {
    let ambitoLet = "Soy invisible fuera del if";
    console.log("Dentro del bloque:", ambitoLet);
}
try {
    console.log(ambitoLet); // Esto dará error
} catch (e) {
    console.warn("Error esperado al acceder a let fuera de bloque:", e.message);
}

console.groupEnd();