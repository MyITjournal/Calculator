//Addition function

export const addNos = (num1, num2) => {
  console.log(`Add two numbers: ${num1} and ${num2}`);
  let answer = num1 + num2;
  return answer;
};

//Subtraction function
export const subtractNos = (num1, num2) => {
  console.log(`Subtract two numbers: ${num1} and ${num2}`);
  let answer = num1 - num2;
  return answer;
};

//Multiply function
export const multiplyNos = (num1, num2) => {
  console.log(`Multiplying two numbers: ${num1} and ${num2}`);
  let answer = num1 * num2;
  return answer;
};

//Divide function
export const divideNos = (num1, num2) => {
  console.log(`Dividing two numbers: ${num1} by ${num2}`);
  if (num2 === 0) {
    console.log(`This will give an error. Denominator has to be > 0`);
    return null;
  }
  let answer = num1 / num2;
  return answer;
};

//Square function
export const square = (num) => {
  console.log(`The square of number ${num}`);
  let answer = num * num;
  return answer;
};

//Finding the Square root of a number
export const squareRoot = (num) => {
  console.log(`The square root of ${num}`);
  if (num < 0) {
    console.log(`Please enter a number greater than 0`);
    return null;
  }
  let answer = Math.sqrt(num);
  return answer;
};

//Finding the cube of a number
export const cube = (num) => {
  console.log(`Finding cube of: ${num}`);
  let answer = num ** 3;
  return answer;
};
