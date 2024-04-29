#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.blue("\n \t Wellcome to simple Calculator\n"));
//Asking question from user through inquirer.
let answer = await inquirer.prompt([
    { message: "Enter the first Number", type: "number", name: "firstNumber" },
    { message: "Enter the second Number", type: "number", name: "secondNumber" },
    {
        message: "select one of the operator to perform action",
        type: "list",
        name: "operators",
        choices: ["Addition", "Substraction", "Multiplication", "Division"],
    },
]);
//Using if statement
if (answer.operators === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operators === "Substraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operators === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operators === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Please select correct Options");
}
