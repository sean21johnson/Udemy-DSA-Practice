function selectionSort(arr) {
    //will need a nested loop approach
    //compare the first value in the array with all subsequent values to determine which is the smallest
        //replace whichever is the smallest with the 0th index in the array
    //move onto the next number in the outer loop and go through the same process until you hit the end
    //return the sorted array


    for (let i = 0; i < arr.length; i++) {
        let smallestElement = arr[i]
        
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < smallestElement) {
                smallestElement = arr[j];
            } 
        }

        if (arr[i] !== smallestElement) {
            let smallestIndex = arr.indexOf(smallestElement)
            let temp = arr[i];
            arr[i] = smallestElement;
            arr[smallestIndex] = temp;
        }
    }

    return arr;
}



console.log(selectionSort([4,2,1,7,6]))