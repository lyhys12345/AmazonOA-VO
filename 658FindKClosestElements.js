// Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.

// An integer a is closer to x than an integer b if:

// |a - x| < |b - x|, or
// |a - x| == |b - x| and a < b
 

// Example 1:

// Input: arr = [1,2,3,4,5], k = 4, x = 3
// Output: [1,2,3,4]
// Example 2:

// Input: arr = [1,2,3,4,5], k = 4, x = -1
// Output: [1,2,3,4]
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
 var findClosestElements = function(arr, k, x) {
    if(arr.length === k){
        return arr
    }
    function findClosetPointPos(){
        let left = 0
        let right = arr.length-1
        while(left<right){
            let mid = Math.floor((right+left)/2)
            if(x===arr[mid]){
                return mid
            }else if(x>arr[mid]){
                left = mid + 1
            }else{
                right = mid
            }
        }
        return right
    }
    const midPos = findClosetPointPos()
    let left = midPos
    let right = midPos

    if(midPos === arr.length - 1 || 
       Math.abs(arr[left-1]-x)<Math.abs(arr[right]-1)){
        left-=1
    }else{
        right+=1
    }
    while(k>0){
        if(left < 0){

            right+=1
        }else if(right >arr.length-1){

            left-=1
        }else if(Math.abs(arr[left]-x)>Math.abs(arr[right]-x)){

            right+=1
        }else{

            left-=1
        }
        k-=1
    }
    
    return arr.slice(left+1,right)
};