import sys
from collections import deque
input = sys.stdin.readline

N, M = map(int, input().split())
battlemap = []
for _ in range(M):
    battlemap.append(list(input().strip()))

white = 0
blue = 0

def bfs(x, y, color):
    global white, blue
    dx = [-1, 0, 1, 0]
    dy = [0, 1, 0, -1]
    armynum = 1
    queue = deque()
    queue.append((x, y)) 
    battlemap[y][x] = 0 
    while queue:
        x, y = queue.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if nx < 0 or ny < 0 or nx >= N or ny >= M:
                continue
            if battlemap[ny][nx] == color:
                battlemap[ny][nx] = 0 
                armynum += 1
                queue.append((nx, ny))
    if color == "W":
        white += armynum ** 2
    else:
        blue += armynum ** 2

for y in range(M):
    for x in range(N):
        if battlemap[y][x] == "W":
            bfs(x, y, "W")
        elif battlemap[y][x] == "B":
            bfs(x, y, "B")

print(white, blue)
