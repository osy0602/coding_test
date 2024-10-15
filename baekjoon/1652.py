import sys
input = sys.stdin.readline

N = int(input().strip())
room = []
def countWidth(arr, N):
    num = 0
    
    for i in range(N):
        counting = True
        for j in range(1, N):
            if counting==False and arr[i][j] == 'X':
                counting = True
            if counting and arr[i][j] == '.' and arr[i][j-1] == '.':
                num += 1
                counting = False
    return num

def countHeight(arr, N):
    num = 0
    
    for i in range(N):
        counting = True
        for j in range(1, N):
            if counting==False and arr[j][i] == 'X':
                counting = True
            if counting and arr[j][i] == '.' and arr[j-1][i] == '.':
                num += 1
                counting = False
    return num

for i in range(N):
    room.append(list(input().strip()))

print(countWidth(room, N), countHeight(room, N))