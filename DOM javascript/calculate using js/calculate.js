let  input = document.getElementById("screen");
function add(value) {
    input.value +=value;
}
function calculate() {
    input.value = eval(input.value);
}
function clearscreen() {
    input.value = '';
}