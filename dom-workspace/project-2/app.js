let zero = 0;
let zeroDOM = document.getElementById("zero")
let increase = document.getElementById("increase")
let decrease = document.getElementById("decrease")

zeroDOM.innerHTML = zero

increase.addEventListener("click", clickEvent)
decrease.addEventListener("click", clickEvent)

function clickEvent() {
    this.id == "increase"
        ? zero += 1
        : zero -= 1
    zeroDOM.innerHTML = zero
}