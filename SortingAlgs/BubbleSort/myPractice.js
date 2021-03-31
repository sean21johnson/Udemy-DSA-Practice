function bubbleSort(arr) {
    // loop through the array starting at the end
    // add a nested loop that goes from the beginning to i - 1
    // if j > j + 1
        // swap j and j + 1
    // break out of the loops and return the sorted array
    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }


    }

    return arr;

}

let numArr = [18, 2, 4, 10, 5, 14, 6];
console.log(bubbleSort(numArr));