


window.onload = function () {

    const count = document.getElementById('count');
    const div = document.getElementById('container');
    const p =document.createElement('p');
    p.setAttribute("class", 'bold');
    let sum = 0;

    count.addEventListener("click", function () {
        const select = document.getElementById('selected');
        let firstNumber = parseFloat(document.getElementById('firstNumber').value);
        let secondNumber = parseFloat(document.getElementById('secondNumber').value);

        if (!isNaN(firstNumber)  && !isNaN(secondNumber)) {
            switch (select.value) {
                case "add": {
                    sum = firstNumber + secondNumber
                    break
                }
                case "sub": {
                    sum = firstNumber - secondNumber
                    break
                }
                case "multiply": {
                    sum = firstNumber * secondNumber
                    break
                }
                case "divide": {
                    sum = firstNumber / secondNumber
                    break
                }
            }
            div.appendChild(p);
            p.innerHTML = "<p>WYNIK: " + sum + "</p>";
        } else   { alert ("Podaj dwie liczby!")}
    })
}
