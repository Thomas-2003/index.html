// console.log("YYYY")
// function product(x,y){
//     return x * y
// }
// console.log(product(444, 2))
// console.log(product(2, 8))
// console.log(product(444, 22222))
// console.log(product(4222244, -7))

// const power = (x,y) => {
//   return  Math.pow(x,y)
// }
// console.log(power(2,8))

const sum = (x, y, z = 0) => {
  console.log(x + y + z)
}
sum(3, 1)


// Type in input and convert text in binary and display
//TODO 1. add eventlistener to input
//TODO 2. convert text-string into binary
//TODO 3. insert text in html to display it
const input = document.getElementById('name')
function convert(input) {
  let output = "";
  for (var i = 0; i < input.length; i++) {
    output += input[i].charCodeAt(0).toString(2) + " ";
  }
  return output
}
const handleKeyDownEvent = (e) => {
  const headline = document.getElementById("headline")
  headline.innerHTML = "Hello my name is " + convert(e.target.value)
}
input.addEventListener("keyup", handleKeyDownEvent)

const seaerch = document.getElementById('search')
seaerch.addEventListener("keyup", (e) => {
  const searchtext = document.getElementById('searchtext').innerText
  var positionInText = searchtext.toLowerCase().indexOf(e.target.value.toLowerCase())
  document.getElementById('searchtext').innerHTML = searchtext.replace(e.target.value.trim(), "<b>" + e.target.value.trim() + "</b>")

})
