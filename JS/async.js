// console.log('hello');

// function greeting(){
//     console.log('I am SetTimeout')
// }

// // setTimeout(function(){
// //     console.log('I am SetTimeout')
// // },1000);

// setTimeout(greeting,3000);

// console.log('JS');


//async-await
function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }

  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // Expected output: "resolved"
  }

  asyncCall();


// Rewriting a Promise chain with an async function
// An API that returns a Promise will result in a promise chain, and it splits the function into many parts.

function getProcessedData(url) {
    return downloadData(url) // returns a promise
      .catch((e) => downloadFallbackData(url)) // returns a promise
      .then((v) => processDataInWorker(v)); // returns a promise
  }

// it can be rewritten with a single async function as follows:

async function getProcessedData(url) {
    let v;
    try {
      v = await downloadData(url);
    } catch (e) {
      v = await downloadFallbackData(url);
    }
    return processDataInWorker(v);
  }

// Alternatively, you can chain the promise with catch():

async function getProcessedData(url) {
    const v = await downloadData(url).catch((e) => downloadFallbackData(url));
    return processDataInWorker(v);
  }


//async await will catch error in the try catch block
console.log('start')
const p =new Promise((rej)=>{
	rej(1);
})

 async function f(){
  try{
   	let x =  await p;
    console.log(x);
  }
  catch(e){
   console.log('error');
  }
}


p.then((res)=>{
	console.log('p resolved')
}).catch((rej)=>{
  console.log('error2');
})

f();

/* console.log('x') */