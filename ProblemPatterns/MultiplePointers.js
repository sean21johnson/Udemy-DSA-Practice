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

let arr = [1,1,1,3,4,4,5,6,18]

console.log(countUniqueValues(arr))