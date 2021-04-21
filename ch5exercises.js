
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

// Everything
function everything(array) {
    for(let element of array) {
        if(!element) {
            return false;
        }
    }
    return true;
}

function everythingSome(array) {
    some((element, index) )
}
const x = 1;
const y = 7;
const z = 3;
const adding = [x + y == 3, x + z == 4, y + z == 5];

console.log(everything(adding));