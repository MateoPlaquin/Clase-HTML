// Trabajo Verde
// var nombre = prompt("¿Cuál es tu nombre?");

// alert("Hola " + nombre + " bienvenido a la página de teoría");

// var edad = prompt("¿Cuál es tu edad?");
// console.log(edad);

// alert("Tu edad es " + edad + ' y tu nombre es ' + nombre);
 
// var nombre = 'Mateo';
// var edad = 17;
// var cumpleaños = '26 de septiembre';
// var ciudad = 'La Plata';
// var ocupacion = 'Estudiante';
// var pasaTiempo = 'Jugar videojuegos';

// console.log('Mi nombre es ' + nombre + ' tengo ' + edad + ' años, nací el ' + cumpleaños + ' y vivo en ' + ciudad + '. Soy ' + ocupacion + ' y me gusta ' + pasaTiempo + '.');

// var Vida = 'Mateo', edad = 17, cumpleaños = '26 de septiembre', ciudad = 'La Plata', ocupacion = 'Estudiante', pasaTiempo = 'Jugar videojuegos';

// Trabajo Amarillo;
// var texto = prompt('Ingrese un texto');
// imput = texto;
// console.log(imput.length);

// var edad = prompt('Ingrese su edad');
// var dias = edad * 365;
// console.log('Usted vivió ' + dias + ' días');

// var numero1 = prompt('Ingrese un número');
// var numero2 = prompt('Ingrese otro número');
// var resultado = parseInt(numero1) + parseInt(numero2);
// console.log(resultado);

// Trabajo Violeta

var edad = 17;
var edadMaxima = 95;
var snackFavorito = 'Alfajor de oreo';
var snackPorDia = 1;
var Precio = 90;

var snackTotal = (edadMaxima - edad) * 365 * snackPorDia;
var snackTotalPrecio = snackTotal * Precio;

console.log('Vas a necesitar ' + snackTotal + ' snacks para que te alcancen hasta los ' + edadMaxima + ' años');
console.log('Vas a gastar $' + snackTotalPrecio + ' en snacks para que te alcancen hasta los ' + edadMaxima + ' años');

var diasViaje = 14; 
var dineroViaje = 24500;
var comida = 4 * 14;
var presupuestoComida = (dineroViaje - comida) / comida;

alert ("Podes gastar hasta $" + presupuestoComida + " por comida para que te alcance la plata durante los " + diasViaje + " dias de viaje");