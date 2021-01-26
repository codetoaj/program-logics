// program for factorial
const n = 5; // input value
let fact = 1;

for (i=1;i<=n;i++) {
    fact = fact * i;
}

console.log("Factorial of ", n, " is ", fact);