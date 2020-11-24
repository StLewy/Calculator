const firsNumber = document.getElementById("firtNumber")
const secondNumber = document.getElementById("secondNumber")
const select = document.getElementById("select");
const count = document.getElementById("count");
let div = document.getElementById("div");
let p =document.createElement("p");
p.setAttribute("class", "bold");
let sum = 0


count.addEventListener("click", function () {
    if (firsNumber.value === "" || secondNumber.value === ""){
        alert("Podaj dwie liczby!")
    } else {
        switch (select.value) {
            case "add": {
                sum = parseInt(firsNumber.value) + parseInt(secondNumber.value)
                break
            }
            case "sub": {
                sum = parseInt(firsNumber.value) - parseInt(secondNumber.value)
                break
            }
            case "multiply": {
                sum = parseInt(firsNumber.value) * parseInt(secondNumber.value)
                break
            }
            case "divide": {
                sum = parseInt(firsNumber.value) / parseInt(secondNumber.value)
                break
            }
        }
        div.appendChild(p);
        p.innerHTML = "<p>WYNIK: " + sum + "</p>";
    }
})

