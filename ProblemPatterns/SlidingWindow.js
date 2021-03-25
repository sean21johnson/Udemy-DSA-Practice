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


// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer
// This function should return the minimal length of a continuous subarray of which the sum is greater than or equal to the integer passed to the function
// If there isn't one, return 0 instead
function minSubArrayLen(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;
   
    while (start < nums.length) {
      // if current window doesn't add up to the given sum then 
          // move the window to right
      if(total < sum && end < nums.length){
        total += nums[end];
              end++;
      }
      // if current window adds up to at least the sum given then
          // we can shrink the window 
      else if(total >= sum){
        minLen = Math.min(minLen, end-start);
              total -= nums[start];
              start++;
      } 
      // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
      else {
        break;
      }
    }
   
    return minLen === Infinity ? 0 : minLen;
  }

// Write a function called findLongestSubstring which accepts a string and returns the length of the longest substring with all distinct characters
function findLongestSubstring()