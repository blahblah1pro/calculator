const container1=document.createElement("div");
container1.id="container1";
const container2=document.createElement("div");
container2.id="container2";
const textbox=document.createElement("input");
textbox.id="textbox";
document.body.appendChild(container1);
document.body.appendChild(container2);
textbox.classList.add("text");
container1.appendChild(textbox);
   
const acBtn = document.createElement("button");
acBtn.classList.add("button");
acBtn.innerHTML = "AC";
acBtn.setAttribute('data-label', "AC");
acBtn.addEventListener('click', () => handleButtonClick("AC"));
container2.appendChild(acBtn);

// Create the "<--" button
const backspaceBtn = document.createElement("button");
backspaceBtn.classList.add("button");
backspaceBtn.innerHTML = "<--";
backspaceBtn.setAttribute('data-label', "<--");
backspaceBtn.addEventListener('click', () => handleButtonClick("<--"));
container2.appendChild(backspaceBtn);

// Create the "=" button
const equalsBtn = document.createElement("button");
equalsBtn.classList.add("button");
equalsBtn.innerHTML = "=";
equalsBtn.setAttribute('data-label', "=");
equalsBtn.addEventListener('click', () => handleButtonClick("="));
container2.appendChild(equalsBtn);

// Create the "+" button
const plusBtn = document.createElement("button");
plusBtn.classList.add("button");
plusBtn.innerHTML = "+";
plusBtn.setAttribute('data-label', "+");
plusBtn.addEventListener('click', () => handleButtonClick("+"));
container2.appendChild(plusBtn);

// Create the "1" button
const oneBtn = document.createElement("button");
oneBtn.classList.add("button");
oneBtn.innerHTML = "1";
oneBtn.setAttribute('data-label', "1");
oneBtn.addEventListener('click', () => handleButtonClick("1"));
container2.appendChild(oneBtn);

// Create the "2" button
const twoBtn = document.createElement("button");
twoBtn.classList.add("button");
twoBtn.innerHTML = "2";
twoBtn.setAttribute('data-label', "2");
twoBtn.addEventListener('click', () => handleButtonClick("2"));
container2.appendChild(twoBtn);

// Create the "3" button
const threeBtn = document.createElement("button");
threeBtn.classList.add("button");
threeBtn.innerHTML = "3";
threeBtn.setAttribute('data-label', "3");
threeBtn.addEventListener('click', () => handleButtonClick("3"));
container2.appendChild(threeBtn);

// Create the "-" button
const minusBtn = document.createElement("button");
minusBtn.classList.add("button");
minusBtn.innerHTML = "-";
minusBtn.setAttribute('data-label', "-");
minusBtn.addEventListener('click', () => handleButtonClick("-"));
container2.appendChild(minusBtn);

// Create the "4" button
const fourBtn = document.createElement("button");
fourBtn.classList.add("button");
fourBtn.innerHTML = "4";
fourBtn.setAttribute('data-label', "4");
fourBtn.addEventListener('click', () => handleButtonClick("4"));
container2.appendChild(fourBtn);

// Create the "5" button
const fiveBtn = document.createElement("button");
fiveBtn.classList.add("button");
fiveBtn.innerHTML = "5";
fiveBtn.setAttribute('data-label', "5");
fiveBtn.addEventListener('click', () => handleButtonClick("5"));
container2.appendChild(fiveBtn);

// Create the "6" button
const sixBtn = document.createElement("button");
sixBtn.classList.add("button");
sixBtn.innerHTML = "6";
sixBtn.setAttribute('data-label', "6");
sixBtn.addEventListener('click', () => handleButtonClick("6"));
container2.appendChild(sixBtn);

// Create the "*" button
const multiplyBtn = document.createElement("button");
multiplyBtn.classList.add("button");
multiplyBtn.innerHTML = "*";
multiplyBtn.setAttribute('data-label', "*");
multiplyBtn.addEventListener('click', () => handleButtonClick("*"));
container2.appendChild(multiplyBtn);

// Create the "7" button
const sevenBtn = document.createElement("button");
sevenBtn.classList.add("button");
sevenBtn.innerHTML = "7";
sevenBtn.setAttribute('data-label', "7");
sevenBtn.addEventListener('click', () => handleButtonClick("7"));
container2.appendChild(sevenBtn);

// Create the "8" button
const eightBtn = document.createElement("button");
eightBtn.classList.add("button");
eightBtn.innerHTML = "8";
eightBtn.setAttribute('data-label', "8");
eightBtn.addEventListener('click', () => handleButtonClick("8"));
container2.appendChild(eightBtn);

// Create the "9" button
const nineBtn = document.createElement("button");
nineBtn.classList.add("button");
nineBtn.innerHTML = "9";
nineBtn.setAttribute('data-label', "9");
nineBtn.addEventListener('click', () => handleButtonClick("9"));
container2.appendChild(nineBtn);

// Create the "/" button
const divideBtn = document.createElement("button");
divideBtn.classList.add("button");
divideBtn.innerHTML = "/";
divideBtn.setAttribute('data-label', "/");
divideBtn.addEventListener('click', () => handleButtonClick("/"));
container2.appendChild(divideBtn);

// Create the "0" button
const zeroBtn = document.createElement("button");
zeroBtn.classList.add("button");
zeroBtn.innerHTML = "0";
zeroBtn.setAttribute('data-label', "0");
zeroBtn.addEventListener('click', () => handleButtonClick("0"));
container2.appendChild(zeroBtn);

// Create the "00" button
const doubleZeroBtn = document.createElement("button");
doubleZeroBtn.classList.add("button");
doubleZeroBtn.innerHTML = "00";
doubleZeroBtn.setAttribute('data-label', "00");
doubleZeroBtn.addEventListener('click', () => handleButtonClick("00"));
container2.appendChild(doubleZeroBtn);

// Create the "." button
const dotBtn = document.createElement("button");
dotBtn.classList.add("button");
dotBtn.innerHTML = ".";
dotBtn.setAttribute('data-label', ".");
dotBtn.addEventListener('click', () => handleButtonClick("."));
container2.appendChild(dotBtn);

function handleButtonClick(label) {
    switch(label) {
        case "AC":
            // Clear the screen or reset calculations
            textbox.value="";
            break;
        case "=":
            var content= textbox.value;
            let regex = /(-?\d+(\.\d+)?)\s*([^\d\s])\s*(-?\d+(\.\d+)?)/;

            let match = content.match(regex);

             if (match) {
             let a = match[1];
             let b = match[3];            
              let c = match[4];  
               operate(a,b,c);
               }
            break;
        case "<--":
            textbox.value = textbox.value.slice(0, -1);
            break;
            case ".":
                let currentInput = textbox.value;
    
    // Check if the last part of the current input has a decimal point
    let lastNumber = currentInput.split(/[+\-*/]/).pop(); // Split by operators to isolate the last number
    if (!lastNumber.includes(".")) {
        textbox.value += "."; // Only append the decimal if it doesn't already exist in the last number
    }
                break;
        default:
            textbox.value+=label;
            break;
    }
}

function operate(a,b,c){
    a = parseFloat(a);
    c = parseFloat(c);
if(b=='+'){;
textbox.value=a+c;
}else if(b=='-'){
textbox.value=a-c
}else if(b=='*'){
textbox.value=a*c
}else if(b=='/'){
textbox.value=a/c
}else{
    return 0
}
}
document.addEventListener('keydown', function(event) {
    // Ensure focus is on the textbox and prevent any unwanted default behavior
    if (event.target !== textbox) {
        event.preventDefault();
    }

    // Map keyboard keys to calculator actions
    const key = event.key;

    switch (key) {
        case 'Enter':
        case '=':
            handleButtonClick("=");  // Equivalent to pressing the "=" button
            break;
        case 'Backspace':
        case 'Delete':
            handleButtonClick("<--");  // Equivalent to pressing the "<--" button
            break;
        case 'Escape':
            handleButtonClick("AC");  // Equivalent to pressing the "AC" button
            break;
        case '.':
            handleButtonClick(".");  // Equivalent to pressing the "." button
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            handleButtonClick(key);  // Handle operators
            break;
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            handleButtonClick(key);  // Handle number keys
            break;
        default:
            // If the key is not a valid calculator input, do nothing
            break;
    }
});