// Write a function sumZero which accepts a sorted array of integers. Function should return the first pair where the sum is 0 (return an array)
// return undefind if no pair exists

function sumZero(arr1) {
    // create a pointer that will begin at index 0
    // create a pointer that will begin at the last element in the array (arr1.length - 1)
    // declare an empty results array which we will put the pair in if there is one
    // use a while loop to go through the array comparing the sum of the values at the pointer indexes
        // if the sum of pointerOne's and pointerTwo's value is equal to 0, push the values at those indexes into the results array and break;
        // if the sum of pointerOne's and pointerTwo's value is equal less than 0, decrease pointerTwo's index by 1
        // if the sum of pointerOne's and pointerTwo's value is greater than 0, increase pointerOne's index by 1
    // return undefind if you make it through without finding a valid pair

    let pointerOne = 0;
    let pointerTwo = arr1.length - 1;
    let results = [];

    while (pointerOne < pointerTwo) {
        if ((arr1[pointerOne] + arr1[pointerTwo]) === 0) {
            results.push(arr1[pointerOne]);
            results.push(arr1[pointerTwo]);
            return results;
        }
        else if (arr1[pointerOne] + arr1[pointerTwo] < 0) {
            pointerOne++;
        }
        else {
            pointerTwo--;
        }
    }

    return undefined;
}

// implement a function countUniqueValues which accepts a sorted array and counts the unique values in the array
function countUniqueValues(arr) {
    if (arr.length === 0) return 0;

    // two pointer approach where we move all the unique values to the beginning of the array
    // pointerOne is going to start at index 0
    // pointerTwo is going to start at index 1
    // compare the values of pointerOne and pointerTwo
        // if the values are the same, increase pointerTwo
        // if the values are not the same increase pointerOne and swap pointerOne's new value with pointerTwo's value
    // break out of the loop and return pointerOne + 1 because that will essentially give the number of unique values

    let pointerOne = 0;
    
    for (let pointerTwo = 1; pointerTwo < arr.length; pointerTwo++) {
        if (arr[pointerOne] !== arr[pointerTwo]) {
            pointerOne++;
            let temp = arr[pointerOne];
            arr[pointerOne] = arr[pointerTwo];
            arr[pointerTwo] = temp;
        }
    }

    return pointerOne + 1;
}

// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average pair equals
// the target average. There may be more than one pair that matches the average target
function averagePair(arr, avg) {
    // use a multiple pointer approach
    // one pointer will start at index 0 and the other at the last element (arr.length - 1)
    // use a while loop to go through the array comparing the elements at each pointer
        // if the average value of the two elements is equal to the avg argument
            // return true
        // if the average value of the two elements is less than the avg argument
            // increase pointerOne
        // if the average value of the two elements is more than the avg argument
            // decrease pointerTwo
    // if we break out of the loop, return false because there was no match

    let pointerOne = 0
    let pointerTwo = arr.length - 1;

    while (pointerOne < pointerTwo) {
        let average = (arr[pointerOne] + arr[pointerTwo]) / 2;
        if (average === avg) return true;
        else if (average < avg) pointerOne++
        else {
            pointerTwo--;
        }
    }

    return false;
}

// Write a function called isSubsequence which takes in two strings and checks whether the characters in the 1st string form a subsequence of the characters in the 2nd string.
// In other words, the function should check whether the characters in the 1st string appear somewhere in the 2nd string, without their order changing
function isSubsequence(str1, str2) {
    // multiple pointer approach
    // edge case - if str1 length is greater than str2 length, return false
    // delcare pointerOne and set to 0
    // declare pointerTwo and set to 0
    // initiate a while loop which will go until pointerTwo gets through each character in str2
        // if pointerOne's value + 1 is equal to the length of str1, return true
        // each time there is a match of a character, increase each pointer
        // if there is no match of a character, increase only pointerTwo
        
    if (str1.length > str2.length) return false;

    let pointerOne = 0;
    let pointerTwo = 0;

    while (pointerTwo < str2.length) {
        if ((pointerOne + 1) === str1.length) return true;
        if (str1[pointerOne] === str2[pointerTwo]) {
            pointerOne++;
            pointerTwo++
        }
        else {
            pointerTwo++
        }
    }

    return false;
}