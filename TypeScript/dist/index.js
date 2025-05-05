"use strict";
let age = 5;
let nome = "Luiz";
const isValid = true;
let sla = 5;
sla = '12';
sla = true;
const ids = [1, 2, 3, 4, 5, 6];
const lista = [true, false, true, false];
const lista2 = ['Luiz felipe', 'otavio'];
//tupla
const person = [1, 'nome'];
//Lista de Tuplas
const people = [
    [2, 'jane'],
    [3, 'luiz'],
    [5, 'Fernando']
];
// intersections
const productId = 1;
// Enum
var direction;
(function (direction) {
    direction[direction["Up"] = 1] = "Up";
    direction[direction["down"] = 2] = "down";
})(direction || (direction = {}));
const direção = direction.Up;
console.log(direção);
