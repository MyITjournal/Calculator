import { stdin } from "process";
import chalk from "chalk";
import * as fxn from "./my_calc_modules/my_calc_functions.js";
import { text } from "./my_calc_modules/solutions.js";
import path from "path";

console.log("\nWelcome to Ade's Basic Calculator");
console.log("=================================\n");

let num1 = 15;
let num2 = 3;

console.log(chalk.green(`${text()}${fxn.addNos(num1, num2)}\n`));
console.log(`${text()}${fxn.subtractNos(num1, num2)}\n`);
console.log(`${text()}${fxn.multiplyNos(num1, num2)}\n`);
console.log(`${text()}${fxn.divideNos(num1, num2)}\n`);
console.log(`${text()}${fxn.square(num1)}\n`);
console.log(`${text()}${fxn.squareRoot(num1)}\n`);
console.log(`${text()}${fxn.cube(num1)}`);
