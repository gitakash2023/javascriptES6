// Use the find function to find the first even number in an array:
const firstEvenNumber = (arr)=>{
return arr.find(ele=>ele%2===0)
}
const myArr = [1,2,3,4,5,6,7,8,89,99,98]
console.log(firstEvenNumber(myArr))