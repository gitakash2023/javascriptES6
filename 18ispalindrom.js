// Create a function that checks if a given string is a palindrome using the split,
// reverse, and join array methods:
const isPalindrome = (str)=>{
    const reverse= str.split("").reverse().join("")
    return str===reverse

}
const string = "akaka"
console.log(isPalindrome(string))