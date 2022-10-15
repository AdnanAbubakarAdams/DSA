
/*
1.Checkerboard

Write a method checkerboard/Checkerboard which takes an integer size and returns a checkerboard of dimensions size x size. There are two colored squares on the checkerboard. Red squares are represented by the string [r] and black squares are represented by the string [b]. You MUST use the newline character \n to insert a newline at the end of each row.

The top left corner should be a red square. Each row should have alternating squares in the row. The starting square on each row should also alternate. Assumptions

You can assume you are given an integer size. You cannot assume positive values. Thus you should return an empty string for negative sizes and a size of 0. (An empty string does not have a newline ending). You should assume the newline character used is \n. You MUST leave a newline character at the end of the full checkerboard thus allowing the board to be on its own if you were to run in a terminal.
*/

// function checkerboard (size) {
//     if(!size){
//       return ""
//     }
  
//   let str = ""
//   let starter = "[r]"
//   let next = "[b]"
//   for(let i = 1; i <= size; i++){
//     for(let j =1; j <= size; j++){
//       if(j % 2 !== 0){
//         str += starter
//       } else {
//         str += next
//       }
//     }
//     str += "\n"
//     if(starter === "[r]"){
//       starter = "[b]"
//       next = "[r]"
//     } else {
//       starter = "[r]"
//       next = "[b]"
//     }
//   }

//   return str
// };

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////


/* 
2.Abrieviate Words

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F

*/



// function abbrevName(name){
//     return name.split(' ').map(x => x.charAt(0).toUpperCase()).join('.');
// }



//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

/*
3.Count Divisors

Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples

divisors(4)  = 3  // 1, 2, 4
divisors(5)  = 2  // 1, 5
divisors(12) = 6  // 1, 2, 3, 4, 6, 12
divisors(30) = 8  // 1, 2, 3, 5, 6, 10, 15, 30
*/

// function divisors(num) {
//   let total = 0;

//   for(let i = 1; i <= num; i++){
//     if(num % i === 0){
//       total++
//     }
//   }
//   return total
// }

// console.log(divisors(12))


//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////


/*
4.Keep Hydrated

Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5
*/

// function litres(time) {
//   return Math.floor(time * 0.5);
// }


//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////


/*
5.Single Character Palindromes

You will be given a string and you task is to check if it is possible to convert that string into a palindrome by removing a single character. If the string is already a palindrome, return "OK". If it is not, and we can convert it to a palindrome by removing one character, then return "remove one", otherwise return "not possible". The order of the characters should not be changed.

For example:

solve("abba") = "OK". -- This is a palindrome
solve("abbaa") = "remove one". -- remove the 'a' at the extreme right.
solve("abbaab") = "not possible".
*/

// function solve(s){
  
//   if (s === s.split('').reverse().join('')) {
//     return 'OK'
//   }

//   for (let i=0;i<s.length;i++) {
//     let strArr = s.split('')
//     strArr.splice(i, 1)

//     if (strArr.join('') === strArr.reverse().join('')) {
//       return "remove one"
//     }
//   }
//   return 'not possible'
// };

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

/*
6. Quarter of the Year

Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
*/

// const quarterOf = (month) => {
//   return Math.ceil(month / 3);
// }

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

/*
7. School Paperwork

Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

Example:
n= 5, m=5: 25
n=-5, m=5:  0

*/

// function paperwork(n, m) {
//   return n > 0 && m > 0 ? n * m : 0
// }

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////


/*
8. Count Vowels
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/



// function getCount(str) {
//   let vowels = 0;
//   str.split("").map((v) =>{
//     if(v == "a" || v == "e" || v == "i" || v == "o" || v == "u"){
//       vowels++
//     }
//   })
//   return vowels
// }


//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////


/*
9. Well of Ideas - Easy Version
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
*/

// function well(x) {
//   switch (x.filter(i => i === 'good').length) {
//     case 0:
//       return 'Fail!'
//     case 1:
//     case 2:
//       return 'Publish!'
//     default:
//       return 'I smell a series!'
//   }
// }


//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////


/*
10. Well of Ideas - Harder Version
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided 2 dimensional array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

The sub arrays may not be the same length.

The solution should be case insensitive (ie good, GOOD and gOOd all count as a good idea). All inputs may not be strings.
*/


// function well(x){
//   let count = 0

// for(ideas of x){
//   for(i of ideas){
//       if(i.toLowerCase() === "good"){
//       count ++ 
//     }  
//   }
// }
//   console.log(x)
//   console.log(count)
//   return count > 2 ? "I smell a series!" : count > 0 ? "Publish!" : "Fail!"
// }


//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

/*
11. Count Letters and Digits
Create a method that can determine how many letters and digits are in a given string.
*/



//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////


/*
12. Roman Numerals Decoder

Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

Example:

solution('XXI'); // should return 21
Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
*/

// function romanDecoder(str) {
//   let obj = {
//     "I" : 1,
//     "V" : 5,
//     "X" : 10,
//     "L" : 50,
//     "C" : 100,
//     "D" : 500,
//     "M" : 1000
//   }

// let year

  
// for(let i = 0; i < str.length; i++){
  
// }

// }

//Questions from team A/This

//// 1. Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:
// "hello world".toAlternatingCase() === "HELLO WORLD";
// "HELLO WORLD".toAlternatingCase() === "hello world";
// "hello WORLD".toAlternatingCase() === "HELLO world";
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld";
// "12345".toAlternatingCase() === "12345"; // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E";
// "String.prototype.toAlternatingCase".toAlternatingCase() ===
//   "sTRING.PROTOTYPE.TOaLTERNATINGcASE";

//////////

//// 2. The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

// Task :

// Given a year, return the century it is in.

// Input , Output Examples :
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

///////////

// 3. Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example: createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

/////////

// 4.Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// maskify("64607935616") == "#######5616";
// maskify("1") == "1";
// maskify("") == "";

// // "What was the name of your first pet?"
// maskify("Skippy") == "##ippy";
// maskify("Nananananananananananananananana Batman!") ==
//   "####################################man!";

/////////

// 5.Story

// You and a group of friends are earning some extra money in the school holidays by re-painting the numbers on people's letterboxes for a small fee.

// Since there are 10 of you in the group each person just concentrates on painting one digit! For example, somebody will paint only the 1's, somebody else will paint only the 2's and so on...

// But at the end of the day you realise not everybody did the same amount of work.

// To avoid any fights you need to distribute the money fairly. That's where this Kata comes in.

// Kata Task

// Given the start and end letterbox numbers, write a method to return the frequency of all 10 digits painted.

// Example

// For start = 125, and end = 132

// The letterboxes are:

// 125 = 1, 2, 5
// 126 = 1, 2, 6
// 127 = 1, 2, 7
// 128 = 1, 2, 8
// 129 = 1, 2, 9
// 130 = 1, 3, 0
// 131 = 1, 3, 1
// 132 = 1, 3, 2
// The digit frequencies are:

// 0 is painted 1 time
// 1 is painted 9 times
// 2 is painted 6 times
// etc...
// and so the method would return [1,9,6,3,0,1,1,1,1,1]

// Notes: 0 < start <= end

///////

// 6.Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

// If the whole array is consecutive then return null2.

// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

///////

// 7.Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

// a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

// You may assume the input is always valid.

// Examples: isPowerOfTwo(1024) // -> true
// isPowerOfTwo(4096) // -> true
// isPowerOfTwo(333) // -> false
// Beware of certain edge cases - for example, 1 is a power of 2 since 2^0 = 1 and 0 is not a power of 2.

////////

// 8.Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

// pyramid(0) => [ ]
// pyramid(1) => [ [1] ]
// pyramid(2) => [ [1], [1, 1] ]
// pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]

// Note: the subarrays should be filled with 1s

////////

// 9.In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example,
//   5! = 5 * 4 * 3 * 2 * 1 = 120.

// The value of 0! is 1.

// #Your task

// You have to create the function factorial that receives n and returns n!. You have to use recursion.

/////

// 10. Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples:
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

//////

// 11. Given a time in AM/PM format as a string, convert it to military (24-hour) time as a string.

// Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock

// Sample Input: 07:05:45PM Sample Output: 19:05:45

// Try not to use built in DateTime libraries.

// For more information on military time, check the wiki https://en.wikipedia.org/wiki/24-hour_clock#Military_time
