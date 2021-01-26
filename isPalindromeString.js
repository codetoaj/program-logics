// program to check is palindrome string
let word = 'amma';
let rword = word.split("").reverse().join("");

if (word === rword) {
    console.log(word, " is palindrome string");
} else {
    console.log(word, " is non palindrome string");
}