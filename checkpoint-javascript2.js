//STRING MANIPULATION FUNCTIONS

//Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("Welcome to the Adventure"));


//Count Characters
function countCharacters(str) {
    return str.length;
}

console.log(countCharacters("Welcome to OsCosmos"));


//Capitalize Words
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

console.log(capitalizeWords("welcome to oscosmos the world of adventure"));


//ARRAY FUNCTIONS

//Find Maximum and Minimum
function findMaximum(arr) {
    return Math.max(...arr);
}

function findMinimum(arr) {
    return Math.min(...arr);
}

let numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log(findMaximum(numbers)); 
console.log(findMinimum(numbers)); 


//Sum of Array
function sumOfArray(arr) {
    return arr.reduce((sum, current) => sum + current, 0);
}

console.log(sumOfArray(numbers));


//Filter Array
function filterArray(arr, condition) {
    return arr.filter(condition);
}

let filteredNumbers = filterArray(numbers, x => x > 4);
console.log(filteredNumbers); 


//MATHEMAICAL FUNCTIONS

//Factorial
function factorial(n) {
    if (n < 0) return "Undefined for negative numbers";
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5)); 
console.log(factorial(0)); 


//Prime Number Check
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log(isPrime(11)); 
console.log(isPrime(4));  


//Fibonacci Sequence
function fibonacciSequence(n) {
    if (n <= 0) return "Number of terms must be positive";
    let sequence = [];
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        sequence.push(a);
        let temp = a;
        a = b;
        b = temp + b;
    }
    return sequence;
}

console.log(fibonacciSequence(10)); 


