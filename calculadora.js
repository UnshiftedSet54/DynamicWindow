var btnSumar = document.getElementById('Sumar');
var btnRestar = document.getElementById('Restar');
var btnMultipl = document.getElementById('multipl');
var btnDividir = document.getElementById('dividir');
var op;

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

/* function reqOperation(op) {
    var x1 = document.getElementById("x").value;
    var y1 = document.getElementById("y").value;

    var formData = new FormData();
    formData.append("x", x1);
    formData.append("y", y1);
    formData.append("op", op);

    var url = "http://localhost:8080/CalcServer/MyCalc";

    fetch(url, {
            mode: 'cors',
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .catch(console.error("Error!"))
        .then(data => document.getElementById("txt").value = data);
} */

function reqOperation(op) {
    var x1 = parseInt(document.getElementById("x").value);
    var y1 = parseInt(document.getElementById("y").value);

    switch (op) {
        case "suma":
            setValue(x1 + y1);
            break;
        case "resta":
            setValue(x1 - y1);
            break;
        case "multipl":
            setValue(x1 * y1);
            break;
        case "dividir":
            setValue(x1 / y1);
            break;
        default:
            break;
    }

}

function setValue(value) {
    document.getElementById("txt").value = value;
}