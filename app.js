const bill = document.querySelector("#bill");
const tip = document.querySelector("#tip");
const btn = document.querySelector(".button");
const result = document.querySelector(".result");

let a = bill.value;
let b = tip.value;

// console.log(a * b);

function calcTip(){
    let billVal = bill.value;
    let tipVal = tip.value;
    let totalVal = billVal * (+tipVal / 100);
    result.innerHTML = `Total Bill : ${totalVal}`;
}

btn.addEventListener("click", calcTip);


