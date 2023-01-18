// let promise = new Promise(function(resolve, reject){
//     alert("Hello");
//     resolve(56);
// })

// console.log("Hello 1");
// setTimeout(function(){
//     console.log("Hello 2 in 2 seconds")
// },2000)

// console.log("My name is Hello 3")
// console.log(promise)


let p1 = new Promise((resolve,reject)=>{
    console.log("Promise is pending")
    setTimeout(()=>{
        alert("I am a promise and I am resolved")
        resolve(true);
    },5000)
})
console.log(p1);


let p2 = new Promise((resolve,reject)=>{
    console.log("Promise is pending")
    setTimeout(()=>{
        alert("I am a promise and I am rejected")
        reject(new Error("I am an error"))
    },5000)
})
console.log(p2);

p1.then((value)=>{
    console.log(value)
})

// p2.then((value)=>{
//     console.log(value)
// })

p2.catch((error)=>{
    console.log("Some Error occured in p2")
})

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

      