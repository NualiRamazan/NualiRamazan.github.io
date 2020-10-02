document.getElementById("input").value = "0";

function insert(num) {
    if (document.getElementById("input").value === "0") {
        document.getElementById("input").value = "";
    }
    if (num === '.' && document.getElementById("input").value.includes('.')) return
    document.getElementById("input").value = document.getElementById("input").value + num;
    if (num === '+') {
        document.getElementById("output").value = operation() + "+";
        document.getElementById("input").value = "";
    }
    else if (num === '-'){
        document.getElementById("output").value = operation() + "-";
        document.getElementById("input").value = "";
    }
    else if (num === '*'){
        document.getElementById("output").value = operation() + "*";
        document.getElementById("input").value = "";
    }
    else if (num === '/'){
        document.getElementById("output").value = operation() + "/";
        document.getElementById("input").value = "";
    }
    else if (num === '!'){
        document.getElementById("output").value = operation() + "!";
        document.getElementById("input").value = "";
    }
    else if (num === "√"){
        document.getElementById("input").value = Math.sqrt(parseFloat(document.getElementById("input").value));
    }
    else if (num === "²"){
        document.getElementById("input").value = Math.pow(parseFloat(document.getElementById("input").value), 2);
    }
    else if (num === "sin"){
        document.getElementById("input").value = Math.sin(parseFloat(document.getElementById("input").value));
    }
    else if (num === "cos"){
        document.getElementById("input").value = Math.cos(parseFloat(document.getElementById("input").value));
    }
    else if (num === "tg"){
        document.getElementById("input").value = Math.tan(parseFloat(document.getElementById("input").value));
    }
    else if (num === "ctg"){
        document.getElementById("input").value = Math.tanh(parseFloat(document.getElementById("input").value));
    }
    else if (num === '='){
        document.getElementById("input").value = operation();
        document.getElementById("output").value = "";
    }
}



function operation() {
    a = document.getElementById("output").value;
    b = document.getElementById("input").value;
    opr = a.substring(a.length-1, a.length);
    if (a === "") {
        a = 0;
    }
    a = parseFloat(a);
    b = parseFloat(b);
    if (opr === "+" || opr === "") {
        return a+b;
    }
    else if (opr === "-") {
        return a-b;
    }
    else if (opr === "*") {
        return a*b;
    }
    else if (opr === "/") {
        return a/b;
    }
    else if (opr === "!") {
        c = 1;
        for (let i = 2; i <= a; i++) {
            c *= i;
        }
        return c;
    }
    else {
        return a;
    }
}

function clean() {
    document.getElementById("input").value = "0";
    document.getElementById("output").value = "";
}

function back() {
    var exp = document.getElementById("input").value;
    document.getElementById("output").value = exp.substring(0, exp.length-1);
}