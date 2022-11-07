let btnSumar = document.getElementById('Sumar')
let btnRestar = document.getElementById('Restar')
let btnMultipl = document.getElementById('multipl')
let btnDividir = document.getElementById('dividir')

btnSumar.onclick = () => {
    reqOperation("suma");
}

btnRestar.onclick = () => {
    reqOperation("resta");
}

btnMultipl.onclick = () => {
    reqOperation("multipl");
}

btnDividir.onclick = () => {
    reqOperation('dividir');
}

/*
function reqOperation(op) {
    let x1 = document.getElementById("x").value;
    let y1 = document.getElementById("y").value;

    let formData = new FormData();
    formData.append("x", x1);
    formData.append("y", y1);
    formData.append("op", op);

    let url = "http://localhost:8080/CalcServer/MyCalc";

    fetch(url, {
            mode: 'cors',
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .catch(console.error("Error!"))
        .then(data => document.getElementById("txt").value = data);
}
*/

const reqOperation = (op) => {
    let x1 = parseInt(document.getElementById("x").value)
    let y1 = parseInt(document.getElementById("y").value)
    if(op === 'suma') return setValue(x1 + y1)
    if(op === 'resta') return setValue(x1 - y1)
    if(op === 'multipl') return setValue(x1 * y1)
    if(op === 'dividir') return setValue(x1 / y1)

}

const setValue = (value) => {
    document.getElementById("result").innerHTML = value
}