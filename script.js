function add(value) {
    document.getElementById("display").value += value;
}

function clearAll() {
    document.getElementById("display").value = "";
}

function erase() {
    let val = document.getElementById("display").value;
    document.getElementById("display").value = val.slice(0, -1);
}

function calculate() {
    let exp = document.getElementById("display").value;

    exp = exp.replace(/÷/g, "/");
    exp = exp.replace(/×/g, "*");

    document.getElementById("display").value = eval(exp);
}
