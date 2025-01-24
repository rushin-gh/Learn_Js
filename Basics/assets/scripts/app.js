let curResult = 0;
let curCalculation = '0';


addBtn.addEventListener('click', function() {
    let userInput = GetInput();
    if (!isNaN(userInput)) {
        OperateAndPrintResult('+', userInput);
    }
});

subtractBtn.addEventListener('click', function() {
    let userInput = GetInput();
    if (!isNaN(userInput)) {
        OperateAndPrintResult('-', userInput);
    }
});

multiplyBtn.addEventListener('click', function() {
    let userInput = GetInput();
    if (!isNaN(userInput)) {
        OperateAndPrintResult('*', userInput);
    }
});

divideBtn.addEventListener('click', function() {
    let userInput = GetInput();
    if (!isNaN(userInput)) {
        OperateAndPrintResult('/', userInput);
    }
});

function OperateAndPrintResult(operation, userInput) {
    switch(operation) {
        case '+':
            curResult += parseFloat(userInput);
            break;
        case '-':
            curResult -= parseFloat(userInput);
            break;
        case '*':
            curResult *= parseFloat(userInput);
            break;
        case '/':
            curResult /= parseFloat(userInput);
            break;
    }
    curCalculation = `(${curCalculation} ${operation} ${userInput})`;
    outputResult(curResult, curCalculation);
}

function GetInput() {
    return userInput.value;
}