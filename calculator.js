const operation = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

console.log("Calculator Started");
console.log("Operation:", operation);

let result;

switch (operation) {
    case "add":
        result = num1 + num2;
        break;

    case "subtract":
        result = num1 - num2;
        break;

    case "multiply":
        result = num1 * num2;
        break;

    case "divide":
        if (num2 === 0) {
            console.log("Error: Cannot divide by zero");
            break;
        }
        result = num1 / num2;
        break;

    default:
        console.log("Invalid operation");
}

if (result !== undefined) {
    console.log("Result:", result);
}