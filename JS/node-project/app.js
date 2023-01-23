
import fetch from "node-fetch"


async function getApi(){
    const result = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await result.json();
    console.log(data)
    // console.log(result)
    return result;
}


console.log(getApi());
console.log("d")
