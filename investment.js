
https://www.1point3acres.com/bbs/thread-790924-1-1.html
function maxValue(n, rounds){
    const list = new Array(n).fill(0)
    for(let i=0;i<rounds.length;i++){
        list[rounds[i][0]-1] += rounds[i][2]
        list[rounds[i][1]] -= rounds[i][2]
    }
    for(let i=1;i<list.length;i++){
        list[i]+=list[i-1]
    }
    if(list.length>n){
        list[list.length-1] = 0
    }
    console.log(Math.max(...list))
}

const n = 5
const rounds= [
    [1,2,10],
    [2,4,5],
    [3,5,12]
]
maxValue(n,rounds)