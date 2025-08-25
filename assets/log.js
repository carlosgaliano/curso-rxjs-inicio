// Función personalizada que crea un elemento y lo añade al body
var myLogger = function(args) {
    var log = document.createElement("p"); // Crea un nuevo elemento div
    log.style.color= "#000";
    // Puedes personalizar cómo se muestra el contenido aquí
    log.style.textAlign= "left";
    log.innerHTML = args.join(" "); // Une los argumentos en una cadena
    // document.body.appendChild(log); // Añade el elemento al final del body
    return log;
};

// Guarda el console.log original para poder llamarlo si es necesario
var originalConsoleLog = console.log;
var content = document.createElement("div");
content.style.border = "1px solid red";
content.style.padding = "12px";
content.style.backgroundColor= "#fff";
content.style.color= "#000";

// Sobrescribe console.log para usar tu función personalizada
console.log = function() {

    let cadena = myLogger(Array.prototype.slice.call(arguments)); // Llama a tu logger con los argumentos
    // Si también quieres que se muestre en la consola del navegador, descomenta la línea de abajo
    originalConsoleLog.apply(console, arguments);
    content.appendChild(cadena);
    document.body.prepend(content);
};
