let counter = localStorage.getItem("counter") ? Number(localStorage.getItem("counter")) : 0
let counterDOM = document.getElementById("zero")
let increase = document.getElementById("increase")
let decrease = document.getElementById("decrease")

counterDOM.innerHTML = counter

increase.addEventListener("click", clickEvent)
decrease.addEventListener("click", clickEvent)

function clickEvent() {
    this.id == "increase"
        ? counter += 1
        : counter -= 1
    localStorage.setItem("counter", counter)
    counterDOM.innerHTML = counter
}