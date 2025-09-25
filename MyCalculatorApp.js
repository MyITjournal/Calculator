import { stdin } from "process";
import chalk from "chalk";
import {
  addNos,
  subtractNos,
  multiplyNos,
  divideNos,
  square,
  squareRoot,
  cube,
} from "./my_calc_modules/MyCalcFunctions.js";
import { text } from "./my_calc_modules/MySolutions.js";
import path from "path";

console.log("\nWelcome to Ade's Basic Calculator");
console.log("=================================\n");

let num1 = 9;
let num2 = 6;

console.log(`${text()} ${addNos(num1, num2)}\n`);
console.log(`${text()} ${subtractNos(num1, num2)}\n`);
console.log(`${text()} ${multiplyNos(num1, num2)}\n`);
console.log(`${text()} ${divideNos(num1, num2)}\n`);
console.log(`${text()} ${square(num1)}\n`);
console.log(`${text()} ${squareRoot(num1)}\n`);
console.log(`${text()} ${cube(num1)}`);
