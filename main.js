
const resultsElement = document.getElementById("res_num")
const input1 = document.getElementById("input_1")
const input2 = document.getElementById("input_2")
const buttonRes = document.getElementById("button_result")
const buttonPlus = document.getElementById("button_plus")
const buttonMinus = document.getElementById("button_minus")
const buttonDivide = document.getElementById("button_div")
const buttonMultiply = document.getElementById("button_mult")
let action = "+"


buttonPlus.onclick = function () {
    action = "+"
}

buttonMinus.onclick = function () {
    action = "-"
}

buttonDivide.onclick = function () {
    action = "/"
}

buttonMultiply.onclick = function() {
    action = "*"
}

function printRes (result) {
    if (result < 0) {
        resultsElement.style.color = "red"
    } else {
        resultsElement.style.color = "green"
    }
    resultsElement.textContent = result
}

buttonRes.onclick = function () {
    if (action == "+") {
        const sum = Number(input1.value) + Number(input2.value)
        printRes(sum)
    } else if (action == "-") {
        const sum = Number(input1.value) - Number(input2.value)
        printRes(sum)
    } else if (action == "/") {
        const sum = Number(input1.value) / Number(input2.value)
        printRes(sum)
    } else {
        const sum = Number(input1.value) * Number(input2.value)
        printRes(sum)
    }
}