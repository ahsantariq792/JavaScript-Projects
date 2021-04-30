function add(a, b) {
    var ans = a + b
    return ans
}

function subtract(a, b) {
    var ans = a - b
    return ans
}

function multiply(a, b) {
    var ans = a * b
    return ans
}

function divide(a, b) {
    var ans = a / b
    return ans
}

a = +prompt("Enter First Number")
b = +prompt("Enter Second Number")
alert("Select Operation You Want to Perform")

c = +prompt("Press 1 for Addition, Press 4 for Subtraction, Press 3 for Multiplication <br> Press 4 for Division")

if (c==1){
    alert(add(a,b))
}

else if (c==2){
    alert(subtract(a,b))
}
else if (c==3){
    alert(multiply(a,b))
}
else if (c==4){
    alert(divide(a,b))
}

else{
    alert("Invalid Input")
}