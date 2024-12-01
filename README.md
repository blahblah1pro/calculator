Basic JavaScript Calculator

Overview
This is a simple yet fully functional calculator built with HTML, CSS, and JavaScript. It supports all basic arithmetic operations: addition, subtraction, multiplication, and division. The calculator features a clean design, keyboard support, error handling, and some extra credit features like floating-point numbers and backspace functionality.

Features
Basic Arithmetic Operations:
Add
Subtract
Multiply
Divide
Clear Button: Clears the display.
Equal Button: Calculates the result.
Error Handling: Displays an error message when dividing by zero.
Floating Point Numbers: Allows users to input decimals with the . button.
Backspace: Undo the last input with a backspace button.
Keyboard Support: Use the keyboard to perform calculations.




Project Structure
bash
Copy code
/calculator-project
|-- /index.html
|-- /style.css
|-- /script.js
|-- README.md
index.html: The HTML structure for the calculator.
style.css: The CSS styles for the calculator’s look and feel.
script.js: The JavaScript functionality that powers the calculator.




How to Use
Clone this repository to your local machine:
bash
Copy code
git clone https://github.com/your-username/calculator-project.git
Open the index.html file in your browser to view the calculator in action.
Use the buttons to input numbers and perform calculations.
Click the =, +, -, *, or / buttons to see the results.
Press the Clear button to reset the display.





Functionality
Input:
Click on the number buttons to input numbers.
Select an operator (+, -, *, /) for your calculation.
Press the = button to calculate the result.
Use the Clear button to clear the display.
Features:
Decimal Numbers: You can use the . button to enter decimals.
Backspace: Press the backspace button to remove the last character.
Keyboard Support: You can also use your keyboard for input. Numbers 0-9 and operators (+, -, *, /) work directly, along with Enter for =.
Error Handling:
Divide by Zero: If you try to divide by zero, the display will show a snarky error message instead of crashing the application.
Bug Fixes and Considerations:
The calculator prevents multiple decimal points (e.g., 12.3.4).
Only one operation will be executed at a time. If an operator is pressed after the first calculation, the result becomes the first number of the next operation.




Technologies Used
HTML: For the structure of the calculator.
CSS: To style the calculator and make it responsive.
JavaScript: To handle the logic behind the calculator’s operations.
Extra Credit
Floating Point Numbers: Users can input floating-point numbers and get accurate results.
Backspace Functionality: Allows users to delete their last input.
Keyboard Support: The calculator also works with your computer's keyboard, supporting number keys (0-9), operators (+, -, *, /), and the Enter key to calculate the result.


Installation
To use this project locally:

Clone the repository:

bash
Copy code
git clone https://github.com/your-username/calculator-project.git
Navigate to the project directory:

bash
Copy code
cd calculator-project
Open the index.html file in your browser:

bash
Copy code
open index.html  # On macOS
start index.html # On Windows



License
This project is open-source and available under the MIT License.

Screenshots
Calculator View:



Acknowledgements
Thanks to MDN Web Docs for the excellent documentation and resources that helped me build this project.
This project was inspired by the need to practice JavaScript and UI design.
Contributing
Feel free to fork this repository and make your own contributions. If you find any bugs or issues, please open an issue or submit a pull request.



To-Do / Future Improvements
Add more advanced math functions (e.g., square root, exponents).
Make the calculator even more responsive and mobile-friendly.
Improve error handling for other edge cases.