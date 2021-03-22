function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    let freqCounter = {};

    for (let char of arr1) {
        freqCounter[char] = char * char;
    }

    console.log(freqCounter)
}

let arr1 = [2,4,5,6]
let arr2 = [4,16,25,36]

console.log(same(arr1, arr2))


