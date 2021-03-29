//  Minimum
function min(a, b = 0) {
    if (a < b) {
        return a;
    } else if (a > b) {
        return b;
    } else {
        return "same num";
    }
}

// Recursion
function isEven(num) {
    num = Math.abs(num)
    if (num == 0) {
        return true;
    } else if (num == 1) {
        return false;
    } else {
        return isEven(num-2);
    }
}

//Bean Counting
function countChar(string, letter) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == letter){
            count ++;
        }
    }
    return count;
}

