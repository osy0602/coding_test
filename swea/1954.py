T = int(input())

for tc in range(1, T+1):
    N = int(input())
    snail = [[0] * N for _ in range(N)]
    #달팽이 진행 순서 우 하 좌 상
    dx = [1, 0, -1, 0]
    dy = [0, 1, 0, -1]
    x, y = 0, 0
    dist = 0

    for num in range(1, N*N+1):
        snail[y][x] = num
        x += dx[dist]
        y += dy[dist]
        if x < 0 or y < 0 or x >= N or y >= N or snail[y][x] != 0:
            x -= dx[dist]
            y -= dy[dist]
            dist = (dist + 1) % 4
            x += dx[dist]
            y += dy[dist]
    
    print("#{}".format(tc))
    for i in range(N):
        print(*snail[i])
