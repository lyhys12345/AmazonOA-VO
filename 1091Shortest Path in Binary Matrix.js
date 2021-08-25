// 1091. Shortest Path in Binary Matrix
// Medium

// 1495

// 87

// Add to List

// Share
// Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix. If there is no clear path, return -1.

// A clear path in a binary matrix is a path from the top-left cell (i.e., (0, 0)) to the bottom-right cell (i.e., (n - 1, n - 1)) such that:

// All the visited cells of the path are 0.
// All the adjacent cells of the path are 8-directionally connected (i.e., they are different and they share an edge or a corner).
// The length of a clear path is the number of visited cells of this path.

 

// Example 1:


// Input: grid = [[0,1],[1,0]]
// Output: 2
// Example 2:


// Input: grid = [[0,0,0],[1,1,0],[1,1,0]]
// Output: 4
// Example 3:

// Input: grid = [[1,0,0],[1,1,0],[1,1,0]]
// Output: -1

/**
 * @param {number[][]} grid
 * @return {number}
 */
 var shortestPathBinaryMatrix = function(grid) {
    const n = grid.length
    if(grid[0][0] === 1 || grid[n-1][n-1] === 1){
        return -1
    }
    if(n===1){
        return 1
    }
    const queue = [[0,0]]
    let path = 1
    const direction = [
        [-1, 1], // 右上
        [0, 1], // 右
        [1, 1], // 右下
        [1, 0], // 下
        [1, -1], // 左下
        [-1, 0], // 上
        [0, -1], // 左
        [-1, -1], // 左上
    ];
    while(queue.length){
        const len = queue.length
        for(let q=0;q<len;q++){
            let [row,col] = queue.shift()
            for(let i=0;i<direction.length;i++){
                let nextRow = row + direction[i][0]
                let nextCol = col + direction[i][1]
                if(nextRow<0 || nextCol<0 || nextRow>=n || nextCol >=n || grid[nextRow][nextCol] === 1){
                    continue
                }
                if(nextRow === n-1 && nextCol === n-1){
                    return path+1
                }else{
                    grid[nextRow][nextCol] = 1
                    queue.push([nextRow,nextCol])
                }
            }

        }

        path+=1
    }
    return -1
};