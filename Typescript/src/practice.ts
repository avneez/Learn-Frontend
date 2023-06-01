let character: string;
let age: number;
let isLoggedin: boolean;
let loggedInUser: string;

isLoggedin = true;

let ninja: string[] = [];
ninja.push('avneez');

//union arrays
// let mixed : (string|number|boolean)[] = [];
let mixed: any[] = [];
mixed.push(20);
mixed.push('hello');
mixed.push(true);
// mixed.push(null);

console.log(mixed);

var message: string = 'Hello World';
console.log(message);

const circ = (diameter: number) => {
    console.log(diameter * Math.PI)
}
circ(7.5)


let roll: any = 24;

roll = true;
console.log(roll);
roll = 'hello';
console.log(roll);
roll = { name: 'avneez' };
console.log(roll);

console.log('test');


//Functions

let greet: Function;
greet = () => {
    console.log('Greetings')
}

const add = (a: number, b: number, c: number | string = 10): void => {
    console.log(a + b);
    console.log(c);
}

add(5, 10, '20');

const minus = (a: number, b: number) => {
    return a - b;
}
let res = minus(10, 6);

const mul = (a: number, b: number) => {
    return a * b;
}

let mulRes = mul(3, 8);
console.log(mulRes);

let ninja1: {
    name: string,
    roll: number
};

ninja1 = { name: 'Avneez', roll: 24 };
console.log(ninja1);

//type aliases
type StringOrNum = string | number;
type objWithName = { name: string, uid: StringOrNum }

const logDetails = (uid: string | number, item: string) => {
    console.log(`${item} has a uid of ${uid}`)
}

const msg = (user: objWithName) => {
    console.log(`${user.name} says hello`);
}

msg({ name: 'Avneez', uid: '123' });

//Function Signatures

//eg1
let msg2: (a: string, b: string) => void;

msg2 = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`)
}

//eg2
let calc: (a: number, b: number, c: string) => number;

calc = (num1: number, num2: number, action: string) => {
    if (action === 'add') {
        return num1 + num2
    } else {
        return num1 - num2;
    }
}

//eg3
type person = { name: string, age: number }

// interface Person {
//     name: string;
//     age: number;
// }

let ninjaDetails: (obj: person) => void

ninjaDetails = (ninja: person) => {
    console.log(`${ninja.name} is ${ninja.age} years old`)
}

//with interface -> Person[]
const ninjas: person[] = [
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
}, [] as person[]);

//In this updated code, the initial value for the reduction ([]) is explicitly cast as person[] using the as keyword. This informs TypeScript of the intended type for the filteredNinjas variable.