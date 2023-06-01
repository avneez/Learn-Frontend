var character;
var age;
var isLoggedin;
var loggedInUser;
isLoggedin = true;
var ninja = [];
ninja.push('avneez');
//union arrays
// let mixed : (string|number|boolean)[] = [];
var mixed = [];
mixed.push(20);
mixed.push('hello');
mixed.push(true);
// mixed.push(null);
console.log(mixed);
var message = 'Hello World';
console.log(message);
var circ = function (diameter) {
    console.log(diameter * Math.PI);
};
circ(7.5);
var roll = 24;
roll = true;
console.log(roll);
roll = 'hello';
console.log(roll);
roll = { name: 'avneez' };
console.log(roll);
console.log('test');
//Functions
var greet;
greet = function () {
    console.log('Greetings');
};
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
add(5, 10, '20');
var minus = function (a, b) {
    return a - b;
};
var res = minus(10, 6);
var mul = function (a, b) {
    return a * b;
};
var mulRes = mul(3, 8);
console.log(mulRes);
var ninja1;
ninja1 = { name: 'Avneez', roll: 24 };
console.log(ninja1);
var logDetails = function (uid, item) {
    console.log("".concat(item, " has a uid of ").concat(uid));
};
var msg = function (user) {
    console.log("".concat(user.name, " says hello"));
};
msg({ name: 'Avneez', uid: '123' });
//Function Signatures
//eg1
var msg2;
msg2 = function (name, greeting) {
    console.log("".concat(name, " says ").concat(greeting));
};
//eg2
var calc;
calc = function (num1, num2, action) {
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
var ninjaDetails;
ninjaDetails = function (ninja) {
    console.log("".concat(ninja.name, " is ").concat(ninja.age, " years old"));
};
//with interface -> Person[]
var ninjas = [
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
var filteredNinjas = ninjas.filter(function (person) { return person.age > 30; })
    .forEach(function (person) { return ninjaDetails(person); });
//using reduce method
ninjas.reduce(function (filteredNinjas, person) {
    if (person.age > 30) {
        filteredNinjas.push(person);
    }
    return filteredNinjas;
}, []);
//In this updated code, the initial value for the reduction ([]) is explicitly cast as person[] using the as keyword. This informs TypeScript of the intended type for the filteredNinjas variable.
