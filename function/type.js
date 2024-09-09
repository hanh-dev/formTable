// 1. Function Declaration
function add(a){
    return a;
}
function displayAdd(){
    const take = document.getElementById("take").value;
    const result = add(take);
    document.getElementById("test").innerHTML = result;
}
// 2. Function Expresstion
const multiply = function(a,b){
    return a+b;
}
console.log(multiply(5,6))
// 3. Function Arrow
const divice = (a, b) => a/b;
console.log("Ket qua cua phep chia")
console.log(divice(5,5))
function circle(r){
    return Math.PI * r * r;
}
console.log(circle(2))