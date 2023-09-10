// Create a function that accepts a variable number of arguments using the rest
// parameter syntax
const sumOfNumbers = (...numbers)=>{
return numbers.reduce((acc,curr)=>acc+curr,0)
}
console.log(sumOfNumbers(1,2,3,4,5,7,9))