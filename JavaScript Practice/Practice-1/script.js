// // Write a function that takes two numbers as parameters and returns their sum.

// function sum(a, b) {
//   return a + b;
// }
// let result = sum(1, 3);
// console.log(result);

// // Write a function that takes an array of numbers as input and returns the sum of all the numbers in the array.

// function sumArray(numbers) {
//   let total = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     total += numbers[i];
//   }
//   return total;
// }

// const numbers = [19, 47, 66, 75, 94];
// console.log(sumArray(numbers));

// // Write a function that takes a string as input and returns the reverse of the string.

// function reverseString(str) {
//   return str.split("").reverse().join("");
// }
// console.log(reverseString("ritesh giri is the don of universe"));

// // Write a function that takes an array of strings as input and returns a new array with the lengths of each string.

// function returnArray(arr) {
//   let lengths = [];
//   for (let i = 0; i < arr.length; i++) {
//     lengths.push(arr[i].length);
//   }
//   return lengths;
// }

// let arr = ["hello", "world", "string", "array"];
// console.log(returnArray(arr));

// // Write a function that takes a number as input and returns true if the number is even, false otherwise.

// // 1

// function isEven(val) {
//   if (val % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isEven(2));

// // 2

// function even(num) {
//   return num % 2 === 0;
// }
// console.log(even(2));
// console.log(even(7));

// // Write a function that takes an array of numbers as input and returns the largest number in the array.

// function strFucntion(arr) {
//   let largest = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }
//   return largest;
// }
// const arr = [20, 47, 39, 200, 377];
// console.log(strFucntion(arr));

// // Write a function that takes a string as input and returns true if the string is a palindrome, false otherwise.

// function palinFunction(arr) {
//   let palindromes = [];
//   for (let i = 0; i < arr.length; i++) {
//     const word = arr[i];
//     const reversedWord = word.split("").reverse().join("");
//     if (word === reversedWord) {
//       palindromes.push(word);
//     }
//   }
//   return palindromes;
// }

// const arr = ["radar", "ritesh", "deified", "calf", "civic"];
// console.log(palinFunction(arr));

// function isPalindrome(str) {
//   str = str.toLowerCase();
//   str = str.replace(/[^a-z0-9]/g, "");
//   return str === str.split("").reverse().join("");
// }

// console.log(isPalindrome("A man, a plan, a canal, Panama"));
// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("hello"));

// //Write a function that takes two strings as input and returns true if they are anagrams of each other, false otherwise.

// function isAnagram(str1, str2) {
//   let cleanStr1 = str1.replace(/[^a-z0-9]/gi, "").toLowerCase();
//   let cleanStr2 = str2.replace(/[^a-z0-9]/gi, "").toLowerCase();

//   let sortStr1 = cleanStr1.split("").sort().join("");
//   let sortStr2 = cleanStr2.split("").sort().join("");

//   return sortStr1 === sortStr2;
// }
// console.log(isAnagram("listen", "silent"));
// console.log(isAnagram("hello", "world"));
// console.log(isAnagram("ritesh", "giri"));

// // Write a function that takes an array of numbers as input and returns a new array with only the even numbers from the original array.

// function areEven(num) {
//   let evenArray = [];
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] % 2 === 0) {
//       console.log(num[i] + " is Even");
//       evenArray.push(num[i]);
//     } else {
//       console.log(num[i] + " is False");
//     }
//   }
//   return evenArray;
// }

// const num = [10, 25, 42, 37, 56];
// console.log(areEven(num));

// // Write a function that takes a number as input and returns the factorial of that number.

// function itsFactorial(n) {
//   let factorial = 1;
//   if (n == 0 || n == 1) {
//     return factorial;
//   } else if (n > 1) {
//     for (let i = n; i >= 1; i--) {
//       factorial = factorial * i;
//     }
//     return factorial;
//   } else {
//     return "Number should be postive.";
//   }
// }
// console.log(itsFactorial(5));
