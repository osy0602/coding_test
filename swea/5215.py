T = int(input())

for tc in range(1, T+1):
    N, L = map(int, input().split())
    tk = []

    for i in range(N):
        tk.append(list(map(int ,input().split())))
    
    def dfs(i, taste, kcal):
        global maxtaste
        if kcal > L: # 칼로리 초과시
            return
        if taste > maxtaste: # 최대 칼로리 저장
            maxtaste = taste
        if i == N: # 마지막까지 탐색
            return
        dfs(i+1, taste + tk[i][0], kcal + tk[i][1]) # 현재 재료 선택
        dfs(i+1, taste, kcal) # 현재 재료 미선택

    maxtaste = 0
    dfs(0,0,0)
        
    
    print(f"#{tc} {maxtaste}")