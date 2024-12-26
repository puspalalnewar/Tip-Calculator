const bill = document.querySelector("#bill");
const tip = document.querySelector("#tip");
const btn = document.querySelector(".button");
const result = document.querySelector(".result");

function calcTip(){
    let billVal = bill.value;
    let tipVal = tip.value;
    let totalVal = billVal * (1+tipVal / 100);
    result.innerHTML = `Total Bill : ${totalVal}`;
}

btn.addEventListener("click", calcTip);


