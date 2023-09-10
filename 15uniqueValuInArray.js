// Use the filter function to remove all duplicates from an array:
const arr = [1,2,1,2,3,1,2,3,1,2,3]
const unique = arr.filter((value,index,self)=>{
    return self.indexOf(value)===index
})
console.log(unique)