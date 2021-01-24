// program for prime number
// a number should only divide by 1 and itself is called prime number eg: 7, 11, 23
let n = 12;
let isPrime = true;

for (i=2;i<n;i++) {
    let mod = n % i;
    if (mod === 0) {
        isPrime = false;
        break; // to break loop
        // here i used break to avoid unwanted execution of loop
        // if one number divided the n then no need to check further
    }
}

if (isPrime) {
    console.log(n, " is prime number")
} else {
    console.log(n, " is not prime number")
}