const nombre = prompt('¿Cuál es tu nombre?');
const edad = prompt('¿Cuántos años tienes?');
const lenguaje = prompt('¿Qué lenguaje de programación estás estudiando?');

alert(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`);

const band = prompt(`¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO.`);

if (band== 1) {
    alert('¡Muy bien! Sigue estudiando y tendrás mucho éxito.');
} else if (band == 2) {
    alert('Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?');
} else {
    alert(`ERROR: Debias introducir "1" o "2" e introduciste ${band}`);
}