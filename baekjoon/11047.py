import sys
input = sys.stdin.readline

n , k = map(int, input().split())

coins = []
for i in range(n):
    coins.append(int(input().strip()))

answer = 0
for i in range(n-1, -1, -1):
    if coins[i] <= k:
        answer += k // coins[i]
        k = k % coins[i]
    if k == 0:
        break

print(answer)