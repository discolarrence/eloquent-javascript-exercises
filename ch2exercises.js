let hashtag = '#';
for (let i = 0; i < 7; i++) {
    console.log(hashtag);
    hashtag = hashtag + '#';
}

let num = 0;
for (let i = 0; i < 100; i++) {
    num++;
    if (num % 3 == 0 && num % 5 == 0){
        console.log('FizzBuzz')
    } else if (num % 3 == 0) {
        console.log('Fizz');
    } else if (num % 5 == 0) {
        console.log('Buzz');
    } else {
        console.log(num);
    }
}

let size = 20;
let checker = '';
for (let j = 0; j < size; j++) {
    if (j % 2 == 0) {
        for (let i = 0; i < size; i++) {
            if (i % 2 == 0) {
                checker = checker + '#';
            } else {
                checker = checker + ' ';
            }
        }
        checker = checker + "\n";
    } else {
        for (let i = 0; i < size; i++) {
            if (i % 2 == 0) {
                checker = checker + ' ';
            } else {
                checker = checker + '#';
            }
        }
        checker = checker + "\n";
    }
}
console.log(checker);