function selectionSort(arr) {
    // loop through the array starting at the beginning
    // declare a variable lowest which we can set equal to i through each iteration
    // add a nested loop which goes from j + 1 to the end of the array
        // if the value of j is less than the value of lowest, reassign lowest to j
    // use a conditional to check if i is no longer equal to lowest
        // if not, swap the element at i with the element at lowest
    // after breaking out of the loops, return the array

    for (let i = 0; i < arr.length; i++) {
        let lowest = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) lowest = j;
        }

        if (lowest !== i) {
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}


console.log(selectionSort([5,2,8,16,3,1]))