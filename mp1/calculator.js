
// document.getElementById('submitBtn')
//     .addEventListener('click', () => {
//         document.getElementById("alt-output").style.display = "block";
//         document.getElementById("alt-output").innerHTML='<h4>You did not give me a number</h4>';
//         document.getElementById("main-output").style.display = "none";
//     });

function addition() {
    event.preventDefault();
    let first = document.getElementById("first_num").value
    first = Number(first)
    let second = document.getElementById("second_num").value
    second = Number(second)
    let result = first + second

    document.getElementById("result").innerHTML = `<p>${result}</p>`
    if (result < 0) {
        document.getElementById("result").style.color = 'red'
    }
    else {
        document.getElementById("result").style.color = 'black'
    }
}
function subtraction() {
    event.preventDefault();
    let first = document.getElementById("first_num").value
    first = Number(first)
    let second = document.getElementById("second_num").value
    second = Number(second)
    let result = first - second

    document.getElementById("result").innerHTML = `<p>${result}</p>`
    if (result < 0) {
        document.getElementById("result").style.color = 'red'
    }
    else {
        document.getElementById("result").style.color = 'black'
    }
}
function multiplication(){
    event.preventDefault();
    let first = document.getElementById("first_num").value
    first = Number(first)
    let second = document.getElementById("second_num").value
    second = Number(second)
    let result = first * second

    document.getElementById("result").innerHTML = `<p>${result}</p>`
    if (result < 0) {
        document.getElementById("result").style.color = 'red'
    }
    else {
        document.getElementById("result").style.color = 'black'
    }
}
function division(){
    event.preventDefault();
    let first = document.getElementById("first_num").value
    first = Number(first)
    let second = document.getElementById("second_num").value
    second = Number(second)
    let result = first / second

    document.getElementById("result").innerHTML = `<p>${result}</p>`
    if (result < 0) {
        document.getElementById("result").style.color = 'red'
    }
    else {
        document.getElementById("result").style.color = 'black'
    }
}
function power() {
    event.preventDefault();
    let first = document.getElementById("first_num").value
    first = Number(first)
    let second = document.getElementById("second_num").value
    second = Number(second)
    let result = 1

    for (let i=0; i<second; i++) {
        result *= first
    }
    document.getElementById("result").innerHTML = `<p>${result}</p>`
    if (result < 0) {
        document.getElementById("result").style.color = 'red'
    }
    else {
        document.getElementById("result").style.color = 'black'
    }
}
function clearInput(){
    event.preventDefault();
    for (const elm of document.getElementsByClassName("input")) {
        elm.value = ""
    }
    document.getElementById("result").innerHTML = "<br>"
}
