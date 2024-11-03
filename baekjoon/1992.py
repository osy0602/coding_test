import sys
input = sys.stdin.readline

def div(row, col, size):
    if size == 1:
        print(numarr[row][col], end="")
        return
    num = numarr[row][col]

    for i in range(row, row + size):
        for j in range(col, col + size):
            if num != numarr[i][j]:
                print("(", end="")
                size  //= 2
                div(row, col, size)
                div(row, col + size, size)
                div(row+ size, col, size)
                div(row+size, col+size, size)
                print(")", end="")
                return
    print(numarr[row][col], end="")
    return

N = int(input().strip())
numarr = []
for i in range(N):
    numarr.append(list(map(int, input().rstrip())))

div(0,0,N)