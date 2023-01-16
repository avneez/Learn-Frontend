//Q1. Write aprogram to show different alerts when different buttons are clicked.


//Q2. Create a website which is capable of storing bookmarks of yourfavorite websites using href.

//Q3. Repeat Q2 using event listeners

// document.getElementById("google").addEventListener("click", function(){
//     window.location = "https://google.com";
//     win.focus();
// })

// document.getElementById("fb").addEventListener("click", function(){
//     window.location = "https://www.facebook.com/"
//     win.focus();
// })



//Q4. Write a JS program to keep fetch contents of a website (every 5 seconds)
// const fetchContent = async(url)=>{
//     con = await fetch(url);
//     let a =await con.json();
//     return a;
// }

// setInterval(async function(){
//     let url = "https://jsonplaceholder.typicode.com/todos/1"
//     console.log(await fetchContent(url))
// ,3000})



//Q5. Crete a glowing bulb effect using classlist toggle in JS.
// setInterval(async function(){
//     document.querySelector("#bulb").classList.toggle("bulb");
// },300);