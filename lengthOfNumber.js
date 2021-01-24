// program to find length of number

let n = 123456789;
let m = n;
let length = 0;

while (n>0) {
    n = Math.floor(n / 10); // in javascript 1234/10 = 123.4 not 123
    // in javascript if we devide a number with / it will return value in decimal point
    // so i used Math.floor, you dont need it in c, cpp or java
    // you can just use "n=n/10"
    length++;// it will count how many times i can divide the number
}

console.log("Length of number", m , " is ", length);
