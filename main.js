const AddBtn = document.querySelector("button")
const inputField = document.querySelector("input[type='text']")
const acitvityField = document.querySelector(".activity");

AddBtn.addEventListener("click", function (event) {
    event.preventDefault();
    let text = inputField.value;
    if (text !== "") {
        let itemLi = document.createElement('li');
        let itemContent = document.createTextNode(`${text}`);
        itemLi.appendChild(itemContent)
        acitvityField.appendChild(itemLi);
        inputField.value = ""

        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        span.style.cssText = `font-size: 20px;position: absolute;right: -8px;top: 50%;
        transform: translateY(-50%);`
        itemLi.appendChild(span);
    }
    else {
        window.alert("You Must Write An Activity")
    }
})

acitvityField.addEventListener("click", function (e) {
    if (e.target.tagName == "LI") {
        e.target.classList.toggle("checked");
        saveDate();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveDate();
    }
}, false)

function saveDate() {
    window.localStorage.setItem("date", acitvityField.innerHTML);
}
function showDate() {
    acitvityField.innerHTML = window.localStorage.getItem('date');
}
showDate();