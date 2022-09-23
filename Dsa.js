// GETTING STARTED
// functions
const myFunction = (quote) => {
  console.log("Adnan works hard and will always work hard", quote);
};
myFunction("And i will make it IN SHAA ALLAH");

// CONTROL FLOW

// conditionals
/**
if (moving == true)
if (moving === true)
if (moving)
Will all run the code when moving is true. One difference is that the final one will test for a truthy value as opposed to the value true, which can make the final expression a little more flexible 
**/

// functions
/**
 Functions allow us to create reusable blocks of code that we can control when they run and how many times they run
 **/
const fixIt = (moving, shouldBeMoving) => {
  if (moving) {
    if (shouldBeMoving) {
      console.log("No problem! This should be moving and it does!");
    } else {
      console.log("OK, some WD-40 should get this going!");
    }
  } else {
    if (shouldBeMoving) {
      console.log("Ok, some WD-40 should get this going");
    } else {
      console.log("No problem! This should NOt be moving and it does not!");
    }
  }
};
fixIt(true, true);
fixIt(true, false);
fixIt(false, false);
fixIt(false, true);

// Loops
/** while loop : A while loop is a great choice when you don't know how many times a piece of programming should run
let secretPhrase = prompt('Enter the secret');

while (secretPhrase != 'open sesame') {
    secretPhrase = prompt('Nope! Guess again!');
}

alert('you guessed it! Nice job!); repl it code 


console.log("you only have three guesses, be careful with your choices");

let access = false;

for (let i = 3; i >= 1; i--) {
  let password = prompt("what is the password");
  console.log(i);
  if (password === "password1234") {
    access = true;
    break;
  }
  if (i === 3) {
    alert(`You only have 2 guesses left`);
  } else if (i === 2) {
    alert("You only have 1 guess left!");
  }
}
if (access) {
  alert("Congratulations! You now have access to your account");
} else {
  alert("Sorry, you have lost access forever");
}

**/

// PRINT PRIMES
const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    // console.log(num % i)
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
console.log(isPrime(5));

/**
Do we need to solve for edge cases? Solving edge cases is usually easier to solve after the basic problem is solved

1. numbers less than 2 are NOT prime
2. numbers that are NOT integers are not prime
3. 2 is a prime number
 **/
const isPrimeAgain = (num) => {
  if (num < 2) {
    return false;
  } else if (!Number.isInteger(num)) {
    return false;
  } else if (num === 2) {
    return true;
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
};
console.log(isPrimeAgain(4));

// collecting primes into an array
const printPrimes = (limit) => {
  const primes = [];
  for (let i = 2; i <= limit; i++) {
    //   console.log(i, isPrime(i));
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
};
console.log(printPrimes(6));


// print primes for 11
// const isPrime = (num) => {
//     if (num < 2) {
//       return false;
//     } else if (num === 2) {
//       return true;
//     } else {
//       for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//           return false;
//         }
//       }
//       return true;
//     }
//   };
  
//   console.log(printPrimes(30));

// MATH FOR DEVELOPERS // MATH BASICS

// NAN- Not a number
// NAN is the value you get when you try to do a mathematical operation on things that are not a number.
// Remember, you can add strings together with the + operator. that is how we concatenate strings. So this operator has a dual function, adding numbers and concatenating strings.
let start = "Hello, ";
let introduce = "my name is ";
let name = "E.T.";
let expression = start + introduce + name;

console.log(expression);

let ductTapePrice = 5;
let amountOfDuctTape = 4;
let percentage = 0.1;
let getDiscountedTotal = 1 - percentage;

let total = ductTapePrice * amountOfDuctTape;
if (amountOfDuctTape >= 3) {
  total *= getDiscountedTotal;
}

console.log(total);

// MATH METHODS
let ourPrice = 5;
let competitorPrices = [2, 3, 4, 6, 7, 8];

const comparePriceRange = (prices) => {
  let min = Math.min(...prices);
  let max = Math.max(...prices);
  let priceRange = max - min;

  return priceRange;
};

console.log(comparePriceRange(competitorPrices));

// COMPETITOR PRICES
// const bestPrice = (competitorPrices, ourPrice) => {
//   let competitorMin = Math.min(...competitorPrices);
//   return competitorMin - ourPrice;
// };

// console.log(bestPrice(competitorPrices, ourPrice));

// const bestPrice = (competitorPrices, ourPrice) => {
//   let competitorMin = Math.min(...competitorPrices);
//   let difference = competitorMin - ourPrice;
//   console.log(difference);
//   if (difference < 0) {
//     console.log("the competitor has a better price");
//   } else {
//     console.log("we have the better price");
//   } 
//   return `The price difference is ${difference}`;
// }
// console.log(bestPrice(competitorPrices, ourPrice)) ---->

// Doing the same thing with a built in math method math.abs..The Math.abs() function returns the absolute value of a number.// also know as absolute value

const bestPrice = (competitorPrices, ourPrice) => {
   let competitorMin = Math.min(...competitorPrices);
   let difference = competitorMin - ourPrice;
   if (difference < 0) {
    console.log("competitors price is better than our price")
   } else {
    console.log("We have the best price");
   }
   return `The price difference is ${Math.abs(difference)}`;// 3
};
console.log(bestPrice(competitorPrices, ourPrice));

// Math.round()
// let cartTotal = 26.41;
// let roundedUpCart = Math.round(cartTotal);
// console.log(roundedUpCart); // 26

// Math.ceil
// let cartTotal = 26.41;
// let roundedUpCart = Math.ceil(cartTotal);
// console.log(roundedUpCart);


let cartTotal = 26.41;
let roundedUpCart = Math.ceil(cartTotal)
let donation = (roundedUpCart - cartTotal).toFixed(2);
console.log(donation);



const arrayOfNums = [70, 111, 450, 3];

console.log(arrayOfNums.sort());// [ 111, 3, 450, 70 ]


// const nums = [
//   14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12,
//   17, 12, 71, 18, 15, 12,
// ];

// const findTheMedian = (numArray) => {
//   return numArray.sort();
// };

// console.log(findTheMedian(nums));


const shortArray = ["first", "middle", "last"];

// always rounds to the nearest integer
console.log([Math.ceil(shortArray.length/2)])
console.log(shortArray[2])

// usually rounds down or up to the nearest integer
console.log([Math.round(shortArray.length/2)])

// always rounds down
console.log([Math.floor(shortArray.length/2)])

const shortArray2 = [1, 2, 4, 5];

const firstNum = shortArray2[Math.floor(shortArray2.length / 2) - 1];
const secondNum = shortArray2[Math.ceil(shortArray2.length / 2)];
const average = (firstNum + secondNum) / 2;
console.log(firstNum, secondNum, average);


// finding the median 
const nums = [
  14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12,
  17, 12, 71, 18, 15, 12,
];

const findTheMedian = (numArray) => {
  numArray.sort();
  if (numArray.length % 2 !== 0) {
    return Math.round(numArray.length / 2);
  } else {
    const firstNum = numArray[Math.round(numArray.length / 2) - 1];
    const secondNum = numArray[Math.round(numArray.length / 2)];
    const average = (firstNum + secondNum) / 2;
    return average;
  }
};

console.log(findTheMedian(nums));