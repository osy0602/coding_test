N, M = map(int, input().split())
grid = [list(map(int, input().strip())) for _ in range(N)]

max_area = 1  

for size in range(2, min(N, M) + 1):
    for i in range(N - size + 1):
        for j in range(M - size + 1):
            if (grid[i][j] == grid[i][j + size - 1] == grid[i + size - 1][j] == grid[i + size - 1][j + size - 1]):
                max_area = max(max_area, size * size)

print(max_area)