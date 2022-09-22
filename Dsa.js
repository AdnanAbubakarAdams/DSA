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

const bestPrice = (competitorPrices, ourPrice) => {
  let competitorMin = Math.min(...competitorPrices);
  let difference = competitorMin - ourPrice;
  console.log(difference);
  if (difference < 0) {
    console.log("the competitor has a better price");
  } else {
    console.log("we have the better price");
  } 
  return difference;
}
console.log(bestPrice(competitorPrices, ourPrice))
