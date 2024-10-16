import sys
from collections import deque

input = sys.stdin.readline

N, Q = map(int, input().split())

graph = [[] for _ in range(N + 1)]
for _ in range(N - 1):
    p, q, r = map(int, input().split())
    graph[p].append((q, r))
    graph[q].append((p, r))

for _ in range(Q):
    k, v = map(int, input().split())
    
    visited = [False] * (N + 1)
    visited[v] = True
    queue = deque([v])
    count = 0
    
    while queue:
        curr_video = queue.popleft()
        
        for next_video, relevance in graph[curr_video]:
            if not visited[next_video] and relevance >= k:
                visited[next_video] = True
                count += 1
                queue.append(next_video)
    
    print(count)
