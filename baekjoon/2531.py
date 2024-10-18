import sys
input = sys.stdin.readline

N, d, k, c = map(int, input().split())
chobab = []
for _ in range(N):
    chobab.append(int(input().strip()))

chobab += chobab
count = 0
maxNum = 0
for i in range(N):
    chobabnum = len(set(chobab[i:i+k]))
    coupon = c in chobab[i:i+k]
    if not coupon:
        chobabnum += 1
    maxNum = max(maxNum, chobabnum)

print(maxNum)