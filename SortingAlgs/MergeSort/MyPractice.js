//Use recursion and call 'mergeTwoArrays' to actually sort the arrays
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return mergeTwoArrays(left, right);
}

//write the merging part of the mergeSort function
//create two pointers that we will use to loop through each of the respective arrays
//create a while loop with the condition that both pointers have not hit the end of their respective array
//compare the numbers that each pointer is at
    //if the number in the first array is smaller, push that value into the new array we are creating, and move the first pointer up by 1
    //if the number in the 2nd array is smaller, push that value into the new array we are creating, and move the 2nd pointer up by 1
    //determine which of the two arrays still has values left in it and push the remaining values to the newly created array
function mergeTwoArrays(arr1, arr2) {
    let pointerOne = 0;
    let pointerTwo = 0;
    let result = [];

    while (pointerOne < arr1.length && pointerTwo < arr2.length) {
        if (arr1[pointerOne] <= arr2[pointerTwo]) {
            result.push(arr1[pointerOne]);
            pointerOne++;
        }
        else {
            result.push(arr2[pointerTwo]);
            pointerTwo++;
        }
    }

    while (pointerOne < arr1.length) {
        result.push(arr1[pointerOne]);
        pointerOne++;
    }


    while (pointerTwo < arr2.length) {
        result.push(arr2[pointerTwo]);
        pointerTwo++
    }

    return result;
}





