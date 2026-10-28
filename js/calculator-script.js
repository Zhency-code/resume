let display = document.getElementById('inputBox');
let calculatorButtons = document.querySelectorAll('button');
let output = "";

function handleCalculatorInput(value) {
    if (value === '=') {
        if (output === "") return;

        try {
            let result = eval(output.replace(/%/g, "100%"));

            if(!Number.isFinite(result)){
                throw new Error("Cannot divide by zero");
            }

            output = String(result)
            display.value = output
        }catch (error) {
            output = "";
            display.value = "Error";
        }
    }
    
    else if (value === 'AC') {
        output = "";
        display.value = output;
    }
    else if (value === 'DEL') {
        output = output.substring(0, output.length - 1);
        display.value = output;
    }
    else {
        output += value;
        display.value = output;
    }
}

calculatorButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        handleCalculatorInput(e.target.innerHTML);
    });
});

document.addEventListener('keydown', (e) => {
    if ("0123456789./*-+%".includes(e.key)) {
        handleCalculatorInput(e.key);
    }
    else if (e.key === 'Enter') {
        handleCalculatorInput("=");
    }
    else if (e.key === 'Backspace') {
        handleCalculatorInput("DEL");
    }
    else if (e.key === 'Escape') {
        handleCalculatorInput("AC");
    }
});