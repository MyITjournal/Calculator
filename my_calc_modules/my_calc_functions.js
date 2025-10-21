//Addition function
function addNos(num1, num2) {
  console.log(`Add two numbers: ${num1} and ${num2}`);
  let answer = num1 + num2;
  return answer;
}

//Subtraction function
const subtractNos = (num1, num2) => {
  console.log(`Subtract two numbers: ${num1} and ${num2}`);
  let answer = num1 - num2;
  return answer;
};

//Multiply function
const multiplyNos = (num1, num2) => {
  console.log(`Multiplying two numbers: ${num1} and ${num2}`);
  let answer = num1 * num2;
  return answer;
};

//Divide function
const divideNos = (num1, num2) => {
  console.log(`Dividing two numbers: ${num1} by ${num2}`);
  if (num2 === 0) {
    console.log(`This will give an error. Denominator has to be > 0`);
    return null;
  }
  let answer = num1 / num2;
  return answer;
};

//Square function
const square = (num) => {
  console.log(`The square of number ${num}`);
  let answer = num * num;
  return answer;
};

//Finding the Square root of a number
const squareRoot = (num) => {
  try {
    if (num <= 0) return `Number must be greater than 0`;
    else if (typeof num !== "number") return `Please enter a valid number`;
    else return `The square root of ${num} is ${Math.sqrt(num)}`;
  } catch (error) {
    return `${error}`;
  }
};

//Finding the cube of a number
function cube(num) {
  console.log(`Finding cube of: ${num}`);
  let answer = num ** 3;
  return answer;
}
