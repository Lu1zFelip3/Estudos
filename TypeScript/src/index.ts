let age = 5;
let nome: string = "Luiz";
const isValid: boolean = true;
let sla: any = 5;

sla = '12';
sla = true;

const ids: number[] = [1,2,3,4,5,6];
const lista: boolean[] = [true,false,true,false];
const lista2: string[] = ['Luiz felipe', 'otavio'];

//tupla
const person: [number,string] = [1, 'nome']


//Lista de Tuplas
const people: [number, string][] = [
    [2,'jane'],
    [3,'luiz'],
    [5,'Fernando']
]

// intersections
const productId: string | number = 1;

// Enum
enum direction {
    Up = 1,
    down = 2
}

const direção = direction.Up

// Type Assertions
const productName : any = 'bone';

//let itemId = productName as string;
let itemId = <string>productName

console.log(direção);
