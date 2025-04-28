let number = '';
let number1 = '';
let operator = '';
let result = 0;
let body = document.querySelector('body');
let buttons = document.querySelectorAll("button");
let display = document.querySelector('#displayNumber');
let calculator = document.querySelector("#calculator");

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        let user = event.target.id;

        if (display.innerText.length < 15) {  
            if (user.startsWith('btn')) {
                let digit = user.slice(3); 
                number += digit; 
                display.innerText = number;
            } 
            else if (user === 'decimal') {
                if (!number.includes('.')) { 
                    if (number === '') {
                        number = '0.';
                    } else {
                        number += '.';
                    }
                    display.innerText = number;
                }
            } 
            else if (user === 'allClear') {
                number = '';
                number1 = '';
                operator = '';
                result = 0;
                display.innerText = 0;
            } 
            else if (user === 'clear') {
                number = number.slice(0, -1); 
                display.innerText = number || 0;
            } 
            else if (user === 'plus' || user === 'minus' || user === 'multiply' || user === 'divide') {
                number1 = number;
                number = ''; 
                operator = user; 
            } 
            else if (user === 'equal') {
                if (number1 !== '' && number !== '') {
                    let num1 = parseFloat(number1);
                    let num2 = parseFloat(number);

                    if (operator === 'plus') {
                        result = num1 + num2;
                    } else if (operator === 'minus') {
                        result = num1 - num2;
                    } else if (operator === 'multiply') {
                        result = num1 * num2;
                    } else if (operator === 'divide') {
                        if (num2 === 0) {
                            display.innerText = "Error";
                            return;
                        }
                        result = num1 / num2;
                    }

                    if (!Number.isInteger(result)) {
                        result = parseFloat(result.toFixed(3));
                    }

                    display.innerText = result;
                    number = result.toString(); 
                    number1 = '';
                    operator = '';
                }
            }
        }
    })
})


let name = document.createElement('p');
name.innerText="❤️ from @Harsh";
calculator.after(name);
name.style.textAlign="center";
name.style.marginBottom="10px"
name.style.marginTop="-30px"