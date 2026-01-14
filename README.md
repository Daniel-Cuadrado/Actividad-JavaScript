# Práctica de Presentación JavaScript

Este proyecto ha sido creado para practicar conceptos fundamentales de JavaScript, manipulación del DOM y gestión de eventos.

## Contenido del Proyecto

1.  **Explicación de Conceptos**: Diferencias entre `let` y `var`, e impacto de ES2015.
2.  **Gestión de Eventos**: Control de visibilidad de un iframe de sonido/video.
3.  **Formularios**: Validación básica en consola al perder el foco (evento blur).

## 1. Diferencia entre let y var

En el archivo `index.html` y en la demostración de consola de `script.js` se detalla esta diferencia.

*   **`var`**:
    *   Es la forma antigua de declarar variables.
    *   Tiene **scope (ámbito) de función**. Si no estás en una función, serà global.
    *   Sufre de **Hoisting**: La declaración se mueve al inicio del ámbito, inicializándose como `undefined`.
    *   Permite redeclarar la misma variable varias veces sin error.

*   **`let`** (Introducido en ES2015):
    *   Tiene **scope de bloque**. Solo existe dentro de las llaves `{ ... }` donde fue declarada (como en un `if`, `for`, etc.).
    *   No se inicializa al principio del bloque (Temporal Dead Zone), por lo que acceder a ella antes de declararla lanza un error.
    *   No permite redeclararla en el mismo ámbito.

## 2. Qué ha supuesto ES2015 (ES6) en JavaScript

ES2015 (originalmente llamado ES6) marcó un antes y un después en el lenguaje:

*   **Modernización**: Trajo sintaxis que otros lenguajes ya tenían (Clases, Módulos).
*   **Seguridad y Limpieza**: Con `let` y `const` se evitan errores comunes de variables globales no deseadas.
*   **Legibilidad**: Las *Arrow Functions* `() => {}` y los *Template Literals* `` `Texto ${var}` `` hacen el código más fácil de leer.
*   **Asincronía**: Las **Promesas** estandarizaron la forma de manejar operaciones asíncronas, alejándonos del "Callback Hell".

## Instrucciones

1.  Abre el archivo `index.html` en tu navegador o usa una extensión como "Live Server" en VS Code.
2.  Interactúa con los botones para ver/ocultar el iframe.
3.  Escribe algo en el campo de nombre y haz clic fuera (o pulsa Tab).
4.  **Abre la consola del desarrollador (F12)** para ver los mensajes de log y validación.