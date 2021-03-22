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






