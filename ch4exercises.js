// The Sum of a Range
function range(start, end, step) {
    let numberArray = [];
    let num = start;
    while (num <= end) {
        numberArray.push(num);
        num += step;
    }
    return numberArray;
}

function sum(arr) {
    let theSum = 0;
    for (let addend of arr) {
        theSum += addend;
    }
    console.log(theSum);
}


// Reversing an Array
function reverseArray(arr) {
    for (newArr of arr) {
        newArr = []
        newArr.push(arr.pop())
    }
    return newArr
}
