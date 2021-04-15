
// Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce((a, b) => a.concat(b)));

// Your Own Loop
function loop(value, test, update, body){
    if (test(value)) {
    body(value);
    return loop(update(value), test, update, body);
    } else {
        return 0;
    }
}

loop(3, n => n > 0, n => n - 1, console.log);