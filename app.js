const bill = document.querySelector("#bill");
const tip = document.querySelector("#tip");
const btn = document.querySelector(".button");
const result = document.querySelector(".result");

let a = bill.value;
let b = tip.value;

// console.log(a * b);

function add(x, y){
    console.log(x+y);
}
add(a, b);

btn.addEventListener("click", ()=>{
    add(a, b);
})


