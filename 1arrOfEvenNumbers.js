// Write a function that takes an array of numbers and returns a new array with
// only the even numbers.
const arrOfEvenNumbers = (arr)=>{
     return  arr.filter(num=>num%2 ==0).map(obj=>obj)

}
const myArr = [1,2,3,4,5,6,7,8,9,10]
console.log(arrOfEvenNumbers(myArr))