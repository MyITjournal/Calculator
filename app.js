//import { stdin } from "process";

import colors from "colors";
import {
  addNos,
  subtractNos,
  multiplyNos,
  divideNos,
  square,
  squareRoot,
  cube,
} from "./my_calc_modules/my_calc_functions.js";
import { text } from "./my_calc_modules/solutions.js";
//import path from "path";

console.log("\nWelcome to Ade's Basic Calculator");
console.log("=================================\n");

let num1 = 9;
let num2 = 6;

console.log(colors.blue.bold(`${text()}${addNos(num1, num2)}\n`));
console.log(`${text()}${subtractNos(num1, num2)}\n`);
console.log(`${text()}${multiplyNos(num1, num2)}\n`);
console.log(`${text()}${divideNos(num1, num2)}\n`);
console.log(`${text()}${square(num1)}\n`);
console.log(`${text()}${squareRoot(num1)}\n`);
console.log(`${text()}${cube(num1)}`);
