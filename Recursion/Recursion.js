// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent
function power(base, exponent) {
    if (exponent === 0) return 1;
    return base * power(base, exponent - 1);
}

// Write a function factorial which accepts a number and return the facrotial of that number
function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num - 1);
}

// Write a function called productOfArray which takes in an array of numbers and returns the product of them all
function productOfArray(arr) {
    if (arr.length === 0) return;
    return arr[0] * productOfArray(arr.slice(1));
}

// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function
function recursiveRange(num) {
    if (num === 1) return 1;
    return num + recursiveRange(num - 1);
}

// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence
function fib(n) {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

// Write a recursive function called reverse which accepts a string and returns a new string in reverse
function reverse(str) {
    let result = "";
  
    function helper(helperStr) {
        if (helperStr.length === 1) {
            result += helperStr.charAt(0);
            return;
        }
        result += helperStr.charAt(helperStr.length - 1)
        helper(helperStr.slice(0, helperStr.length - 1))
    }
    
    helper(str);
    
    return result;
}

// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome. Otherwise returns false
function isPalindrome(str) {
    let result = "";

    function helper(helperStr) {
        console.log(helperStr)
        if (helperStr.length === 1) {
            result += helperStr.charAt(0);
            return
        }
        result += helperStr.charAt(helperStr.length - 1);
        helper(helperStr.slice(0, helperStr.length - 1));
    }

    helper(str);

    return str === result ? true : false;
}


// Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback
// Otherwise it returns false
const isOdd = val => val % 2 !== 0;
let numArr = [1, 2, 3, 4]

function someRecursive(array, callback) {
    if (array.length === 0) return false;
    if (callback(array[0])) return true;
    return someRecursive(array.slice(1),callback);
}

// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened
function flatten(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            newArr = newArr.concat(flatten(arr[i]))
        }
        else {
            newArr.push(arr[i])
        }
    }

    return newArr;
}

console.log(flatten([16, 22, 36, [45, 52] ]))