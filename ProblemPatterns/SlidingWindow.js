// Given an array of integers and a number, write a function called maxSubarraySum which finds the maximum sum of a subarray with the length of the number passed to the function
function maxSubarraySum(arr, n) {
    // ensure the the length of the array being passed in is greater than the value of n
    // set current total to the sum of the first n-1 elements of the array
    

    if (arr.length < n) {
        return null;
    }
    
    let currentTotal = 0;
    for (let i = 0; i < n; i++) {
        currentTotal += arr[i];
    }

    let max = currentTotal;

    for (let i = 1; i < arr.length - n + 1; i++) {
        currentTotal = currentTotal - arr[i - 1] + arr[i + n - 1]
        max = Math.max(currentTotal, max)
    }

    return max;

}


console.log(maxSubarraySum([200,300,400,500,600,700], 3))
