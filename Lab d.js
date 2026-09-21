const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter a number for the times table:", (answer) => {
    let number = Number(answer);
    console.log("\nTimes Table:");
    for (let i = 1; i <= 10; i++) {
        console.log(number + " x " + i + " = " + (number * i))
    }
    console.log("\nFizzBuzz:");
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
            
        } else if (i % 3 === 0) {
            console.log("Fizz");
            
        } else if (i % 5 === 0) {
            console.log("Buzz");

        } else {
            console.log(i);

        }
    }
    rl.close();

});

