 # You are given an encoded string  and number of rows, Convert it to original string
 #
 # Input: mnesi___ya__k____mime  N = 3
 #
 # Output : my name is mike
 #
 # Explanation : Read the matrix in a diagonal way starting from [0][0] index until the end of row and start from the top
 # again to decode it. _ are treated as space.
 #
 # m n e s i _  _
 #
 #  _ y a _ _ k _
 #
 #  _ _ _ m i m e

def helper(str, n):
    tmp = list(str)
    left = 0

    space = int(len(str)/3)
    right = space
    array = []
    for i in range(n):
        array.append(tmp[left:right])
        left+=space
        right+=space
    result = []
    col = 0
    needBreak = False
    while not needBreak:
        row = 0
        while row<n:
            tmp = array[row][col+row]
            result.extend(tmp)
            row+=1
            if((row+col)>= len(array[0])):
                needBreak = True
                break
        col+=1
    ans = ''.join(result)
    return ans.replace('_',' ')



str = 'mnesi___ya__k____mime'
n = 3

print(helper(str,n))