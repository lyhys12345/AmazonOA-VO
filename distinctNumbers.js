// Minimum number of distinct elements after removing M items
// Given an array of items, an ith index element denotes the item id’s, and given a number m, the task is to remove m elements such that there should be minimum distinct id’s left. Print the number of distinct id’s.

// Examples:

// Input: arr[] = { 2, 2, 1, 3, 3, 3} m = 3
// Output: 1
// Explanation:
// Remove 1 and both 2’s.
// So, only 3 will be left, hence distinct number of element is 1.

// Input: arr[] = { 2, 4, 1, 5, 3, 5, 1, 3} m = 2
// Output: 3
// Explanation:
// Remove 2 and 4 completely. 
// So, remaining 1, 3 and 5 i.e. 3 elements.

function distinctNumbers(arr, m){
    const map = new Map()
    for(let i=0;i<arr.length;i++){
        if(!map.has(arr[i])){
            map.set(arr[i],1)
        }else{
            map.set(arr[i],map.get(arr[i]) + 1)
        }
    }
    const sortedMap = new Map([...map.entries()].sort((a,b)=>a[1]-b[1]))
    let count = 0
    sortedMap.forEach((value,key)=>{
        if(m>0 && value<=m){
            m = m - value
            sortedMap.delete(key)
        }
    })
    return sortedMap.size
}
const arr = [2, 2, 1, 3, 3, 3]
const m = 3
const arr2 = [2, 4, 1, 5, 3, 5, 1, 3]
const m2 = 2
console.log(distinctNumbers(arr, m))