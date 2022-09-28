/**  An object is a collection of keys and values. it is represented with {}. in some other languages objects can be referred to as dictionaries... The values can be strings, numbers, arragys, functions or other objects. */

// Lets build a computer
const computer = {
  brand: "Tandy",
  weight: 22,
  working: false,
  condition: "mint",
  price: 2894,
  powerUp() {
    return "the computer now is on";
  },
  powerDown() {
    return "the computer is now off";
  },
};
// We can access the properties of an object in two ways: 1. DOT NOTATION  2. BRACKET NOTATION
console.log(computer.brand);
console.log(computer["brand"]);
// The second way allows us to pass in a variable and also will allow us to iterate over an object with the for in loop
const someKey = "weight";
console.log(computer[someKey]);

// to show us all the keys in the computer object
for (let key in computer) {
  console.log(key);
}

// to access all the properties or values
for (let key in computer) {
  console.log(computer[key]);
}

// We can also see a list of keys with the Object.getOwnPropertyName() function
const computerKeys = Object.getOwnPropertyNames(computer);
console.log(computerKeys);

// setting it to a variable and accessing the keys now we can use a for loop to access the values or the properties
for (let i = 0; i < computerKeys.length; i++) {
  console.log(computer[computerKeys[i]]);
}

// to call a function inside and object we must invoke the function
console.log(computer.powerUp()); // the computer is now on

// to change a property or a value of an object we can overwrite it
computer.price = 5;
console.log(computer.price);

// to add a property, we name the key and set the value
computer.color = "griege";
console.log(computer);

// NESTED OBJECTS
const backpack = {
  color: "green",
  contents: [
    "laptop",
    "paper",
    "phone",
    { wallet: ["money", "id", ["mastercard", "visa card", "discover card"]] },
    {
      pockets: {
        outer: ["metrocard", "tissues"],
        inner: {
          outer: "ruler",
          inner: ["dental floss", { mintFlavor: "peppermint", number: 33 }],
        },
      },
    },
  ],
  zipIt() {
    return "it is zipped";
  },
  unZipIt() {
    console.log("some items fell out");
    return {
      pickUpItems() {
        return ["lip balm", "comb", "38 cents"];
      },
    };
  },
};
// COLOR
console.log(backpack.color);
// CONTENTS
console.log(backpack.contents);
// THE CONTENTS OF THE WALLET
console.log(backpack.contents[4]);
// THE MINT FLAVOR
console.log(backpack.contents[4].pockets.inner);

console.log(backpack.contents[4].pockets.inner.inner[1].mintFlavor);
// THE RETURN VALUE OF PICKUPITEMS
console.log(backpack.unZipIt().pickUpItems());
// THE 38 CENTS
console.log(backpack.unZipIt().pickUpItems()[2]);

// OBJECTS DESTRUCTURING
const { contents } = backpack;
console.log(contents); // prints out all the contents in the backpack

// if we change an object in contents the original contents object will be affected
contents[0] = "Tablet";
console.log("just contents:", contents); // our new object
console.log("backpack:", backpack.contents); // our old object

// Doing the same destructuring using a function or inside of a function
const showContents = ({ contents }) => {
  for (let content of contents) {
    console.log(content);
  }
};
showContents(backpack);

// RENAME A KEY
const { wallet: clip } = backpack.contents[3];
console.log(clip);

// COMBINING OBJECTS
const box = {
  brand: "Tandy",
  joystick: "Classic Vintage 1000",
  keyboard: "Keyfun 5000",
  working: "true",
};

// USING A FUNCTION CALLED Object.assign which merges objects together
// the first argument is the target object and the second will have its contents moved into the target object
// const newComputer = Object.assign(computer, box);
console.log(newComputer);
console.log(computer);
console.log(box);

// MAKING NEW OBJECT WITHOUT CHANGING NEWCOMPUTER
const clonedComputer = Object.assign({}, computer);
const newComputer = Object.assign(clonedComputer, box);

console.log(computer);
console.log(clonedComputer);
console.log(newComputer);
console.log(box);

// USING THE REST OR SPREAD OPERATOR TO COMBINE OR MERGE OBJECTS
const restComputer = { ...computer, ...box };
console.log("===Old Computer===");
console.log(computer);
console.log("===Rest Computer ===");
console.log(restComputer);

// ANOTHER SHORTCUT FOR ADDING KEY VALUE PAIRS
const a = 5;
const b = "hello";
const c = true;
const someObject = {
  a,
  b,
  c,
};
console.log(someObject);

// WORD FREQUENCY
/*Write a function findWordFrequency that takes a sentence (a string), and returns an object with each word as a key, with a value of how many times that word appears in a the sentence

Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo */

/* USING POLYA METHOD OF PROBLEM SOLVING
1. Do we understand all the words used in stating the problem?

2. What are we asked to show?

3. Restate the problem in your own words (it's ok if your words are more clumsy, you don't need the perfect phrasing, you just need to clarify that you understand he problem, and one of the best ways to do that is to put it in your own words)

4. Is there enough information for you to find a solution?

4.1. Is there any information that is missing?

5. What is our plan?

..Do we need more test cases beyond the one(s) provided?

..Convert sentence to an array of words

..Loop over the array of words

..If the word is not an object key, add it as a key and set the count value to 1

..Else if the word is an object key, increase the count value to 1

..Loop over the object to find the word with the greatest frequency  */

// GETTING STARTED
const buffaloSentence =
  "Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo";

const wordCounter = (sentence) => {
  // converting the sentence to an array to loop over it
  const wordsArray = sentence.split(" ");
  // new var to add the objects
  const wordCount = {};
  // looping over the array
  for (let word of wordsArray) {
    if (!wordCount[word]) {
      // If the word is not an object key, add it as a key and set the count value to 1
      wordCount[word] = 1;
    } else {
      wordCount[word]++;
    }
  }
  return wordCount;
};

console.log(wordCounter(buffaloSentence));

// FINDING THE WORDS WITH THE HIGHEST FREQUENCY
const buffaloWords = wordCounter(buffaloSentence);
/* We need to return two values: the word and the count. We'll store it as an object, the word being the key and the count being the value
Then, we will loop over each key and check if it has the highest count. If it has the highest count, then we will store it as the new value, if it does not have a higher count, we will not update the object.  */
const findHighestFrequency = (wordsObj) => {
  let highestFrequency = 0;
  let word = null;
  for (let key in wordsObj) {
    if (wordsObj[key] > highestFrequency) {
      highestFrequency = wordsObj[key];
      word = key;
    }
  }
  return { [word]: highestFrequency };
};
