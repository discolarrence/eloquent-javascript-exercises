// The Sum of a Range
function range(start, end, step) {
    let numberArray = [];
    let num = start;
    if (String(step).includes('-')) {
        while (num >= end) {
            numberArray.push(num);
            num += step;
        }
    } else {
        while (num <= end) {
            numberArray.push(num);
            num += step;
        }
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
    arrLength = arr.length
    newArr = []
    for (let i = 0; i < arrLength; i++) {
        let poppedNum = arr.pop();
        newArr.push(poppedNum);
    }
    return newArr
}

function reverseArrayInPlace(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr.splice(i, 0, arr.pop());
    }
    return arr;
}

// A List
function arrayToList(arr){
    let list = {};
    for (let i = arr.length - 1; i >= 0; i--) {
        list = {value: arr[i], rest: list};
    }
    return list;
}
