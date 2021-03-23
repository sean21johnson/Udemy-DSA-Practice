// does arr2's elements contain the squares of arr1's elements exactly
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}

// determine if two strings are anagrams
function validAnagram(str1, str2) {
    // loop through str1 and populate a frequency counter object with the letters as keys and the values as how many times they occur
    // loop through str2 comparing each of the characters to what we have in our frequency counter
    // if the str2 character is in the frequency counter, decrease the count by 1
    // if the str2 character is not int he frequency counter or if the value equals 0, return false
    // break out of the loop and use Object.values() method to get an array of all of the values of the frequency counter
    // loop through the values array and if any values are not equal to 0, return false
    // otherwise return true

    if (str1.length !== str2.length) return false;

    let frequencyCounter = {};

    for (let char of str1) {
        frequencyCounter[char] ? frequencyCounter[char]++ : frequencyCounter[char] = 1;
    }

    for (let char of str2) {
        if (!frequencyCounter[char] || frequencyCounter[char] === 0) {
            return false;
        }
        else {
            frequencyCounter[char]--;
        }
    }

    return true;
}

// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits. 
function sameFrequency(int1, int2) {
    // turn the integers into strings
    // if the integers aren't the same length return false (edge case)
    // declare an empty object as a frequency counter variable
    // loop through each digit in int1 and record the digit as the key in the frequency counter object and the # of times it occurs as the value
    // we're then going to loop through the digits in int2 and compare to what's in the frequency counter
        // if the digit does not exist or the value is 0, return false
        // if the digit does exist, reduce the value by 1
    // otherwise return true
    int1 = int1.toString();
    int2 = int2.toString();

    if (int1.length !== int2.length) return false;

    let freqCounter = {};

    for (let character of int1) {
        freqCounter[character] = ++freqCounter[character] || 1;
    }

    for (let character of int2) {
        if (!freqCounter[character] || freqCounter[character] === 0) return false;
        else {
            freqCounter[character]--
        }
    }

    return true;
}


// Frequency Counter OR Multiple Pointers
// Implement a function called 'areThereDuplicates' which accepts a variable number of arguments and checks where there are any duplicates among the arguments passed in
function areThereDuplicates() {
    // declare an empty array checkCharacter
    // remember that we can use the keyword 'arguments' which represents the variable number of arguments passed in
    // loop through the arguments 1 by 1 and see if the checkCharacters array includes this argument
        // if it does include the argument, return true
        // if it does not include the argument, push the argument into the checkCharacters array
    // if we break out of the loop return false

    let checkCharacters = [];
  
    for (let i = 0; i < arguments.length; i++) {
        if (checkCharacters.includes(arguments[i])) {
            return true;
        }
        else {
            checkCharacters.push(arguments[i]);
        }
    }
    
    return false;
}






