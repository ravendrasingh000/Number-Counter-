const changeCount = document.querySelector("#change-count");
const btn = document.querySelectorAll("button");
let current = 0;

function updateDisplay() {
    if (current > 0) {
        changeCount.style.color = "blue";
    } else if (current < 0) {
        changeCount.style.color = "red";
    } else {
        changeCount.style.color = "black";
    }
}

btn[0].addEventListener("click",()=> {
    current  -= 1;
    changeCount.innerText = current;
    updateDisplay()
})

btn[2].addEventListener("click",()=> {
    current  += 1;
    changeCount.innerText = current;
    updateDisplay()
})

btn[1].addEventListener("click", ()=> {
    current = 0;
    changeCount.innerText = '0';
    updateDisplay()
})  

