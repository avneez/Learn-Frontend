// //Map

// const avn =[1,2];

const mp = new Map();

const key1 = 'str1', key2 = {}, key3 = function () { };

// //setting map values
mp.set(key1, 'this is a string');
mp.set(key2, 'this is a blank object');
mp.set(key3, 'this is an empty function');
console.log(mp);

// //getting the values from a map
// let value1 = mp.get(key1);
// console.log(value1);

// //size
// console.log(mp.size);

// //loop ...for...of
// for (let [key, value] of mp) {
//     console.log('key is', key)
// }

// //get keys only
// for(let key of mp.keys()){
//     console.log('value is', key)
// }

//forEach
mp.forEach((value,key)=>{
    console.log('key is',key)
    console.log('value is',value)
})

// //converting map to an array
// let myArray = Array.from(mp);
// console.log('Map toarray is', myArray)

// //converting map keys to an aray
// let myKeysArray = Array.from(mp.keys());
// console.log('map to keys arrray is', myKeysArray);

// //converting map keys to an aray
// let myValuesArray = Array.from(mp.values());
// console.log('map to key arrray is', myValuesArray);


// //Set
const mySet= new Set();
// console.log('the set looks like', mySet);

mySet.add('this');
mySet.add('Avneez');
mySet.add(34);
mySet.add(true);
// console.log('mySet looks like', mySet);

// let mySet2 = new Set([1,45,'this',true,{a:4, b:8},'this']);

// console.log(mySet2.size);

// console.log(mySet.has(36));

// console.log('before removal', mySet);
// mySet.delete(this);
// console.log('after removal', mySet);


// let x=5;
// let y='5';

// console.log(x===y)  //equal value and equal type
// console.log(x==y)


// int ans=0;
//     while(numm>0){
//         int rem =numm%10;
//         ans+=rem*10;
//         numm=numm/2;
//     }
//     return ans;
// }

// var myMap = {};
// var key = "a", value=1;
// myMap[key] = value;
// console.log(myMap)


// let arr=[1,1,[2,3,3],[3,3,4]];
// let arr2=[[1,1],[2,3,3],[3,3,4]];
// let s= new Set([{a:4},{b:2},{a:2},{a:1}],[{a:1}],[{a:2}]);
// let s2 = new Set(arr)
// console.log(s);

// console.log(s2);