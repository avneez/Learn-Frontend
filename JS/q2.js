//find duplicate numbers in an array if it contains multiple duplicates, delete all the duplicate numbers and trim the array to make it contain only distinct numbers also find the size and first 5 numbers of the final array?


// let arr = [1,2,3,3,2,4,5,6];
// function findDup(arr){
//     var arr2=[];
//     arr.forEach(element => {
//         if (!arr2.includes(element)) {
//             arr2.push(element);
//         }
//     });
//     return arr2;
// }
// console.log(findDup(arr));

// const myset = new Set(arr);
// console.log(myset);
// console.log(myset.size);

// console.log(arr2);

// const arr=[];
// arr.push(1);
// console.log(arr)


const obj={
    name:"avneez",
    func: function(){
        let name = "mohit"
        return ()=>{
            console.log(name);
        }
    }
}

const obj2={
    name:"avneez",
    func: function(){
        // let name1 = "mohit"
        console.log("a")
        return this;
    }
}

// console.log(obj.name)
obj.func()()
// console.log(obj.func())
// console.log(obj2.func())
// t = Object.create(obj);
// console.log(t.name)
// console.log(obj.a);
// console.log(obj.func);




// function x(){
//     for(var i=1; i<=5; i++){
//         setTimeout(function (){
//             console.log(i);
//         },i*1000)
//     }
//     console.log("Namaste");
// }
// // x();

// async function foo() {
//     await 1;
//   }

//   function foo() {
//     return Promise.resolve(1).then(() => undefined);
//   }

console.error("bye");