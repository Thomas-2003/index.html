// var num1 = 25
// var num2 = "25"
// var type = typeof num2
// if (25 === num2) { //prefer alwas using 3 equal (===) signs for value and type checking
//     console.log("True!!!!");
// } else {
//     console.log("False :(");
// }

// var i = 7
// console.log(i !== 7);
// var username = "tommy"
// console.log(username !== "tommy");

// var i = 17
// console.log(i >= 18);


// var num = 21 / 5

// console.log(num); //float integer/number
// console.log(parseInt(num));
// console.log(Math.floor(num))
// console.log(Math.ceil(num))
// console.log(Math.random());
// var usern = ["alice", "rob", "jimmy", "cooper", "benjamin", "josh"]
// //TODO pick random person
// const randomindex = Math.random() // 0.4324324234 = number 0 - 1 comma based
// const usefulRandomINdex = randomindex * (usern.length - 1) // 2.455463463463 = number between 0 and length of array (minus 1 because length is 5 and last index is 4). Plus braces are important to evaluate the  -1 before the multiplication happens
// const realNumberUsefulIndex = Math.floor(usefulRandomINdex) // full number = not comman number
// console.log(usern[realNumberUsefulIndex]);


// var num2 = 1 / 3 //0.33333333333333333
// console.log(num2 + 2); //2.333333333
// console.log(num2.toFixed(2) + 2); // toFixed converts to a string with 2 digits after comma
// console.log(parseFloat(num2.toFixed(2)) + 2); // tofixed creates a string "0.33" which can be reverted into a calculable number/float with parseFloat
// const ages = [3, 7, 8, 2, 18]

// console.log(Math.max(...ages)); //Math.max expects a infinite list of arguments , but doesnt work with a list.... you need to spread the array before inserting. "..." => spread operator


var age = 18

if (age > 18) {
    console.log("Welcome");
} else if (age === 18) {
    console.log("Welcome joungster")
} else {
    console.log("too young")
}


console.log(age > 18 ? "welcome" : age === 18 ? "welcome youngst" : "tooyoung") //ternary operator

const mesg = age > 18 ? "welcome" : "bye" // condition ? if : else
console.log(mesg);
const mesg2 = age > 18 && "welcome" //single if ternary &&
console.log(mesg2);

const firstname = "dsdfds"
const username = firstname || "User123" //default variable fallback declaration
console.log(username);
if (firstname) {
    console.log("YAYYYY");
}
var vergleichszahl = "";
if (vergleichszahl == 3) { console.log("innerhalb geschweiften Klammern") }
    // Bedingung war erfüllt
