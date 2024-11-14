n = int(input())

dp = [[0] for _ in range(n+1)]
for i in range(n+1):
    if i < 4:
        dp[i] = 2*i -1
    else:
        #하 점화식 찾는게 너무 어렵다...
        dp[i] = (dp[i - 1] + 2 *dp[i-2]) % 10007
    
print(dp[n])