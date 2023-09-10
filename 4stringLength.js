// Write a function that takes an array of strings and returns a new array with the
// length of each string
const stringLength = (arr)=>{
    return arr.map(ele=>ele.length)

}
const myArr = ["akash","vikash","krishna"]
console.log(stringLength(myArr))