
var scanf = require('scanf');

console.log('Por favor digite su nota');
let nota = scanf('%d');

if (nota == 0 || nota < 3) {
    console.log(`su nota es ${nota}, calificacion: muy deficiente`);
} else if (nota < 3 || nota < 5) {
    console.log(`su nota es ${nota}, calificacion: Insuficiente`);
} else if (nota < 5 || nota < 6) {
    console.log(`su nota es ${nota}, calificacion: Suficiente`);
} else if (nota < 6 || nota < 7) {
    console.log(`su nota es ${nota}, calificacion: Bien`);
} else if (nota < 7 || nota < 9) {
    console.log(`su nota es ${nota}, calificacion: Notable`);
} else if (nota <= 10) {
    console.log(`su nota es ${nota}, calificacion: Sobresaliente`);
}