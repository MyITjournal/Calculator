//Addition function

export const addNos = (num1, num2) => {
  console.log(`Add two numbers: ${num1} and ${num2}`);
  return num1 + num2;
};

//Subtraction function
export const subtractNos = (num1, num2) => {
  console.log(`Subtract two numbers: ${num1} and ${num2}`);
  return num1 - num2;
};

//Multiply function
export const multiplyNos = (num1, num2) => {
  console.log(`Multiplying two numbers: ${num1} and ${num2}`);
  return num1 * num2;
};

//Divide function
export const divideNos = (num1, num2) => {
  console.log(`Dividing two numbers: ${num1} by ${num2}`);
  if (num2 === 0) {
    console.log(`This will give an error. Denominator has to be > 0`);
    return null;
  } else return num1 / num2;
};

//Square function
export const square = (num) => {
  console.log(`The square of ${num}`);
  return num * num;
};

//Finding the Square root of a number
export const squareRoot = (num) => {
  console.log(`Square root of ${num}`);
  if (num < 0) {
    console.log(`Please enter a number greater than 0`);
    return null;
  } else return Math.sqrt(num);
};

//Finding the cube of a number
export const cube = (num) => {
  console.log(`The cube of ${num}`);
  return num ** 3;
};
