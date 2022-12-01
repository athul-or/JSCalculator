// display number in textbox

function displayNum(num){
    result.value += num;
    console.log(num);
}


// clear the box


function clearBox(){
    result.value = "";
}


// evaluate expression

function evaluateExpression(){
    result.value = eval(result.value);
}



// remove last


function removeLast(){
    currentExpression = result.value;
    result.value = currentExpression.slice(0,-1);
}