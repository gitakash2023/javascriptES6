// Create a function that converts a string to title case (first letter of each word
// capitalized)
const titleCase = (str)=>{
   return str.split(" ").map(ele=>ele.charAt(0).toUpperCase()
   +ele.slice(1)).join(" ")
   
}
console.log(titleCase("i am akash"))