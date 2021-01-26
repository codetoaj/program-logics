// biggest for three numbers
// change the values of a, b and c and try executing program
let a = 7;
let b = 6;
let c = 7;

if (a>b && a>c) {
    console.log(a, " is bigger than ", b , " and ", c)
} else if (b>a && b>c) {
    console.log(b, " is bigger than ", a , " and ", c)
} else if (c>a && c>b) {
    console.log(c, " is bigger than ", a , " and ", b)
} else if (a === b && a>c) {
    console.log(a," and ", b , " are equal and bigger than ", c)
} else if (a === c && a>b) {
    console.log(a," and ", c , " are equal and bigger than ", b)
} else if (b === c && b>a) {
    console.log(b," and ", c , " are equal and bigger than ", a)
} else {
    console.log(a, ",", b , ",", c, " are equal")
} 