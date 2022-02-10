/* // JUST PRINT EVEN NUMBER
for (var i = 1; i <= 10; i++) {
    console.log("Is " + i + " even? ");
    if (i % 2 === 0) {
        console.log("Yes " + i + " is even")
    } else {
        console.log("No " + i + " is not  even")
    }
} */





/* // Print multiplication tables
for (var i = 1; i <= 12; i++) {
    if (i > 2) {
        console.log("Square of " + i + " is " + i * i);
    }
} */





/* // Convert units in other units
function lengthConverter(kilometers) {
    const miles = kilometers * 0.621371
    return miles
}
const result = lengthConverter(355)
console.log(result)

function euroToUsd(euro) {
    const convertedUsd = euro * 1.14
    return convertedUsd.toFixed(2)
}
const usd = euroToUsd(122)
console.log(usd); */






/* // accumulate values and sum
var arr = [52, 32, 13, 44, 52, 2, 7, 238, 1, 22, 3, 232, 11, 5]
let letters = 0
for (var i = 0; i < arr.length; i++) {
    console.log("We have currently " + letters + " letters. The current postboy has " + arr[i] + " letters")
    letters += arr[i]
}
console.log("We now have " + letters + " letters!")

// second reduce approach
const reducedLetters = arr.reduce((allLetters, currentLetters) => {
    return allLetters += currentLetters
}, 0)
console.log(reducedLetters) */

