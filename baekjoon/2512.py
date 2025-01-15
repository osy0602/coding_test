import sys

input = sys.stdin.readline

n = int(input().strip())

budget = list(map(int, input().split()))

total = int(input().strip())

minbudget = 0
maxbudget = max(budget)
result = 0

while minbudget <= maxbudget:
    mid = (minbudget + maxbudget) // 2
    tmp = 0

    for money in budget:
        tmp += min(money, mid)

    if tmp <= total:
        result = mid
        minbudget = mid + 1
    else:
        maxbudget = mid - 1

print(result)