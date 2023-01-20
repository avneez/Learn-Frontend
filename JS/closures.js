function add(){
    let counter=0;
    function plus(){
        counter+=1;
    }
    plus();
    return counter;
}
let c1=add()+add()+add();  //3

add(); add(); add(); //3

// console.log(counter); //reference error
// console.log(c1);

//using closure
const addd = (function(){
    let counter=0;
    return function(){
        counter+=1;
        return counter;
    }
})();
// console.log(addd())
// let c2=addd()+addd();
for(let i=0;i<3;i++){
    addd();
}
// console.log(c2);
// console.log(addd())


