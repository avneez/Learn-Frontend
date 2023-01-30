const obj1 = {
    A: "12",
    B: 23,
    C: {
        P: 23,
        O: {
            L: 56
        },
        Q: [1, 2]
    }
};

//Flattened Obj
function flattenObj(obj){
    const finalObj ={};
    for(const i in obj){             //i is parent obj here
        if((typeof obj[i])==='object' && !Array.isArray(obj[i])){
            const temp = flattenObj(obj[i]);
            for(const j in temp){
                finalObj[i+'.'+j] = temp[j];
            }
        }
        else finalObj[i]=obj[i];
    }
    return finalObj;
};

// function flattenObj(obj){
//     const finalObj ={};
//     for(const i in obj){             //i is parent obj here
//         if((typeof obj[i])!=='object'){
//             finalObj[i]=obj[i];
//         }
//         else{
//             const temp = flattenObj(obj[i]);
//             for(const j in temp){
//                 finalObj[i+'.'+j] = temp[j];
//             }
//         }
//     }
//     return finalObj;
// };

const flattened = flattenObj(obj1);
console.log(flattened);

//Unflattened Obj
