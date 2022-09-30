let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let resetEL = document.getElementById("reset-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}


// //function reset() {
//     let resetStr = count + " - "
//     countEl.textContent = 0
//     saveEl.textContent = 0 + " - "
//     count = 0


// }




