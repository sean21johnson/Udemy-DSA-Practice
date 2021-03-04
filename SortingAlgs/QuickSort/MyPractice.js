function quickSort(arr, left=0, right=arr.length-1) {
    //base case
    if (left < right) {
        let pivotIndex = pivotHelper(arr, left, right);
        //left
        quickSort(arr, left, pivotIndex-1);
        //right
        quickSort(arr, pivotIndex+1, right);
    }

    return arr;
}

//Helper should just return the index of where the pivot value should belong after going through the array
function pivotHelper(arr, start=0, end=arr.length-1) {
    //add a swapper function
    function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start+1; i < arr.length; i++) {
        if (pivot  > arr[i]) {
            swapIdx++
            swap(arr, swapIdx, i)
        }
    }

    swap(arr, start, swapIdx);
    return swapIdx;
}

console.log(quickSort([4,8,2,1,5,7,6,3]))

