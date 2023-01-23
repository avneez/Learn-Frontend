

const fetch = require("node-fetch")
// function f() {

//     // It can be accessible any
//     // where within this function
//     var a = 10;
//     // console.log(a)
// }
// f();

// A cannot be accessible
// outside of function
// console.log(a);
// {var v=5}
//  console.log(v)


// t=5;
// var t;
// console.log(t)


// Users cannot change the properties of the const object, but they can change the value of the properties of the const object.
	// const a = {
	// 	prop1: 10,
	// 	prop2: 9
	// }

	// // It is allowed
	// a.prop1 = 3

	// // It is not allowed
	// a = {
	// 	b: 10,
	// 	prop2: 9
	// }



    //ReferenceError: Cannot access 'z' before initialization
    // z =8;
    // let z;
    // console.log(z)

	// z=8;


// var z;
// const a=8;
// {
//     let a=55;
//     var b;
//     b =9
//     let c=10;
//     const d=10;
//     console.log(a)
// }
// console.log(a)
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(z)



function getApi(){
    const result = fetch("https://jsonplaceholder.typicode.com/posts");
    return result;
}
console.log(getApi());
console.log("d")