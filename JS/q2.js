//find duplicate numbers in an array if it contains multiple duplicates, delete all the duplicate numbers and trim the array to make it contain only distinct numbers also find the size and first 5 numbers of the final array?


let arr = [1,2,3,3,2,4,5,6];
function findDup(arr){
    var arr2=[];
    arr.forEach(element => {
        if (!arr2.includes(element)) {
            arr2.push(element);
        }
    });
    return arr2;
}
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
    func: function (){
        let name = "mohit"
        return ()=>{
            console.log(name);
        }
    }
}

console.log(obj.func());