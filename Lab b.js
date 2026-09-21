const readline = require("readline");
const rl = readline.createInterface ({
input: process.stdin,
output: process.stdout 
});

rl.question("Enter first number: ", (first) => {
let num1 = Number(first);
rl.question("Enter second number:", (second) => {
    let num2 =Number(second);

console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);

if (num2 === 0) {
    console.log ("Quotient: cannot divide by zero");
    console.log ("Remainder: cannot divide by zero");

}
else {
    console.log("Quotient:", num1 / num2);
    console.log("Remainder:", num1 % num2);
}

    rl.close();

});
});


