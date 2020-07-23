const displayArea = document.querySelector("#display-area")
const clearButton = document.querySelector("#clear-button")
const evalButton = document.querySelector("#eval-button")



clearButton.addEventListener("click", () => displayArea.textContent = "")

for (let element of document.querySelectorAll('.add-content-button')) {
    element.addEventListener("click", (event) => displayArea.textContent += event.target.textContent)
}

evalButton.addEventListener("click", () => displayArea.textContent = eval(displayArea.textContent))


/* equivalent less fancy way of doing arrow function stuff is below
function clearContentArea () {
    displayArea.textContent = ""
    return
}

function addToContentArea (event) {
    let target = event.target
    displayArea.textContent += target.textContent
    return
}

function evalContentArea () {
    displayArea.textContent = eval(displayArea.textcontent)
    return
}

clearButton.addEventListener("click", clearContentArea)
evalButton.addEventListener("click", evalContentArea)

for (let element of document.querySelectorAll('.add-content-button')) {
    element.addEventListener("click", addToContentArea)
}
*/