import sys
from collections import deque

input = sys.stdin.readline

n = int(input().strip())
dx = [0, 1]
dy = [1, 0]
def bfs(x,y):

    queue = deque()
    queue.append([x,y])

    while queue:
        x,y = queue.popleft()
        times = game_map[x][y]
        if game_map[x][y] == -1:
            return True
        
        for i in range(2):
            nx = x + dx[i]*times
            ny = y + dy[i]*times

            if nx < 0 or ny < 0 or nx >= n or ny>= n or game_map[nx][ny] == 0:
                continue
            
            queue.append((nx, ny))
            game_map[nx][ny] == 0

game_map = []
for i in range(n):
    game_map.append(list(map(int, input().split())))

if bfs(0,0):
    print('HaruHaru')
else:
    print('Hing')