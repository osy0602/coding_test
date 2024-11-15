T = int(input())
answer = 0
for tc in range(1, T+1):
    answer = 0
    N, K = map(int, input().split())

    def dfs(n, sumnum, ncount):
        global answer
        if n > 12:
            return
        if  ncount > N or sumnum > K:
            return
        if sumnum == K and ncount == N:
            answer += 1
            return
        
        n += 1
        
        dfs(n, sumnum+n, ncount +1)
        dfs(n, sumnum, ncount)

    dfs(0, 0, 0)
    print(f"#{tc} {answer}")