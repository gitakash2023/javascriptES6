// Create a function that finds the maximum number in an array using the spread
// operator.
const maxNumberInArr =(arr)=>{
     const duplicateOfOriginalArr = [...arr]
     const maxNumber =  Math.max(...duplicateOfOriginalArr)
     return maxNumber

}
const myArr = [1,4,5,6,7,8,4,5,55,5,50]
console.log(maxNumberInArr(myArr))