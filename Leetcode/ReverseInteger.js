// check to see if the integer is negative
// begin breaking down the integer digit by digit
// within a loop we will start building the reversed integer
    // will need to a variable called reversed
        // reversed will originally be equal to 0 for the first round as we set prior
        // reversed * 10 + the remainder of x % 10 will give us the digit
        // x will need to be reassigned to the floor of dividing it by 10
    // break out of the loop and check to see if x > the limit, if so return 0
    // use a ternary operator to check if negative was true, if so return reversed * -1, otherwise just return reversed

function reverse(x) {
    let isNegative = false;

    if (x < 0) {
        isNegative = true;
        x = x * -1;
    }

    let reversed = 0;

    while (x > 0) {
        reversed = (reversed * 10) + (x % 10);
        x = Math.floor(x / 10);
    }

    if (reversed > (2 ** 31 - 1)) {
        return 0;
    }

    return isNegative ? (reversed * -1) : reversed;
}


console.log(reverse(-452));