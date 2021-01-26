// program to find armstrong number
let n = 153;
let m = n;
let l = 0;
let val = 0;
while (m>0) {
    m = Math.floor(m / 10); // in javascript 1234/10 = 123.4 not 123
    // in javascript if we devide a number with / it will return value in decimal point
    // so i used Math.floor, you dont need it in c, cpp or java
    // you can just use "n=n/10"
    l++;// it will count how many times i can divide the number
}

m = n;

while (m>0) {
    val = val + Math.pow((m % 10), l);
    m = Math.floor(m / 10);
}

if (val === n) {
    console.log(n, " is an armstrong number");
} else {
    console.log(n, " is not an armstrong number");
}