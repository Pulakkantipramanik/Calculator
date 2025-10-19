let userInput=document.getElementById("input")
let expression =""

function click1(x){
    expression = expression+ x
    userInput.value = expression
}
function equal(){
    expression =eval(expression)
    userInput.value = expression
}
function erase(){
    expression=""
    userInput.value= expression

}



