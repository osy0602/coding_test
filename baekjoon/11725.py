import sys
sys.setrecursionlimit(10**6)

input = sys.stdin.readline

n = int(input().strip())
nodes = [[] for _ in range(n+1)]
parents = [0 for _ in range(n+1)]

for _ in range(n-1):
    a, b = map(int, input().split())
    nodes[a].append(b)
    nodes[b].append(a)

def dfs(node):
    for child in nodes[node]:
        if parents[child] == 0:
            parents[child] = node
            dfs(child)

dfs(1)

print('\n'.join(map(str, parents[2:])))
