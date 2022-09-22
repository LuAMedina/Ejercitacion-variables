let escala1 = prompt("Ingrese el destino");
let tiempo1 = prompt("Ingrese la duración del vuelo a su escala");
let escala2 = prompt("Ingrese el destino");
let tiempo2 = prompt("Ingrese la duración del vuelo a su escala");
let escala3 = prompt("Ingrese el destino");
let tiempo3 = prompt("Ingrese la duración del vuelo a su escala");
vueloCompleto = parseInt(tiempo1) + parseInt(tiempo2) + parseInt(tiempo3);
alert(`Escala 1: ${escala1}, ${tiempo1} horas
Escala 2: ${escala2}, ${tiempo2} horas
Escala 3: ${escala3}, ${tiempo3} horas
La duración total de su vuelo es de: ${vueloCompleto} horas`);