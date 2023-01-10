var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// outputDiv.innerText = "Ayush"
// console.log("Input", txtInput.value)

function clickEventHandler(){
    outputDiv.innerText = "bvmbbmadsbvm" + txtInput.value
    
}

btnTranslate.addEventListener("click",clickEventHandler)

