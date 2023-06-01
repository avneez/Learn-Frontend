"use strict";
let character;
let age;
let isLoggedin;
let loggedInUser;
isLoggedin = true;
let ninja = [];
ninja.push('avneez');
//union arrays
// let mixed : (string|number|boolean)[] = [];
let mixed = [];
mixed.push(20);
mixed.push('hello');
mixed.push(true);
// mixed.push(null);
console.log(mixed);
var message = 'Hello World';
console.log(message);
const circ = (diameter) => {
    console.log(diameter * Math.PI);
};
circ(7.5);
let roll = 24;
roll = true;
console.log(roll);
roll = 'hello';
console.log(roll);
roll = { name: 'avneez' };
console.log(roll);
console.log('test');
//Functions
let greet;
greet = () => {
    console.log('Greetings');
};
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10, '20');
const minus = (a, b) => {
    return a - b;
};
let res = minus(10, 6);
const mul = (a, b) => {
    return a * b;
};
let mulRes = mul(3, 8);
console.log(mulRes);
let ninja1;
ninja1 = { name: 'Avneez', roll: 24 };
console.log(ninja1);
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const msg = (user) => {
    console.log(`${user.name} says hello`);
};
msg({ name: 'Avneez', uid: '123' });
//Function Signatures
//eg1
let msg2;
msg2 = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
//eg2
let calc;
calc = (num1, num2, action) => {
    if (action === 'add') {
        return num1 + num2;
    }
    else {
        return num1 - num2;
    }
};
// interface Person {
//     name: string;
//     age: number;
// }
let ninjaDetails;
ninjaDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
//with interface -> Person[]
const ninjas = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Alice', age: 35 },
    { name: 'Bob', age: 40 },
    { name: 'Eve', age: 45 },
];
// Using for...of loop
// for (const person of ninjas) {
//     ninjaDetails(person);
// }
// Using forEach method
// ninjas.forEach((person) => {
//     ninjaDetails(person);
// });
//printing ninjas of age>30
const filteredNinjas = ninjas.filter(person => person.age > 30)
    .forEach(person => ninjaDetails(person));
//using reduce method
ninjas.reduce((filteredNinjas, person) => {
    if (person.age > 30) {
        filteredNinjas.push(person);
    }
    return filteredNinjas;
}, []);
//In this updated code, the initial value for the reduction ([]) is explicitly cast as person[] using the as keyword. This informs TypeScript of the intended type for the filteredNinjas variable.
