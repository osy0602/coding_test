import sys
input = sys.stdin.readline

def dfs(v):
    tree[v] = -2
    for i in range(n):
        if tree[i] == v:
            dfs(i)

n = int(input()) 
tree = list(map(int, input().split()))  
erase = int(input())  


dfs(erase)


count = 0
for i in range(n):
    if tree[i] != -2 and i not in tree:
        count += 1

print(count)
