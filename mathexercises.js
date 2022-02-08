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


var num = 21 / 5

console.log(num); //float integer/number
console.log(parseInt(num));
console.log(Math.floor(num))
console.log(Math.ceil(num))
console.log(Math.random());
var usern = ["alice", "rob", "jimmy", "cooper", "benjamin", "josh"]
//TODO pick random person
const randomindex = Math.random() // 0.4324324234
const usefulRandomINdex = randomindex * (usern.length - 1)
const realNumberUsefulIndex = Math.floor(usefulRandomINdex)
console.log(usern[realNumberUsefulIndex]);