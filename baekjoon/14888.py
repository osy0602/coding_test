N = int(input())

lst = list(map(int, input().split()))

operators = list(map(int, input().split()))

mx = -1e9
mn = 1e9

def dfs(n, temp) :
    global mx, mn
    
    if n == N-1:
        mx = max(temp, mx)
        mn = min(temp, mn)
        return
     
    if operators[0] != 0 :
        operators[0] -= 1
        dfs(n+1, temp + lst[n+1])
        operators[0] += 1 

    if operators[1] != 0 :
        operators[1]-= 1
        dfs(n+1, temp - lst[n+1])
        operators[1] += 1
    
    if operators[2] != 0 :
        operators[2] -= 1
        dfs(n+1, temp * lst[n+1])
        operators[2] += 1
    
    if operators[3] != 0 :
        operators[3] -= 1
        dfs(n+1, int(temp/lst[n+1]))
        operators[3] += 1

dfs(0, lst[0])
print(mx)
print(mn)