/**
 * RECURSION
 * A function that calls itself is called recursive.

A recursive function calls itself to reduce a larger problem into a smaller one, until it can be solved.

A recursive function must have two properties:

A simple base case (or cases) - which is a terminating scenario that does not use recursion to produce an answer
A set of rules that reduce all other cases towards the base case
Recursion is not yet in our coding tool kit. Solving things recursively takes practice and may feel quite odd at first.
 */

// CLASS
const numsToSum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumNumbers = (numsArr, sum = 0) => {
  // base case - until the condition is met and no numbers in the array to add
  if (numsArr.length === 0) {
    return sum;
  }
  // after a number is added its then removed from the array using the shift method
  sum += numsArr.shift();
  // recursively calling the function again and again till our condition is met
  console.log(`${sum}`); // to see sum in the process
  return sumNumbers(numsArr, sum);
};

console.log(sumNumbers(numsToSum));

// NOTES
const happyNewYear = (num) => {
  // base case - where we end the funciton
  if (num === 0) {
    console.log("HAPPY NEW YEAR");
  } else {
    // move the funciton towards the base case
    console.log(`${num}.....`);
    happyNewYear(num - 1);
  }
};
console.log(happyNewYear(5));

// CLASS
const testCase1 = 10;
const testCase2 = 9;

const isEven = (num) => {
  // base case
  if (num === 0) {
    return "the number is even";
  }
  // base case
  if (num === 1) {
    return "the number is odd";
  }
  // recursively calling the function
  return isEven(num - 2);
};

console.log(isEven(testCase1));
console.log(isEven(testCase2));

// Lets try factorial;

const factorial = (n) => {
  // base case
  if (n == 1 || n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};
console.log(factorial(4));

// Fibonacci sequence
const fibonacci = (num) => {
  // see if you can solve this using memoization <---
  // base case
  if (num <= 1) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
};

console.log(fibonacci(6));
