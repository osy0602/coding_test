from collections import deque

def bfs(grid, m, n):
    queue = deque()
    days = 0
    for i in range(n):
        for j in range(m):
            if grid[i][j] == 1:
                queue.append((i, j))
    
    directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]
    
    while queue:
        for _ in range(len(queue)):
            x, y = queue.popleft()
            for dx, dy in directions:
                nx, ny = x + dx, y + dy
                if 0 <= nx < n and 0 <= ny < m and grid[nx][ny] == 0:
                    grid[nx][ny] = 1  
                    queue.append((nx, ny))
        if queue:
            days += 1

    for row in grid:
        if 0 in row:
            return -1
    return days

m, n = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(n)]
result = bfs(grid, m, n)
print(result)