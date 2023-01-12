// //map method
// let arr=[45,23,21]
// let a=arr.map((value,index,array)=>{
//     console.log(value,index,array)
//     return value+index
// })
// console.log(a)

// //filter method
// let arr2=[45,23,21,0,3,5]
// let a2=arr2.filter((a)=>{
//     return a<10
// })
// console.log(a2)

// //reduce method
// let arr3 = [1,2,3,4,5,2,1]
// const reduce_func = ((h1,h2)=>{
//     return h1+h2
// })
// let newarr3=arr3.reduce(reduce_func)
// console.log(newarr3)


//Q1. Write a program to print hello and world each after 2 seconds delay
const fun = async(text)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(text)
        }, 2000)
    })
}

(async()=>{
    let text=await fun("Hello")
    console.log(text)
    text=await fun("World")
    console.log(text)
})()


//Write a JS program to find average of numbers in an array using spread syntax
const average = array => array.reduce((a, b) => a + b) /array.length;
let x=[1,3,5,1]
console.log(average(x))