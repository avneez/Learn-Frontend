let str1="heykim";
let str2="ehyik";

function isAnagram(str1, str2){
    if(str1.length!==str2.length){
        return false;
    }
    return str1.sort()===str2.sort();
}
console.log(isAnagram(str1,str2));
