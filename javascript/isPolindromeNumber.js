// program to find is palindrome number
let n = 123321;
let m = n;
let r = 0;
while (m>0) {
    r = (r * 10) + (m % 10);
    m = Math.floor(m / 10);
}

if (n === r) {
    console.log(n, " is palindrome number");
} else {
    console.log(n, " is not a palindrome number");
}